import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "auraflow",
    title: "AuraFlow",
    description:
      "A personal finance dashboard built for users who prefer manual control, speed, and local reasoning over automated bank integrations.",
    objective:
      "Replace fragmented spreadsheets with a single, fast interface for tracking net worth and cash flow without third-party data dependencies.",
    year: "2026",
    role: "Full-Stack Developer (Product-Led Project)",
    stack: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://auraflow-os.vercel.app",
    context: `AuraFlow originated from frustration with consumer finance apps that obscure data behind automation and opaque sync behavior. While spreadsheets offer control, they break down under frequent updates and multi-account tracking.

The project targets users who prefer explicit data entry and predictable calculations, valuing transparency and responsiveness over convenience features.`,
    architecture: `The application is built using Next.js App Router with a server-first approach. Financial records are protected using Supabase Row Level Security, ensuring that all data access rules are enforced at the database layer rather than the client.

State changes are handled via Server Actions combined with optimistic updates, allowing the interface to respond instantly while maintaining consistency with the backend. Currency formatting and date-based calculations are centralized in a shared utility layer to avoid duplicated logic.`,
    tradeoffs: `A deliberate decision was made to avoid bank API integrations. While this removes automation, it eliminates dependency on third-party aggregators and avoids sync errors, data leakage risks, and API volatility.

Visually, the interface avoids translucent or layered effects in favor of solid surfaces and clear borders. This improves numerical readability and prevents contrast issues when switching between light and dark modes.`,
    outcome: `The resulting MVP includes real-time net worth summaries, a date-grouped transaction ledger, and data export tools for CSV and PDF formats.`,
    reflection: `This project reinforced the value of defining semantic design tokens early. Abstracting colors and surfaces into CSS variables made global theme changes predictable and prevented visual inconsistencies during iteration.`,
    featured: true,
  },
  {
    slug: "vertex",
    title: "Vertex",
    description:
      "An internal inventory dashboard designed to surface stock risk and demand trends without relying on black-box forecasting tools.",
    objective:
      "Provide decision-ready inventory insights while keeping forecasting logic transparent and auditable.",
    year: "2026",
    role: "Full-Stack Developer (Analytics Dashboard)",
    stack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "Recharts",
      "Tailwind CSS",
    ],
    liveUrl: "https://vertex-inventory.vercel.app",
    context: `Vertex was built to address a common gap in small to mid-scale inventory systems: visibility without interpretability. Many tools present forecasts but obscure how those numbers are derived, making it difficult for operators to trust or adjust decisions.

The dashboard is aimed at users who want to reason about inventory behavior directly, using historical signals rather than fully automated predictions.`,
    architecture: `Inventory, sales, and restock events are modeled as separate but related entities, allowing time-series analysis without denormalizing core tables. Aggregations are computed server-side to keep client components focused on presentation rather than business logic.

Chart components are intentionally stateless, receiving pre-shaped datasets to avoid coupling visualization concerns with data derivation.`,
    tradeoffs: `Rather than implementing advanced forecasting algorithms, the system focuses on rolling averages and trend deltas. This limits predictive depth but preserves explainability and reduces the risk of misleading outputs.

The UI favors dense information layouts over whitespace-heavy designs. This increases cognitive load slightly but allows operators to compare categories and time ranges without excessive navigation.`,
    outcome: `The MVP supports category-level stock distribution, low-stock alerts based on configurable thresholds, and historical demand visualization across selectable time windows.`,
    reflection: `Working on Vertex highlighted how quickly dashboards become untrustworthy when calculations are split across the client and server. Centralizing derivations early reduced both bugs and mental overhead during iteration.`,
    featured: true,
  },
  {
    slug: "bca-product-intelligence",
    title: "BCA Product Intelligence",
    description:
      "A review analytics dashboard that extracts recurring user pain points from Google Play feedback for the BCA Mobile app.",
    objective:
      "Transform unstructured app reviews into actionable product insights with minimal manual analysis.",
    year: "2025",
    role: "Data Analyst & Dashboard Developer",
    stack: ["Python", "Streamlit", "Pandas", "NLTK", "Plotly"],
    liveUrl: "https://bca-mobile-dashboard.streamlit.app",
    context: `User reviews often contain high-signal feedback, but their volume and inconsistency make manual analysis impractical. This project explores how lightweight NLP techniques can surface dominant themes without complex machine learning pipelines.

The dashboard is designed for product and UX teams who need fast directional insight rather than statistically exhaustive sentiment models.`,
    architecture: `Reviews are preprocessed using token normalization and stopword removal before being grouped by keyword frequency and sentiment polarity. Aggregations are cached to ensure responsive interaction despite Streamlit’s rerun model.

Visualizations are derived directly from transformed datasets, avoiding post-processing in the UI layer.`,
    tradeoffs: `Advanced transformer-based sentiment models were intentionally avoided. While they offer higher accuracy, they introduce opacity and heavier infrastructure requirements that are misaligned with exploratory analysis use cases.

The interface prioritizes clarity over customization, limiting user controls to prevent misinterpretation of weak signals.`,
    outcome: `The final dashboard highlights dominant complaint categories, sentiment distribution over time, and representative review excerpts for qualitative follow-up.`,
    reflection: `This project reinforced that imperfect models can still be useful if their limitations are explicit. Designing for interpretability proved more valuable than chasing marginal accuracy gains.`,
    featured: false,
  },
  {
    slug: "kurofest",
    title: "KuroFest",
    description:
      "A static event website designed to present information for a fictional anime convention.",
    objective:
      "A static event website designed to present information for a fictional anime convention.",
    year: "2026",
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
    featured: false,
  },
  {
    slug: "recipeshare",
    title: "RecipeShare",
    description:
      "A web platform that allows users to browse Indonesian recipes and upload their own recipes for public viewing.",
    objective:
      "A web platform that allows users to browse Indonesian recipes and upload their own recipes for public viewing.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://csp-project-final.vercel.app",
    context: `RecipeShare was developed as a group final project for a Client-Side Programming course. The primary constraints were focus on frontend implementation, limited project timeline, and no requirement for role-based access control or administration features.

The project scope emphasized client-side functionality and UI consistency rather than backend complexity.`,
    architecture: `The application is a frontend-driven web system built with Next.js. Core functionality includes rendering a list of user-submitted recipes, client-side forms for recipe submission, and basic data persistence via an external backend service.

The system follows a simple read-and-write flow without moderation layers: users can read all recipes, users can submit new recipes, with no intermediate validation beyond basic input handling.`,
    tradeoffs: `No moderation workflow was implemented. All submitted content is treated equally, with no approval process. 
These tradeoffs were accepted to keep the project aligned with course scope and time constraints.

The most important design decision was establishing clear UI criteria for typography and color usage early in development. This decision aimed to make the interface feel consistent and natural, despite being a group project with multiple contributors.`,
    outcome: `The project was successfully completed and deployed as a functional web application. By defining visual rules upfront, UI fragmentation was reduced during implementation.`,
    reflection: `This project highlighted the importance of careful environment and configuration setup early in development. Small misconfigurations can slow down collaboration and debugging later in the project lifecycle.`,
    featured: false,
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
