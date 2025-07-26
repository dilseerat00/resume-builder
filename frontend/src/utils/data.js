import Resume1 from "../assets/Resume1.png";
import Resume2 from "../assets/Resume2.png";
import Resume3 from "../assets/Resume3.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: Resume1,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: Resume2,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: Resume3,
    colorPaletteCode: "themeThree",
  },
];

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "Emily Carter",
    designation: "Computer Science Undergraduate",
    summary:
      "Motivated computer science student passionate about web development and data structures. Strong academic foundation with hands-on internship experience in front-end development. Eager to contribute to real-world projects and grow in a collaborative environment.",
  },
  contactInfo: {
    email: "emily.carter@example.com",
    phone: "9876543210",
    address: "123 Maple Street, Austin, TX",
    linkedin: "https://linkedin.com/in/emilycarter",
    github: "https://github.com/emilycarter-dev",
    website: "https://emilycarter.dev",
  },
  workExperience: [
    {
      companyName: "BrightTech Solutions",
      role: "Frontend Developer Intern",
      startDate: "2023-05-01",
      endDate: "2023-08-01",
      description:
        "Worked on responsive UI components using React and TailwindCSS.\nCollaborated with backend team to integrate REST APIs.\nImproved Lighthouse performance score from 65 to 90.",
    },
    {
      companyName: "NextGen AI Labs",
      role: "Software Intern",
      startDate: "2022-06-01",
      endDate: "2022-08-31",
      description:
        "Built internal tools using Python and Flask for research team.\nOptimized data pipelines, reducing processing time by 30%.\nCreated automated unit tests improving code reliability.",
    },
  ],
  education: [
    {
      institution: "University of Texas at Austin",
      degree: "Bachelor of Technology",
      startDate: "2020-08-01",
      endDate: "2024-05-15",
      cgpa: "8.7",
    },
  ],
  skills: [
    { name: "HTML", proficiency: 90 },
    { name: "CSS", proficiency: 85 },
    { name: "JavaScript", proficiency: 80 },
    { name: "React", proficiency: 75 },
    { name: "Git", proficiency: 70 },
    { name: "Python", proficiency: 80 },
  ],
  projects: [
    {
      title: "Student Event Portal",
      description:
        "Developed a web platform where students can discover and register for university events. Integrated admin dashboard and event analytics.",
      github: "https://github.com/emilycarter-dev/event-portal",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React and deployed on Vercel. Includes interactive project showcase and blog section.",
      github: "https://github.com/emilycarter-dev/portfolio",
    },
  ],
  certifications: [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issueDate: "2022-04-01",
      credentialUrl: "https://freecodecamp.org/certificate/emilycarter",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issueDate: "2022-06-15",
      credentialUrl: "https://freecodecamp.org/certificate/emilycarter/js-algo",
    },
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Spanish", proficiency: "Intermediate" },
  ],
  interests: ["UI Design", "Hackathons", "Reading Tech Blogs", "Traveling"],
};
