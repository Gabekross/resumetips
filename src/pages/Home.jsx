import { useEffect, useState } from 'react';

export default function Home() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-left space-y-6">
      <h1 className="text-3xl font-bold text-blue-700">Crafting a Resume That Stands Out</h1>

      <p className="text-lg">
        A great resume is more than a list of jobs — it's your personal marketing tool. It should clearly communicate your value, match the job you're targeting, and pass through automated screening systems.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600">✅ The Right Structure</h2>
      <p>
        Use clear headings: Contact Info, Summary, Experience, Education, and Skills. Keep formatting clean and consistent. Recruiters should find what they need in seconds.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600">🔍 Keywords & ATS Optimization</h2>
      <p>
        Many companies use Applicant Tracking Systems (ATS) to scan resumes. To get through, use keywords from the job description — especially for skills and job titles.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600">🚫 Common Resume Pitfalls</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Typos and inconsistent formatting</li>
        <li>Too long or too short (ideal: 1–2 pages)</li>
        <li>Unprofessional email address</li>
        <li>Listing job duties instead of achievements</li>
        <li>Using vague terms like “responsible for”</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600">💡 Bonus Tip</h2>
      <p>
        Customize your resume for each role — tailor your summary, reorder skills, and emphasize the most relevant experiences first.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">📊 Visual Guide</h2>
        <img 
          src="https://cdn.pixabay.com/photo/2017/08/30/07/52/resume-2690518_1280.png" 
          alt="Sample Resume Layout" 
          className="w-full max-w-full md:max-w-2xl mx-auto rounded shadow-lg h-auto object-contain"
        />
        <p className="text-sm text-gray-600 mt-2">Sample resume layout with a clean and modern structure.</p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🧠 ATS vs Human Review</h2>
        <img 
          src="https://cdn.pixabay.com/photo/2021/12/28/20/32/ai-6900241_1280.png" 
          alt="ATS vs Human Resume Review" 
          className="w-full max-w-full md:max-w-2xl mx-auto rounded shadow-lg h-auto object-contain"
        />
        <p className="text-sm text-gray-600 mt-2">
          Understand the difference between machine-based screening (ATS) and human review — and how to craft your resume for both.
        </p>
      </div>

      {showMessage && (
        <div className="fixed top-6 right-6 bg-blue-100 text-blue-800 p-4 rounded-xl shadow-lg max-w-xs z-50">
          <div className="flex justify-between items-start">
            <p className="text-sm pr-4">
              💡 Welcome to the companion app for today’s seminar! Use the tabs above to follow along, take notes, and download resources.
            </p>
            <button
              onClick={() => setShowMessage(false)}
              className="text-blue-700 text-sm ml-2 hover:text-blue-900"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
