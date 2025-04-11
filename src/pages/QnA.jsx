import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function QnA() {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    const { error } = await supabase.from('questions').insert({ content: question });

    if (error) {
      console.error(error);
      setStatus('There was an error submitting your question.');
    } else {
      setStatus('Question submitted successfully!');
      setQuestion('');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          name="question"
          placeholder="Type your question here..."
          required
          className="w-full p-3 border rounded h-40"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded shadow"
        >
          Submit Question
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </div>
  );
}
