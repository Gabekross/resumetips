import { useNavigate } from 'react-router-dom';

export default function Formatting() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Formatting</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-sm px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      <p className="text-lg">Use consistent fonts and spacing. Avoid clutter. Save as PDF before submitting. Prioritize readability — recruiters spend ~6 seconds per resume.</p>
    </div>
  );
}