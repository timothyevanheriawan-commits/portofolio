import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "recipeshare",
    title: "RecipeShare",
    description:
      "A web platform that allows users to browse Indonesian recipes and upload their own recipes for public viewing.",
    objective:
      "A web platform that allows users to browse Indonesian recipes and upload their own recipes for public viewing.",
    year: "2024",
    role: "Frontend Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://csp-project-final.vercel.app",
    context: `RecipeShare was developed as a group final project for a Client-Side Programming course. The primary constraints were focus on frontend implementation, limited project timeline, and no requirement for role-based access control or administration features.

The project scope emphasized client-side functionality and UI consistency rather than backend complexity.`,
    architecture: `The application is a frontend-driven web system built with Next.js. Core functionality includes rendering a list of user-submitted recipes, client-side forms for recipe submission, and basic data persistence via an external backend service.

The system follows a simple read-and-write flow without moderation layers: users can read all recipes, users can submit new recipes, with no intermediate validation beyond basic input handling.`,
    tradeoffs: `No admin panel or moderation workflow was implemented. All submitted content is treated equally, with no approval process. The system prioritizes simplicity over control or scalability.

These tradeoffs were accepted to keep the project aligned with course scope and time constraints.

The most important design decision was establishing clear UI criteria for typography and color usage early in development. This decision aimed to make the interface feel consistent and natural, despite being a group project with multiple contributors.`,
    outcome: `The project was successfully completed and deployed as a functional web application. By defining visual rules upfront, UI fragmentation was reduced during implementation.`,
    reflection: `This project highlighted the importance of careful environment and configuration setup early in development. Small misconfigurations can slow down collaboration and debugging later in the project lifecycle.`,
    featured: true,
  },
  {
    slug: "kurofest",
    title: "KuroFest",
    description:
      "A static event website designed to present information for a fictional anime convention.",
    objective:
      "A static event website designed to present information for a fictional anime convention.",
    year: "2024",
    role: "UI/UX Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://kurofest.vercel.app",
    context: `KuroFest was built as a portfolio-focused project rather than a functional production system. The primary goals were to practice translating a creative brief into a UI system and to explore visual hierarchy, layout, and thematic consistency.

The project was intentionally constrained to be read-only, with no backend, database, or dynamic functionality.`,
    architecture: `KuroFest is a frontend-only web application built with Next.js. The system consists of static pages, structured sections for event information, and reusable UI components aligned with a defined visual theme.

No data persistence, authentication, or server-side logic is present.`,
    tradeoffs: `No database or backend integration. No interactive or transactional features. Content is static and informational only.

These limitations were intentional and aligned with the project goal of demonstrating UI design skill rather than application logic.

The central design decision was to strictly adhere to predefined UI criteria derived from the event theme. All layout, typography, and color choices were evaluated against this criteria to maintain consistency across the site.`,
    outcome: `The project was completed and deployed as a live portfolio piece. This approach prioritized system coherence over feature breadth.`,
    reflection: `This project reinforced the importance of analyzing and understanding a brief before implementation. Clear interpretation and planning significantly reduce rework during the design and development process.`,
    featured: true,
  },
  {
    slug: "bca-product-intelligence",
    title: "BCA Product Intelligence",
    description:
      "A dashboard that provides an analytical overview of user reviews for the BCA Mobile application.",
    objective:
      "A dashboard that provides an analytical overview of user reviews for the BCA Mobile application, intended to support product-level insights.",
    year: "2024",
    role: "Data Analyst",
    stack: ["Python", "Streamlit", "BERTopic", "Pandas", "Plotly"],
    liveUrl: "https://bca-mobile-dashboard.streamlit.app/",

    context: `This project was developed as a group assignment for a Text and Web Mining course. Constraints included reliance on preprocessed review data, focus on analysis and visualization rather than application interactivity, and no requirement for content creation or user input.`,
    architecture: `The system is a data visualization dashboard built using Streamlit. Its core pipeline consists of textual review data processed using BERTopic, sentiment and topic modeling outputs, and visual components that present topic distributions and sentiment trends.

The application operates in a read-only mode, with limited filtering for exploration.`,
    tradeoffs: `The dashboard focuses on presenting pre-computed analysis rather than real-time processing. This tradeoff was made to ensure reliable performance and consistent results across sessions.

No user authentication or data input features were implemented, keeping the scope aligned with course requirements.`,
    outcome: `The project successfully demonstrates the application of text mining techniques to real-world product review data. The dashboard provides clear visualizations of sentiment patterns and topic distributions.`,
    reflection: `Working with BERTopic revealed the importance of preprocessing decisions in topic modeling. The quality of insights depends heavily on how text data is cleaned and prepared before analysis.`,
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
