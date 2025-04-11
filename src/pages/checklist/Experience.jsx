import { useNavigate } from 'react-router-dom';

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Experience</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-sm px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      <p className="text-lg">Include work history relevant to the job with bullet points using action verbs. List accomplishments using the STAR method (Situation, Task, Action, Result).</p>
    </div>
  );
}