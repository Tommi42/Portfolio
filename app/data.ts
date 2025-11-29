import { Project, Experience } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "ChatBot System",
    category: "Web App",
    year: "2024",
    description: "AI data model visualization dashboard.",
    details:
      "Probably the first big complex project I have worked on. I worked with the team at FiTec to create a chatbot system for customer support. The system purpose was not only to build a self-hosted chatbot for company usage but a full management system for the chatbot. The system was built using Next.js and Python. The chatbot was built using LangChain. Here is proposed just a demo built with the same backend technology used for the project, way simpler in this demo but with same core. Working at this project helped me to understand the full stack development I still use today. For any further information just ask the chatbot ;)",
    skills: ["React", "Python", "LangChain", "OpenAI", "Docker", "SQLAlchemy", "PostgreSQL", "Git"],
    image: "/images/chatbot.jpg",
    link: "https://github.com/Tommi42/Chatbot"
  },
  {
    id: 2,
    title: "Stock Portfolio Optimization",
    category: "AI",
    year: "2024",
    description: "AI-powered tool for stock portfolio optimization.",
    details:
      "University project for the course of Machine Learning. The goal was to create a tool that could optimize stock portfolios transactions over a specified period of time. The tool uses metaheuristic algorithms (Hill-climbing, Simulated Annealing, Genetic Algorithm, Tabu Search) to find the best possible portfolio.",
    skills: ["Python", "Streamlit", "Optimization", "AI"],
    image: "/images/stock.jpg",
    link: "https://gitlab.up.pt/up202411502/stockportfolioai"
  },
  {
    id: 3,
    title: "Natalino",
    category: "Web app",
    year: "2022",
    description: "Xmas bot to answer questions about 'Il PresepioMeccanico'",
    details:
      "Developed for one of the oldest and biggest nativity scene (presepio) in Europe. The 'presepio meccanico' is situated in the heart of Torino, Italy, right under the Parrocchia della Santissima Annunziata. It has more than 200 statues (with a dimension of 25-90 cm) and more than half of them are moving. It was a pleasure to develop a simple but effective website for this beautiful place, that for me is first of all a big group of friends and family. Natalino is now part of the numerous attraction at the presepio meccanico",
    skills: ["Python", "Streamlit", "OpenAI", "Raspberry Pi"],
    image: "/images/natalino.jpg",
  },
  {
    id: 4,
    title: "Spotify Redesign",
    category: "Design",
    year: "2022",
    description: "Redesign of spotify application",
    details:
      "I like design and love to build things that actually make sense. This project was part of a challenge presented by CaffeDesign, a community of designers. The main goal was to rethink the usage of the Spotify app. My idea was an AI oriented application with a minimal home screen that allow the user just to play music without choosing actively the songs (the AI would adapt and do so). It was my first deep dive using Figma and since then is always my go-to platform for small or big design",
    skills: ["Figma", "UI/UX", "Prototyping"],
    image: "/images/spotify.jpg",
    link: "https://www.figma.com/proto/SPopCjOMQHP16SrsOXaQc7/Spotify-IA?page-id=0%3A1&node-id=154-771&starting-point-node-id=154%3A771&mode=design&t=Tn7LxevZQOSEPgUX-1"
  },
  {
    id: 5,
    title: "CyberChallenge CTF",
    category: "CTF",
    year: "2023",
    description: "Cryptography training and competitions with the pwnthem0le team.",
    details: "Participated in CyberChallenge.IT, the premier Italian initiative for identifying and recruiting the next generation of cybersecurity professionals. Trained intensively with the pwnthem0le CTF team at Politecnico di Torino, gaining hands-on experience in Web Security, Network Systems, and Reverse Engineering. Developed a strong specialization in Cryptography, solving complex challenges and mastering encryption protocols in a competitive Capture The Flag (CTF) environment.",
    skills: ["Cryptography", "Network Security", "Reverse Engineering", "Python", "CTF"],
    image: "/images/cyberchallenge.jpg",
    link: "http://cyberchallenge.it/"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Freelancing developer",
    company: "Self-employed",
    period: "2025 - Present",
    description: "Developing and helping with a wide range digital application",
    details:
      "Working as an independent contractor, delivering high-quality web and mobile applications for various clients. Specializing in Next.js, Python, OpenAI and much more.",
    skills: ["Next.js", "Python", "OpenAI", "Docker", "SQLAlchemy", "PostgreSQL", "Git", "Figma"],
    image: "/images/freelance.jpg",
  },
  {
    id: 2,
    role: "Junior Developer",
    company: "FiTec",
    period: "2024- 2025",
    description: "Junior developer part-time. Working on full chatbot system.",
    details:
      "Contributed to the development of a sophisticated chatbot system for customer support. Implemented natural language processing features and integrated with existing CRM platforms.",
    skills: ["React", "Python", "LangChain", "OpenAI", "Docker", "PostgreSQL"],
    image: "/images/fitec.jpg",
  },
  {
    id: 3,
    role: "Politecnico di Torino",
    company: "Bachelor - Computer Engineer",
    period: "2022 - 2025",
    description:
      "Studying computer engineering at the 16th ranked university (Times Higher Education rank)",
    details:
      "Pursuing a Bachelor's degree in Computer Engineering, with a focus on software engineering and artificial intelligence. Active member of the university's coding club.",
    skills: ["C++", "Java", "Algorithms", "Data Structures", "Git"],
    image: "/images/polito.jpg",
    link: "https://github.com/Tommi42/Tommi/blob/887a9a61ac5e3d740d11c6e45ebf95e052bb1c72/Politecnico.pdf"
  }
];