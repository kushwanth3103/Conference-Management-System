import { CONFERENCES } from "./dataConferences";
import { jsPDF } from "jspdf";

const generatePDF = (conferenceId) => {
  // Find the conference by its ID
  const conference = CONFERENCES.find((item) => item.conferenceId === conferenceId);

  if (!conference) {
    console.error("Conference not found.");
    return;
  }

  const doc = new jsPDF();

  // Add conference title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(conference.conferenceName + " - Conference Details", 10, 20);

  // Add conference details
  let yOffset = 30;
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Description:", 10, yOffset);
  yOffset += 10;
  doc.setFontSize(12);
  
  // Calculate the height of the text block for the description
  const descriptionLines = doc.splitTextToSize(conference.description, 180);
  doc.text(descriptionLines, 10, yOffset);
  yOffset += descriptionLines.length * 6 + 10;

  doc.setFontSize(14);
  doc.text("Address:", 10, yOffset);
  yOffset += 10;
  doc.setFontSize(12);
  doc.text(conference.address || "N/A", 10, yOffset);
  yOffset += 10;

  doc.setFontSize(14);
  doc.text("Email:", 10, yOffset);
  yOffset += 10;
  doc.setFontSize(12);
  doc.text(conference.email, 10, yOffset);
  yOffset += 10;

  doc.setFontSize(14);
  doc.text("Phone Number:", 10, yOffset);
  yOffset += 10;
  doc.setFontSize(12);
  doc.text(conference.phone_number, 10, yOffset);
  yOffset += 10;

  doc.setFontSize(14);
  doc.text("Date:", 10, yOffset);
  yOffset += 10;
  doc.setFontSize(12);
  doc.text(conference.date, 10, yOffset);
  yOffset += 20;

  // Add speaker details
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Speakers:", 10, yOffset);
  yOffset += 10;

  conference.speakers.forEach((speaker, index) => {
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`${index + 1}. Name: ${speaker.name}`, 10, yOffset);
    yOffset += 6;

    // Handle multi-line text for bio
    const bioLines = doc.splitTextToSize(`Bio: ${speaker.bio}`, 180);
    doc.text(bioLines, 10, yOffset);
    yOffset += bioLines.length * 6 + 6;

    doc.text(`Email: ${speaker.email}`, 10, yOffset);
    yOffset += 6;

    // Handle multi-line text for description
    const descriptionLines = doc.splitTextToSize(`Description: ${speaker.description}`, 180);
    doc.text(descriptionLines, 10, yOffset);
    yOffset += descriptionLines.length * 6 + 6;

    doc.text(`Discussion Topic: ${speaker.discussion_topic}`, 10, yOffset);
    yOffset += 6;
    doc.text(`Session Title: ${speaker.session_title}`, 10, yOffset);
    yOffset += 6;
    doc.text(`Start Time: ${speaker.start_time}`, 10, yOffset);
    yOffset += 6;
    doc.text(`End Time: ${speaker.end_time}`, 10, yOffset);
    yOffset += 16;

    // Add a new page if content exceeds the limit
    if (yOffset > 270) {
      doc.addPage();
      yOffset = 20; // Reset yOffset for the new page
    }
  });

  // Save the PDF
  doc.save(`${conference.conferenceName}_details.pdf`);
};

export default generatePDF;
