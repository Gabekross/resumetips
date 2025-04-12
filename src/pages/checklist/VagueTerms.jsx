import { useNavigate } from 'react-router-dom';

export default function VagueTerms() {
  const navigate = useNavigate();
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Avoiding Vague Resume Language</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 text-sm px-3 py-1 rounded shadow hover:bg-gray-300"
        >
          ← Back
        </button>
      </div>
      <p className="mb-4">
        Common Resume Pitfalls to Avoid (Especially with Vague Terms)
      </p>
      <ul className="list-disc pl-6 space-y-2 text-base">
        <li>
          <strong>Using “Responsible for…” too often</strong><br />
          🔁 Replace with action verbs like “Managed,” “Led,” “Created,” “Optimized,” etc.<br />
          <strong>Example:</strong><br />
          ❌ Responsible for social media<br />
          ✅ Managed Instagram and Twitter accounts, increasing followers by 30% in 3 months.
        </li>
        <li>
          <strong>Overusing buzzwords without context</strong><br />
          Terms like “results-driven,” “team player,” “self-starter” add little value without proof.<br />
          🔁 Back them up with quantifiable results or specific actions.
        </li>
        <li>
          <strong>Being too general</strong><br />
          ❌ Worked on reports.<br />
          ✅ Compiled and analyzed weekly sales reports to inform executive decisions.
        </li>
        <li>
          <strong>Too much passive voice</strong><br />
          ❌ Was involved in launching a new product.<br />
          ✅ Led the launch of a new product, resulting in $150K revenue in Q1.
        </li>
        <li>
          <strong>Using unclear job titles</strong><br />
          ❌ Tech Specialist<br />
          ✅ IT Support Specialist – Help Desk Tier 2
        </li>
        <li>
          <strong>Leaving out context (the “how” or “why”)</strong><br />
          ❌ Managed budgets.<br />
          ✅ Managed $50K monthly ad budget to maximize ROI across Facebook and Google Ads.
        </li>
      </ul>
    </div>
  );
}
