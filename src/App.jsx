
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Checklist from './pages/Checklist';
import Template from './pages/Template';
import Notes from './pages/Notes';
import Resources from './pages/Resources';
import QnA from './pages/QnA';
import Quiz from './pages/Quiz';
import AdminQnA from './pages/AdminQnA';
import ContactInfo from './pages/checklist/ContactInfo';
import Summary from './pages/checklist/Summary';
import Experience from './pages/checklist/Experience';
import Achievements from './pages/checklist/Achievements';
import Education from './pages/checklist/Education';
import Skills from './pages/checklist/Skills';
import Formatting from './pages/checklist/Formatting';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 transition-all duration-300 ease-in-out">
        <Navbar />
        <main className="p-4 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/template" element={<Template />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/qna" element={<QnA />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/admin/qna" element={<AdminQnA />} />
            <Route path="/checklist/contact-info" element={<ContactInfo />} />
            <Route path="/checklist/summary" element={<Summary />} />
            <Route path="/checklist/experience" element={<Experience />} />
            <Route path="/checklist/achievements" element={<Achievements />} />
            <Route path="/checklist/education" element={<Education />} />
            <Route path="/checklist/skills" element={<Skills />} />
            <Route path="/checklist/formatting" element={<Formatting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
