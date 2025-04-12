import { useNavigate } from 'react-router-dom';

export default function ListingDuties() {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">From Duties to Achievements</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-sm px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      <p className="mb-4">
        Avoid listing job responsibilities — instead, show impact and achievements.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li>
          <strong>Listing duties, not achievements</strong><br />
          ❌ Handled customer complaints.<br />
          ✅ Resolved customer complaints with a 95% satisfaction rate.
        </li>
        <li>
          <strong>No metrics or outcomes</strong><br />
          ❌ Improved workflows.<br />
          ✅ Reduced processing time by 20% by streamlining data entry systems.
        </li>
        <li>
          <strong>Repeating the same phrase for every job</strong><br />
          Avoid “Responsible for…” or “Worked on…” repetitively.<br />
          🔁 Use: Developed, Initiated, Collaborated, Designed, Increased.
        </li>
        <li>
          <strong>Focusing on tasks instead of value</strong><br />
          🔁 Always ask: “What impact did I make?”
        </li>
      </ul>
    </div>
  );
}
