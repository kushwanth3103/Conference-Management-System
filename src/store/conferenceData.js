export const CONFERENCE_DETAILS=[
    {
        id:'a1',
        name:"Tech Innovators Summit 2024",
        description:"Join industry leaders and tech enthusiasts at the Tech Innovators Summit 2024, where groundbreaking ideas and future technologies are showcased",
        submissionGuidelines: [
            "Submit original papers not previously published.",
            "Follow the provided template for formatting (available on the submission portal).",
            "Maximum paper length: 8 pages including references.",
            "All papers must be submitted in PDF format.",
            "Submissions will undergo a double-blind review process."
        ],
        importantDates: {
            submissionDeadline: "October 15, 2024",
            notificationOfAcceptance: "November 30, 2024",
            cameraReadyPapersDue: "December 15, 2024",
            conferenceDates: "January 20-22, 2025"
        },
        faqs: [
            {
              question: "How do I submit my paper?",
              answer: "Use the submission portal link above. Make sure your paper adheres to the formatting guidelines."
            },
            {
              question: "What is the review process?",
              answer: "All papers will undergo a double-blind review to ensure impartiality."
            },
            {
              question: "Are there any fees?",
              answer: "No submission fees are required."
            },
            {
              question: "Can I submit multiple papers?",
              answer: "Yes, you can submit multiple papers, but each submission must be unique and adhere to the guidelines."
            }
        ],
      schedule: [
        {
          date:"2024-10-10",
          sessionId: "s1",
          time: "09:00 AM",
          title: "Opening Remarks",
          description: "An introduction to the summit and its goals.",
          room: "Main Hall",
          speaker: [
              {
                speakerId: "sp1",
                name: "John Doe",
                profile: "CEO of Tech Innovators. Expert in digital transformation and AI.",
                photoUrl: "https://www.nmspacemuseum.org/wp-content/uploads/2019/03/Elon_Musk.jpg"
              },
              {
                speakerId: "sp2",
                name: "Michael Lee",
                profile: "Professor of Quantum Computing at Future University.",
                photoUrl: "https://s7d1.scene7.com/is/image/wbcollab/sundar_pichai_google_ceo-1:220x220?qlt=90&fmt=webp&resMode=sharp2"
              },
              
          ]
        },
      ],
    }
]