import { Project, Experience } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: "ChatBot System",
        category: "Web App",
        year: "2023",
        description: "AI data model visualization dashboard.",
        details: "A comprehensive dashboard for visualizing AI data models, allowing users to interact with and analyze complex datasets in real-time. Built with Next.js and D3.js.",
        skills: ["Next.js", "D3.js", "TypeScript", "Tailwind CSS"],
        image: "/images/chatbot.jpg"
    },
    {
        id: 2,
        title: "Stock Portfolio Optimization",
        category: "AI",
        year: "2023",
        description: "Headless CMS shopping experience.",
        details: "An AI-powered tool that optimizes stock portfolios based on historical data and risk tolerance. Utilizes machine learning algorithms to predict market trends and suggest optimal asset allocation.",
        skills: ["Python", "TensorFlow", "React", "FastAPI"],
        image: "/images/stock.jpg"
    },
    {
        id: 3,
        title: "Natalino",
        category: "Web app",
        year: "2022",
        description: "Previous personal branding iteration.",
        details: "A personal branding website showcasing a portfolio of work and skills. Features a unique design and smooth animations to engage visitors.",
        skills: ["HTML", "CSS", "JavaScript", "GSAP"],
        image: "/images/natalino.jpg"
    },
    {
        id: 4,
        title: "Spotify Redesign",
        category: "Design",
        year: "2024",
        description: "Real-time trading heads-up display.",
        details: "A conceptual redesign of the Spotify desktop application, focusing on improved usability and a more modern aesthetic. Includes a new sidebar navigation and enhanced player controls.",
        skills: ["Figma", "UI/UX", "Prototyping"],
        image: "/images/spotify.jpg"
    },
    {
        id: 5,
        title: "DataViz Core",
        category: "Library",
        year: "2024",
        description: "WebGL based charting library for React.",
        details: "A high-performance charting library for React applications, leveraging WebGL for rendering large datasets with smooth animations and interactivity.",
        skills: ["WebGL", "React", "Three.js", "TypeScript"],
        image: "/images/dataviz.jpg"
    }
];

export const experiences: Experience[] = [
    {
        id: 1,
        role: "Freelancing developer",
        company: "Now",
        period: "2025 - Present",
        description: "Developing and helping with a wide range digital application",
        details: "Working as an independent contractor, delivering high-quality web and mobile applications for various clients. Specializing in React, Node.js, and cloud infrastructure.",
        skills: ["React", "Node.js", "AWS", "Docker"],
        image: "/images/freelance.jpg"
    },
    {
        id: 2,
        role: "Junior Deveoper",
        company: "Company - FiTec",
        period: "2024- 2025",
        description: "Junior developer part-time. Working on full chatbot system.",
        details: "Contributed to the development of a sophisticated chatbot system for customer support. Implemented natural language processing features and integrated with existing CRM platforms.",
        skills: ["Python", "NLP", "Django", "PostgreSQL"],
        image: "/images/fitec.jpg"
    },
    {
        id: 3,
        role: "Politecnico di Torino",
        company: "Bachelor - Computer Engineer",
        period: "2022 - 2025",
        description: "Studing computer engineering at the 16th ranked university (Times Higher Education rank)",
        details: "Pursuing a Bachelor's degree in Computer Engineering, with a focus on software engineering and artificial intelligence. Active member of the university's coding club.",
        skills: ["C++", "Java", "Algorithms", "Data Structures"],
        image: "/images/polito.jpg"
    }
];
