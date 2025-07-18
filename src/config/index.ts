import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Esteban Mares — Software Engineer",
  author: "",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
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
    email: "example@email.com",
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
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
