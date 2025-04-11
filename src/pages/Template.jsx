export default function Template() {
  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Download a Resume Template</h2>
      <p className="mb-6">Use the link below to download a modern, editable resume template:</p>
      <a
        href="https://example.com/resume-template.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Download Resume Template (Word)
      </a>
    </div>
  );
}
