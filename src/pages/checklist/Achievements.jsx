import { useNavigate } from 'react-router-dom';

export default function Achievements() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Achievements</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-sm px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      <p className="text-lg">Use metrics to describe your success (e.g., 'Increased efficiency by 30%'). Begin bullet points with strong verbs like 'Led', 'Created', or 'Optimized'.</p>
    </div>
  );
}