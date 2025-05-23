import { useState } from 'react';

export default function Notes() {
  const [text, setText] = useState("");

  const exportAsWord = () => {
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                   "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                   "xmlns='http://www.w3.org/TR/REC-html40'>" +
                   "<head><meta charset='utf-8'><title>Export HTML to Word Document</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + text.replace(/\n/g, "<br>") + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = "resume_notes.doc";
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Notes</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full h-64 p-3 border rounded"
      />
      <button
        onClick={exportAsWord}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded shadow"
      >
        Export as Word Document
      </button>
    </div>
  );
}
