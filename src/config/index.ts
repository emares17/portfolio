import type { SiteConfig, SiteContent } from "../types";


export const SITE_CONFIG: SiteConfig = {
  title: "Esteban Mares — Software Engineer",
  author: "",
  description:
    "Software Engineer based in California. I specialize in Software Engineering, backend engineering and full-stack development.",
  lang: "en",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/devesteban/" },
    { text: "Github", href: "https://github.com/emares17" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Esteban Mares",
    specialty: "Software Engineer",
    summary:
      "Software engineer based in California, passionate about creating efficient solutions. I specialize in full-stack development, system optimization, and building scalable web applications that solve real-world problems.",
    email: "estebanmares17@gmail.com"
  },
  experience: [
    {
      company: "Amazon Web Services",
      position: "Software Developer Engineer Intern",
      startDate: "June 2024",
      endDate: "Sept 2024",
      summary: [
        "Developed a high-performance serialization/deserialization module in Java using Amazon Ion, achieving a 40% latency improvement for Kinesis Data Streams.",
        "Authored a comprehensive design document detailing system architecture, Ion integration strategy, and performance optimization techniques.",
        "Developed unit and integration tests for the serialization module and integrated changes through established team deployment processes",
      ],
    },
    {
      company: "Fleetpride",
      position: "Inventory Analyst",
      startDate: "Nov 2021",
      endDate: "June 2024",
      summary: [
        "Conducted systematic root cause analysis of data discrepancies, applying problem-solving methodologies to improve system accuracy to over 96%",
        "Developed automated reporting solutions using Microsoft Excel and JDA systems, enabling data visualization and data-driven decision making.",
        "Collaborated with leadership to analyze data trends, implementing process improvements that reduced errors and enhanced operational efficiency.",
      ],
    },
  ],
  projects: [
    {
      name: "LabelGenius",
      summary: "A barcode label generator that transforms CSV and Excel data into print-ready label sheets in seconds.",
      linkPreview: "https://labelgenius.up.railway.app/",
      linkSource: "https://github.com/emares17/BarcodeGenerator",
      image: "/LabelGenius.png",
    },
    {
      name: "Shortly",
      summary: "A URL shortening service that allows users to create short links for long URLs.",
      linkPreview: "https://shortly-url.up.railway.app/#",
      linkSource: "https://github.com/emares17/Url-shortner",
      image: "/Shortly.png",
    },
    {
      name: "Daily LeetCode Solutions",
      summary: "An automated LeetCode blog that tracks your daily coding solutions with beautiful IDE-themed presentation and GitHub Actions workflow.",
      linkPreview: "https://daily-leetcode-tracker.vercel.app/",
      linkSource: "https://github.com/emares17/daily-leetcode-tracker",
      image: "/DailyLC.png",
    },
  ],
  about: {
    description: `
      I'm a passionate software engineer and full-stack developer with expertise in Java, Python, React, and Node.js. I specialize in building scalable, responsive web applications and have hands-on experience as both a frontend developer and backend developer. Skilled in API development, database design, agile methodologies, and cloud deployment, I thrive in collaborative environments and am driven to solve real-world business challenges through high-quality software solutions. I'm currently seeking opportunities as a software engineer, full-stack developer, or backend engineer.
      `
  },
};

