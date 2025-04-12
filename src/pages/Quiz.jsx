import { useState } from 'react';

const questions = [ 
  {
    question: "What’s the best font size for resumes?",
    options: ["10 pt", "12 pt", "14 pt", "16 pt"],
    answer: 1
  },
  {
    question: "What’s the ideal length for a resume for most professionals?",
    options: ["1–2 pages", "3–4 pages", "As many pages as needed", "One paragraph"],
    answer: 0
  },
  {
    question: "Should you include a photo on a US resume?",
    options: ["Yes", "No", "Only if it's professional", "Only for creative roles"],
    answer: 1
  },
  {
    question: "Which resume file format is safest and most widely accepted?",
    options: [".docx", ".pdf", ".txt", ".jpeg"],
    answer: 1
  },
  {
    question: "What is the purpose of using keywords in your resume?",
    options: [
      "To make it sound fancy",
      "To pass Applicant Tracking Systems (ATS)",
      "To make it longer",
      "For SEO on Google"
    ],
    answer: 1
  },
  {
    question: "Which of these phrases is most effective on a resume?",
    options: [
      "Responsible for managing projects",
      "Worked on project teams",
      "Managed cross-functional projects that increased efficiency by 20%",
      "Did some project stuff"
    ],
    answer: 2
  },
  {
    question: "Which is a resume pitfall you should avoid?",
    options: [
      "Tailoring the resume to the job",
      "Using clear, action-driven bullet points",
      "Listing vague duties without outcomes",
      "Including measurable achievements"
    ],
    answer: 2
  },
  {
    question: "Which of the following should you avoid using repeatedly in your resume?",
    options: [
      "Action verbs like 'Led' or 'Managed'",
      "Buzzwords like 'team player' without context",
      "Quantifiable results",
      "Job-specific keywords"
    ],
    answer: 1
  },
  {
    question: "What should you include at the top of your resume?",
    options: ["Favorite quote", "Professional references", "Contact Info & Summary", "Salary expectation"],
    answer: 2
  }
];



export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Quiz Completed!</h2>
        <p className="text-lg">You scored {score} out of {questions.length}.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Quick Resume Quiz</h2>
      <div className="mb-6">
        <p className="text-lg font-medium mb-2">{questions[current].question}</p>
        {questions[current].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="block w-full text-left px-4 py-2 mb-2 border rounded hover:bg-blue-100"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
