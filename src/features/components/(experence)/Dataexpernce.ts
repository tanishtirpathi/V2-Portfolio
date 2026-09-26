export interface DataExperence {
    id: number;
    title: string;
    company: string;
    startDate: string;
    description: string;
    Technologies: string[];
}

export const dataExperence: DataExperence[] = [  {
    id: 1,
    title: "Dev-Spark Hackathon – Winner",
    company: "First Position",
    startDate: "September-2026",
    description:
      "Lead a team to develop a fully developed web application who can handle 1200+ concurrent users with a  backend architecture. Implemented advanced features, optimized performance, and ensured scalability. Secured 1st position in the hackathon.",
    Technologies: ["Concurrent","VM2", "PM2", "Ningx" , "Next js" , "Postgress "]
  }, {
    id: 2,
    title: "Smart India Hackathon – Internal Winner",
    company: "College Internal Round",
    startDate: "September-2025",
    description:
      "Collaborated in a competitive team environment to design and develop a problem-solving prototype under time constraints. Contributed to system architecture, core logic development, and final presentation delivery. Secured 1st position in internal selection round.",
    Technologies: ["LLM","Mongodb", "Express", "React" , "Next js" , "node-js "]
  },
  {
    id: 3,
    title: "AI Chatbot Developer – Hackathon Winner",
    company: "IBM District Level Hackathon",
    startDate: "December-2024",
    description:
      "Built a functional AI chatbot designed to solve real-world queries using NLP-based response handling. Designed conversation flow, implemented backend logic, and deployed a working prototype within hackathon constraints. Secured 1st position at district level.",
    Technologies: [ "Python", "NLP", "API Integration"]
  },

  {
    id: 4,
    title: "Remote Trainee / Intern",
    company: "Scaler",
    startDate: "June-2024",
    description:
      "Completed structured training in basic programming, LinkedIn optimization, and introductory Agentic AI concepts. Built small practice applications and explored AI workflow fundamentals.",
    Technologies: ["JavaScript", "Programming Fundamentals", "Agentic AI Basics"]
  }

];
