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
    },
    {
      id: 'a2',
      name: "Global Health Conference",
      description:
        "A gathering of health professionals and researchers from around the world to discuss and explore advancements in healthcare.",
      submissionGuidelines: [
        "Papers must be original and focus on advancements in healthcare.",
        "Follow the APA formatting style.",
        "Maximum paper length: 10 pages, including figures and references.",
        "Submit in PDF format only.",
        "Submissions will be peer-reviewed by an international panel of experts.",
      ],
      importantDates: {
        submissionDeadline: "September 30, 2024",
        notificationOfAcceptance: "November 5, 2024",
        cameraReadyPapersDue: "November 25, 2024",
        conferenceDates: "December 10-12, 2024",
      },
      faqs: [
        {
          question: "What are the main topics for submission?",
          answer:
            "Topics include digital health, infectious diseases, mental health, global health policies, and more.",
        },
        {
          question: "Is there a word limit for abstracts?",
          answer: "Yes, abstracts should be no more than 300 words.",
        },
        {
          question: "Can I submit more than one paper?",
          answer: "Yes, multiple submissions are allowed, but each must be unique.",
        },
      ],
      schedule: [
        {
          date: "2024-12-10",
          sessionId: "s2",
          time: "10:00 AM",
          title: "Advancements in Digital Health",
          description: "Exploring the impact of digital health solutions on global health.",
          room: "Conference Hall A",
          speaker: [
            {
              speakerId: "sp3",
              name: "Dr. Sarah Williams",
              profile: "Chief Medical Officer at Global Health Initiative.",
              photoUrl: "https://example.com/photos/sarah_williams.jpg",
            },
          ],
        },
        {
          date: "2024-12-11",
          sessionId: "s3",
          time: "01:00 PM",
          title: "Combating Infectious Diseases",
          description:
            "Innovative approaches to preventing and managing infectious diseases globally.",
          room: "Conference Hall B",
          speaker: [
            {
              speakerId: "sp4",
              name: "Dr. Mark Johnson",
              profile: "Epidemiologist and Researcher at World Health Organization.",
              photoUrl: "https://example.com/photos/mark_johnson.jpg",
            },
          ],
        },
      ],
    },
    // {
    //     id: 'a2',
    //     name: "Global Health Conference",
    //     description:
    //       "A gathering of health professionals and researchers from around the world to discuss and explore advancements in healthcare.",
    //     submissionGuidelines: [
    //       "Papers must be original and focus on advancements in healthcare.",
    //       "Follow the APA formatting style.",
    //       "Maximum paper length: 10 pages, including figures and references.",
    //       "Submit in PDF format only.",
    //       "Submissions will be peer-reviewed by an international panel of experts.",
    //     ],
    //     importantDates: {
    //       submissionDeadline: "September 30, 2024",
    //       notificationOfAcceptance: "November 5, 2024",
    //       cameraReadyPapersDue: "November 25, 2024",
    //     },
    //     faqs: [
    //       {
    //         question: "What are the main topics for submission?",
    //         answer:
    //           "Topics include digital health, infectious diseases, mental health, global health policies, and more.",
    //       },
    //       {
    //         question: "Is there a word limit for abstracts?",
    //         answer: "Yes, abstracts should be no more than 300 words.",
    //       },
    //       {
    //         question: "Can I submit more than one paper?",
    //         answer: "Yes, multiple submissions are allowed, but each must be unique.",
    //       },
    //     ],
    //   },
    //   {
    //     id: 'a3',
    //     name: "AI & Machine Learning Expo",
    //     description:
    //       "Dive into the latest trends in AI and machine learning with experts from the industry. Hands-on workshops, demos, and networking opportunities await!",
    //     submissionGuidelines: [
    //       "Papers should focus on recent developments in AI, machine learning, and related technologies.",
    //       "Follow the IEEE formatting style for submissions.",
    //       "Maximum paper length: 12 pages, including all content.",
    //       "Submit your paper as a PDF file.",
    //       "Each submission will be reviewed by three independent reviewers.",
    //     ],
    //     importantDates: {
    //       submissionDeadline: "October 20, 2024",
    //       notificationOfAcceptance: "December 1, 2024",
    //       cameraReadyPapersDue: "December 20, 2024",
    //     },
    //     faqs: [
    //       {
    //         question: "What are the focus areas for the conference?",
    //         answer:
    //           "Key areas include deep learning, neural networks, computer vision, natural language processing, and AI ethics.",
    //       },
    //       {
    //         question: "Are there any specific guidelines for demo submissions?",
    //         answer:
    //           "Yes, demo submissions should include a 2-page description and a video demonstration.",
    //       },
    //       {
    //         question: "Will there be awards for best papers?",
    //         answer: "Yes, awards will be given for the best paper and best student paper.",
    //       },
    //     ],
    //   },
    // {name: "Sustainability Forum 2024", description: "Explore sustainable solutions and innovations for a better future with global environmentalists, policymakers, and business leaders." },
    // { name: "Blockchain World Congress", description: "Discover the transformative power of blockchain technology in various industries. Meet with developers, innovators, and enthusiasts." },
    // { name: "Creative Marketing Summit", description: "A unique gathering of marketing professionals and creatives to explore the latest trends, tools, and techniques in digital marketing." },
    // { name: "Future of Work Symposium", description: "A deep dive into the evolving workplace landscape, featuring discussions on remote work, digital collaboration, and future career paths." },
    // { name: "Global Finance & Investment Forum", description: "Connect with finance leaders, investors, and entrepreneurs to explore investment opportunities and financial trends globally." },
]