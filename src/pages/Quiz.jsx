import { useState } from 'react';

const questions = [
  {
    question: "What’s the best font size for resumes?",
    options: ["10 pt", "12 pt", "14 pt", "16 pt"],
    answer: 1
  },
  {
    question: "What should go at the top of your resume?",
    options: ["Skills", "Education", "Contact Info & Summary", "References"],
    answer: 2
  },
  {
    question: "Should you include a photo on a US resume?",
    options: ["Yes", "No", "Only if it's professional", "Only for creative roles"],
    answer: 1
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
