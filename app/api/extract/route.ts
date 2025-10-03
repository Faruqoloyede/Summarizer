import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";
import { summarizeText } from "@/lib/openai";

import PDFDocument from "pdfkit";
import { Document, Packer, Paragraph } from "docx";

// ✅ Extract text from PDF using dynamic import
async function extractFromPDF(fileBuffer: Buffer) {
  const pdfModule = await import("pdf-parse"); // dynamic import to avoid worker errors
  const pdf = pdfModule.default || pdfModule; // handle both default & named exports
  const data = await pdf(fileBuffer);
  return data.text;
}

// ✅ Extract text from DOCX
async function extractFromDOCX(fileBuffer: Buffer) {
  const { value } = await mammoth.extractRawText({ buffer: fileBuffer });
  return value;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const format = formData.get("format") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract text based on file type
    let extractedText = "";
    if (file.name.endsWith(".pdf")) {
      extractedText = await extractFromPDF(buffer);
    } else if (file.name.endsWith(".docx")) {
      extractedText = await extractFromDOCX(buffer);
    } else {
      return NextResponse.json({ error: "Unsupported file type" }, { status: 400 });
    }

    // 🔹 Summarize with Gemini
    const summary = await summarizeText(extractedText);

    let responseFile: Buffer;
    let filename = "";

    if (format === "pdf") {
      // Generate PDF response
      const doc = new PDFDocument();
      const chunks: Buffer[] = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.fontSize(12).text(summary, { align: "left" });
      doc.end();

      responseFile = await new Promise((resolve) => {
        doc.on("end", () => resolve(Buffer.concat(chunks)));
      });
      filename = "summary.pdf";
    } else {
      // Generate DOCX response
      const doc = new Document({
        sections: [{ children: [new Paragraph(summary)] }],
      });
      responseFile = await Packer.toBuffer(doc);
      filename = "summary.docx";
    }

    return new NextResponse(responseFile, {
      headers: {
        "Content-Type":
          format === "pdf"
            ? "application/pdf"
            : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err) {
    console.error("❌ Error in /api/extract:", err);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
