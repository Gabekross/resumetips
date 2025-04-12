import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex flex-wrap gap-4 justify-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/checklist">Checklist</Link></li>
        {/* <li><Link to="/template">Download</Link></li> */}
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/qna">Q&A</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/admin/qna">Admin</Link></li>
      </ul>
    </nav>
  );
}
