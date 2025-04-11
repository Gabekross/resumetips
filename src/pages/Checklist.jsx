import { Link } from 'react-router-dom';

export default function Checklist() {
  const items = [
    { label: "Clear contact info", path: "/checklist/contact-info" },
    { label: "Professional summary", path: "/checklist/summary" },
    { label: "Tailored experience", path: "/checklist/experience" },
    { label: "Action verbs & quantifiable results", path: "/checklist/achievements" },
    { label: "Education and certifications", path: "/checklist/education" },
    { label: "Relevant skills", path: "/checklist/skills" },
    { label: "Readable formatting", path: "/checklist/formatting" }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Resume Checklist</h2>
      <ul className="list-disc pl-6 space-y-2">
        {items.map(({ label, path }, idx) => (
          <li key={idx} className="text-lg">
            <Link to={path} className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline-offset-2 hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
