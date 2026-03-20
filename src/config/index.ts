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
  email: "estebanmares17@gmail.com",
  brandName: "esteban_mares",
  socialImage: "/og-portfolio-image.png",
  canonicalURL: "https://dev-esteban.up.railway.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Esteban Mares",
    specialty: "Software Engineer",
    summary:
      "Software engineer in California. I build full-stack applications and backend systems, with a focus on performance. I've shipped production tools used daily and optimized systems handling millions of events per second.",
    email: "estebanmares17@gmail.com",
    resume: "/Esteban_M_Resume.pdf",
  },
  experience: [
    {
      company: "Amazon Web Services",
      position: "Software Development Engineer Intern",
      startDate: "June 2024",
      endDate: "September 2024",
      summary: [
        "Identified JSON serialization overhead as the root cause of timeout failures in a KDS caching service processing millions of events per second.",
        "Migrated the service to Amazon Ion binary serialization, reducing P99 latency by 40% using a schema-less binary format to handle variable-shaped objects.",
        "Authored a 5,000+ word Technical Design Document covering problem analysis, protocol evaluation, and test plan, delivering two weeks ahead of schedule.",
        "Validated the migration end-to-end by writing new JUnit unit and integration tests for the Ion serialization layer, maintaining system stability throughout deployments.",
      ],
    },
    {
      company: "Fleetpride",
      position: "Inventory Analyst",
      startDate: "November 2021",
      endDate: "June 2024",
      summary: [
        "Automated data validation using Python (Pandas) and Excel Macros, replacing manual verification and saving 10+ hours/week of labor.",
        "Built ETL workflows to clean supply chain datasets, improving data accuracy from 85% to 96% and preventing $165K+ in annual losses.",
        "Analyzed $5M in inventory to identify root causes of inefficiencies, reducing holding costs by 17%.",
      ],
    },
  ],
  projects: [
    {
      name: "LabelGenius",
      summary: "A barcode label generator that transforms CSV and Excel data into print-ready label sheets in seconds.",
      linkPreview: "https://labelgenius.up.railway.app/",
      linkSource: "https://github.com/emares17/BarcodeGenerator",
      image: ["/LabelGenius.png", "/LabelGenius-Login.png", "/LabelGenius-Dashboard.png"],
    },
    {
      name: "UFC Fight Prediction System",
      summary: "A four-node LangGraph agent pipeline that coordinates live odds fetching, ML predictions, and Claude-powered fight analysis with calibrated betting recommendations.",
      image: "/UFC-Main.png",
    },
    {
      name: "Vehicle Value Predictor",
      summary: "A Random Forest model trained on 3M+ vehicle records achieving an R² of 0.829, with an ETL pipeline and React frontend visualizing predicted values and depreciation timelines.",
      linkPreview: "https://vehicle-value-predictor.up.railway.app/",
      linkSource: "https://github.com/emares17/vehicle-equity-predictor",
      image: "/Vehicle-Value.png",
    },
    {
      name: "Daily LeetCode Solutions",
      summary: "An automated LeetCode blog that tracks your daily coding solutions with beautiful IDE-themed presentation and GitHub Actions workflow.",
      linkPreview: "https://daily-leetcode-tracker.vercel.app/",
      linkSource: "https://github.com/emares17/daily-leetcode-tracker",
      image: ["/DailyLC.png", "/DailyLC-Problem.png"],
    },
    {
      name: "Shortly",
      summary: "A URL shortening service that allows users to create short links for long URLs.",
      linkPreview: "https://shortly-url.up.railway.app/#",
      linkSource: "https://github.com/emares17/Url-shortner",
      image: "/Shortly.png",
    },
  ],
  about: {
    description: `
      I'm a software engineer who works across the stack. Java and Python on the backend, React on the frontend. I've built prediction systems, internal tools, and production platforms. At AWS, I debugged a caching service processing millions of events per second and cut its latency by 40%. I build things when I see gaps. A process that takes too long, a tool that should exist but doesn't.
      `
  },
};

