import { useEffect, useState } from 'react';
import sampleImage from '../assets/sample.png';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="max-w-2xl mx-auto text-left space-y-6 pb-32">
        <h1 className="text-2xl font-bold text-blue-700">CRAFTING A RESUME THAT STANDS OUT</h1>

        <p className="text-lg">
          A great resume is more than a list of jobs — it's your personal marketing tool. It should clearly communicate your value, match the job you're targeting, and pass through automated screening systems.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">💡 The Right Structure</h2>
        <p>
          Use clear headings — Contact Info, Summary, Experience, Education, and Skills. Keep formatting clean and consistent. Recruiters should find what they need in seconds.
        </p>

        <div className="mt-6">
          <h3 className="text -1x1 font-semibold text-blue-600 mb-2">Sample resume layout</h3>
          <button onClick={() => setShowModal(true)} className="focus:outline-none">
            <img 
              src={sampleImage}  
              alt="Sample Resume Layout"
              className="w-60 md:w-80 mx-auto rounded shadow-lg h-auto object-contain hover:opacity-90 transition"
            />
          </button>
          <p className="text-sm text-gray-600 mt-2 text-left">
            Click Image to view Sample resume layout.
          </p>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-4 max-w-3xl w-full relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-xl font-bold"
              >
                ×
              </button>
              <img
                src={sampleImage}  
                alt="Sample Resume Layout"
                className="w-full h-auto rounded"
              />
              <p className="text-center text-sm text-gray-600">
                This layout demonstrates a well-structured resume format with clear sections and easy readability.
              </p>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-blue-600">💡 Use Keywords</h2>
        <p>
          Many companies use Applicant Tracking Systems (ATS) to scan resumes. To get through, use keywords from the job description — especially for skills and job titles.
        </p>
        <div className="mt-10">
          <h2 className="text-1xl font-semibold text-blue-600 mb-4"> ATS vs Human Review</h2>
          <table className="w-full table-auto border border-gray-300 text-left">
            <thead>
              <tr className="bg-blue-100 text-green-700">
                <th className="p-2 border">Aspect</th>
                <th className="p-2 border">ATS</th>
                <th className="p-2 border">Human Reviewer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">How it reads</td>
                <td className="p-2 border">Scans text and keywords</td>
                <td className="p-2 border">Reads layout, tone, nuance</td>
              </tr>
              <tr>
                <td className="p-2 border">Focus</td>
                <td className="p-2 border">Exact match to job description</td>
                <td className="p-2 border">Overall fit and storytelling</td>
              </tr>
              <tr>
                <td className="p-2 border">Decision style</td>
                <td className="p-2 border">Binary filters (yes/no)</td>
                <td className="p-2 border">Context-aware evaluation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-semibold text-blue-600">💡 Tailor Resume to the Job</h2>
        <p>
          Customize your resume for each role — tailor your summary, reorder skills, and emphasize the most relevant experiences first.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">💡 Avoid Common Resume Pitfalls</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Weak or passive language (no action verbs)</li>
          <li>❌ Using one generic resume for every job</li>
          <li>Focusing on duties instead of accomplishments</li>
          <li>Too long or too short</li>
          <li>Including irrelevant or outdated experience</li>
          <li>❌ Poor formatting or inconsistent design</li>
          <li>❌ Typos and grammar errors</li>
          <li>Listing references or “Available upon request”</li>
          <li>Unprofessional email address</li>
          <li>
            <a href="/checklist/listing-duties" className="text-blue-600 hover:underline">
              Listing job duties instead of achievements
            </a>
          </li>
          <li>
            <a href="/checklist/vague-terms" className="text-blue-600 hover:underline">
              Using vague terms like “responsible for”
            </a>
          </li>
          <li>❌ Not showing measurable results</li>
        </ul>
        {showMessage && (
          <div className="fixed top-6 right-6 bg-blue-100 text-blue-800 p-4 rounded-xl shadow-lg max-w-xs z-50">
            <div className="flex justify-between items-start">
              <p className="text-sm pr-4">
                Welcome to the companion app for today’s seminar! Use this page and the tabs above to follow along, take notes, and view resources.
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
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-100/40 via-blue-200/30 to-blue-100/40 text-center text-sm text-gray-700 py-4 shadow-inner backdrop-blur-md z-50">
          <p>
            © {new Date().getFullYear()} App Crafted for <strong>The New MC</strong> by Gabriel Ajibade. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/gabriel-a-50bb6462/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </footer>
    </>
  );
}
