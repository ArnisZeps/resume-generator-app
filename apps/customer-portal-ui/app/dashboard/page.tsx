"use client"
// app/builder/page.tsx
import { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Define types for resume data
interface JobExperience {
  title: string;
  company: string;
  description: string;
}

interface ResumeData {
  name: string;
  email: string;
  experience: JobExperience;
}

export default function Builder() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "",
    email: "",
    experience: { title: "", company: "", description: "" },
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const htmlPreviewRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name in resumeData.experience) {
      setResumeData((prev) => ({
        ...prev,
        experience: { ...prev.experience, [name]: value },
      }));
    } else {
      setResumeData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Render HTML to Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const htmlPreview = htmlPreviewRef.current;
    if (!canvas || !htmlPreview) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size (20rem = 320px at 16px/rem)
    const width = 320;
    const height = width * 1.414; // ~452px (A4 ratio)
    canvas.width = width;
    canvas.height = height;

    // Render HTML to canvas
    html2canvas(htmlPreview, { scale: 1, width: 320, height: 452 }).then(
      (renderedCanvas) => {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(renderedCanvas, 0, 0, width, height);
      }
    );
  }, [resumeData]);

  // PDF generation
  const handleDownloadPDF = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Resume Builder
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Form Section (Left) */}
          <section className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Enter Your Details
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={resumeData.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={resumeData.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Job Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={resumeData.experience.title}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={resumeData.experience.company}
                      onChange={handleChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tech Corp"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={resumeData.experience.description}
                      onChange={handleChange}
                      rows={3}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe your role and achievements..."
                    />
                  </div>
                </div>
              </div>
            </form>
          </section>

          {/* Preview Section (Right) */}
          <section className="w-full md:w-1/2 flex flex-col items-center">
            <div className="flex justify-between w-full max-w-[20rem] mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Resume Preview
              </h2>
              <button
                onClick={handleDownloadPDF}
                className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </button>
            </div>
            {/* Hidden HTML preview for rendering */}
            <div
              ref={htmlPreviewRef}
              className="absolute -left-[9999px] w-[320px] h-[452px] bg-white p-4 text-sm space-y-3"
            >
              <div>
                <h3 className="text-base font-medium text-gray-800">
                  {resumeData.name || "Your Name"}
                </h3>
                <p className="text-gray-600 text-xs">
                  {resumeData.email || "your.email@example.com"}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  {resumeData.experience.title || "Job Title"}
                </h4>
                <p className="text-gray-600 text-xs">
                  {resumeData.experience.company || "Company Name"}
                </p>
                <p className="text-gray-500 text-xs">
                  {resumeData.experience.description || "Job description..."}
                </p>
              </div>
            </div>
            {/* Canvas to display the rendered HTML */}
            <div className="w-full max-w-[20rem] rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <canvas
                ref={canvasRef}
                className="w-full"
                style={{ aspectRatio: "1 / 1.414" }} // A4 ratio
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}