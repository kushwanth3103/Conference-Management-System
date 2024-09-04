import { CONFERENCE_DETAILS } from "../store/conferenceData";
import { jsPDF } from "jspdf";

const generatePDF = (conferenceId) => {
  const conference = CONFERENCE_DETAILS.find((item) => item.id === conferenceId);

  if (!conference) {
    console.error("Conference not found.");
    return;
  }

  const doc = new jsPDF();

  // Add conference name
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(conference.name+" - Schedule & Agenda", 10, 20);

  // Add schedules
  let yOffset = 30; // Starting y position for schedule details
  doc.setFontSize(14);
  doc.text("Schedule:", 10, yOffset);
  yOffset += 10;

  conference.schedule.forEach((session,index) => {
    // Add session details
    doc.setFontSize(12);
    doc.text(`${index+1}) Title: ${session.title}`, 10, yOffset);
    doc.setFont("helvetica", "normal");
    yOffset+=6;
    doc.text(`${session.description}`, 20, yOffset);
    yOffset += 6;
    doc.text(`Date: ${session.date}`, 20, yOffset);
    yOffset += 6;
    doc.text(`Time: ${session.time}`, 20, yOffset);
    yOffset += 6;
    doc.text(`Venue: ${session.room}`, 20, yOffset);
    yOffset += 16;


    // Add speaker details
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Speakers:", 20, yOffset);
    yOffset += 8;

    doc.setFont("helvetica", "normal");
    session.speaker.forEach((sp, index) => {
      doc.setFontSize(12);
      doc.text(`${sp.name}`, 20, yOffset);
      yOffset += 6;
      doc.text(`Profile: ${sp.profile}`, 20, yOffset);
      yOffset += 6;

      // // Add speaker image if available
      // if (sp.photoUrl) {
      //   const img = new Image();
      //   img.src = sp.photoUrl;

      //   img.onload = () => {
      //     doc.addImage(img, 'JPEG', 160, yOffset - 12, 20, 20); // Small size image on the right
          
      //     // Save or open the PDF after the last image is loaded
      //     if (index === session.speaker.length - 1) {
      //       doc.save(`${conference.name}_details.pdf`);
      //     }
      //   };
      // }

      yOffset += 10;

      // Add a page if the content goes beyond page limit
      if (yOffset > 270) {
        doc.addPage();
        yOffset = 20; // Reset yOffset for new page
      }
    });
  });

  // Save the PDF
  doc.save(`${conference.name}_details.pdf`);
};


export default generatePDF;