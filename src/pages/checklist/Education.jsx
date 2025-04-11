import { useNavigate } from 'react-router-dom';

export default function Education() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Education</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-sm px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      <p className="text-lg">Mention your highest degree(s), relevant coursework, certifications, and graduation dates. If you're a student or recent grad, education goes first.</p>
    </div>
  );
}