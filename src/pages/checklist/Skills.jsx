import { useNavigate } from 'react-router-dom';

export default function Skills() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Skills</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-sm px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      <p className="text-lg">List both hard and soft skills (e.g., JavaScript, public speaking, teamwork). Match them to the keywords in the job description.</p>
    </div>
  );
}