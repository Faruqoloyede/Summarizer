"use client";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { ClipLoader } from "react-spinners"; // npm install react-spinners

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [summaryFileUrl, setSummaryFileUrl] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);
    setLoading(true);

    // Send file to API
    const formData = new FormData();
    formData.append("file", uploadedFile);

    // Choose output format (you can add a select dropdown if needed)
    formData.append("format", "pdf");

    try {
      const res = await fetch("/api/extract", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Summarization failed");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      setSummaryFileUrl(url);
    } catch (err) {
      console.error(err);
      alert("Something went wrong while summarizing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full px-6 bg-[#ECFCFD] mt-24">
      <div className="border-2 border-dashed border-[#44E5E7] rounded-lg p-8 text-center bg-white hover:bg-[#ECFCFD] transition-colors">
        <label className="cursor-pointer">
          <FiUpload className="mx-auto text-3xl text-[#44E5E7] mb-3" />
          <p className="text-[#0E2E2E]">Drag & drop files here or click to browse</p>
          <p className="text-sm text-[#0E2E2E]/70 mt-2">Supported formats: PDF, DOCX</p>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* Show file name */}
      {file && !loading && !summaryFileUrl && (
        <p className="mt-4 text-[#0E2E2E] font-medium">Uploaded: {file.name}</p>
      )}

      {/* Show loading spinner */}
      {loading && (
        <div className="mt-4 flex flex-col items-center">
          <ClipLoader size={30} color="#44E5E7" />
          <p className="mt-2 text-[#0E2E2E]/70">Summarizing with Gemini...</p>
        </div>
      )}

      {/* Show summarized file download */}
      {summaryFileUrl && !loading && (
        <div className="mt-4">
          <p className="text-green-600 font-semibold">✅ Summarization Complete</p>
          <a
            href={summaryFileUrl}
            download={`summary-${file?.name.replace(/\.[^/.]+$/, "")}.pdf`}
            className="mt-2 inline-block bg-[#44E5E7] text-white px-4 py-2 rounded-lg hover:bg-[#3bc4c6] transition"
          >
            Download Summarized File
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;
