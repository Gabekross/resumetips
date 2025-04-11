import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const adminToken = import.meta.env.VITE_ADMIN_TOKEN;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminQnA() {
  const [questions, setQuestions] = useState([]);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token === adminToken) {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetchQuestions();

      const channel = supabase
        .channel('realtime:public:questions')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'questions' },
          (payload) => {
            setQuestions((prev) => [payload.new, ...prev]);
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [authenticated]);

  const fetchQuestions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setQuestions(data);
    setLoading(false);
  };

  const handleLogin = () => {
    if (password === adminToken) {
      localStorage.setItem('admin_token', password);
      setAuthenticated(true);
    } else {
      alert('Incorrect admin password');
    }
  };

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto text-center mt-20">
        <h2 className="text-xl font-semibold mb-4">Admin Access</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          className="border p-2 rounded w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Submitted Questions</h2>
        <button
          onClick={() => {
            localStorage.removeItem('admin_token');
            window.location.reload();
          }}
          className="px-4 py-2 bg-red-500 text-white rounded shadow"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-500">Loading questions...</p>
        </div>
      ) : questions.length === 0 ? (
        <p>No questions submitted yet.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((q) => (
            <li key={q.id} className="bg-white p-4 shadow rounded">
              <p>{q.content}</p>
              <p className="text-sm text-gray-500 mt-2">
                Submitted at: {new Date(q.created_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
