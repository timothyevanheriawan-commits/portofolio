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
    liveUrl: "[https://auraflow-os.vercel.app](https://auraflow-os.vercel.app)",
    screenshots: [
      {
        src: "/projects/auraflow/auraflow-1-mockup.png",
        alt: "AuraFlow overview dashboard showing net worth summary and recent activity",
      },
      {
        src: "/projects/auraflow/auraflow-2-mockup.png",
        alt: "AuraFlow transaction history with date-grouped ledger and export tools",
      },
    ],
    context: `AuraFlow originated from frustration with consumer finance apps that obscure data behind automation and opaque sync behavior. While spreadsheets offer control, they break down under frequent updates and multi-account tracking.

The project targets users who prefer explicit data entry and predictable calculations, valuing transparency and responsiveness over convenience features.`,
    architecture: `The application is built using Next.js App Router with a server-first approach. Financial records are protected using Supabase Row Level Security, ensuring that all data access rules are enforced at the database layer rather than the client.

State changes are handled via Server Actions combined with optimistic updates, allowing the interface to respond instantly while maintaining consistency with the backend. Currency formatting and date-based calculations are centralized in a shared utility layer to avoid duplicated logic.`,
    tradeoffs: `A deliberate decision was made to avoid bank API integrations. While this removes automation, it eliminates dependency on third-party aggregators and avoids sync errors, data leakage risks, and API volatility.

Visually, the interface avoids translucent or layered effects in favor of solid surfaces and clear borders. This improves numerical readability and prevents contrast issues when switching between light and dark modes.`,
    outcome: `The resulting MVP includes real-time net worth summaries, a date-grouped transaction ledger, and data export tools for CSV and PDF formats.`,
    reflection: `Developing AuraFlow forced me to reconcile my desire for technical complexity with the user's need for absolute reliability. I learned that in financial software, the most "sophisticated" feature is often just a calculation the user can actually verify themselves.`,
    featured: false,
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
    liveUrl:
      "[https://vertex-inventory.vercel.app](https://vertex-inventory.vercel.app)",
    screenshots: [
      {
        src: "/projects/vertex/vertex-1-mockup.png",
        alt: "Vertex command center dashboard showing risk analysis, priority actions, and category split",
      },
      {
        src: "/projects/vertex/vertex-2-mockup.png",
        alt: "Vertex inventory management table with stock health indicators and low-stock alerts",
      },
    ],
    context: `Vertex was built to address a common gap in small to mid-scale inventory systems: visibility without interpretability. Many tools present forecasts but obscure how those numbers are derived, making it difficult for operators to trust or adjust decisions.

The dashboard is aimed at users who want to reason about inventory behavior directly, using historical signals rather than fully automated predictions.`,
    architecture: `Inventory, sales, and restock events are modeled as separate but related entities, allowing time-series analysis without denormalizing core tables. Aggregations are computed server-side to keep client components focused on presentation rather than business logic.

Chart components are intentionally stateless, receiving pre-shaped datasets to avoid coupling visualization concerns with data derivation.`,
    tradeoffs: `Rather than implementing advanced forecasting algorithms, the system focuses on rolling averages and trend deltas. This limits predictive depth but preserves explainability and reduces the risk of misleading outputs.

The UI favors dense information layouts over whitespace-heavy designs. This increases cognitive load slightly but allows operators to compare categories and time ranges without excessive navigation.`,
    outcome: `The MVP supports category-level stock distribution, low-stock alerts based on configurable thresholds, and historical demand visualization across selectable time windows.`,
    reflection: `Vertex was a lesson in data honesty. I realized that a dashboard's utility isn't measured by how many charts it has, but by how quickly an operator can spot an anomaly. Centralizing the math on the server wasn't just a performance choice; it was about ensuring one single version of the truth.`,
    featured: false,
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
    liveUrl:
      "[https://bca-mobile-dashboard.streamlit.app](https://bca-mobile-dashboard.streamlit.app)",
    screenshots: [
      {
        src: "/projects/bca/bca-1-mockup.png",
        alt: "BCA Product Intelligence dashboard overview with complaint metrics and topic filters",
      },
      {
        src: "/projects/bca/bca-2-mockup.png",
        alt: "BCA sentiment trend chart showing complaint volume over time across categories",
      },
    ],
    context: `User reviews often contain high-signal feedback, but their volume and inconsistency make manual analysis impractical. This project explores how lightweight NLP techniques can surface dominant themes without complex machine learning pipelines.

The dashboard is designed for product and UX teams who need fast directional insight rather than statistically exhaustive sentiment models.`,
    architecture: `Reviews are preprocessed using token normalization and stopword removal before being grouped by keyword frequency and sentiment polarity. Aggregations are cached to ensure responsive interaction despite Streamlit’s rerun model.

Visualizations are derived directly from transformed datasets, avoiding post-processing in the UI layer.`,
    tradeoffs: `Advanced transformer-based sentiment models were intentionally avoided. While they offer higher accuracy, they introduce opacity and heavier infrastructure requirements that are misaligned with exploratory analysis use cases.

The interface prioritizes clarity over customization, limiting user controls to prevent misinterpretation of weak signals.`,
    outcome: `The final dashboard highlights dominant complaint categories, sentiment distribution over time, and representative review excerpts for qualitative follow-up.`,
    reflection: `This project taught me that "perfect is the enemy of good" is especially true in analytics. A simple keyword frequency map delivered more immediate value to the BCA team than a complex sentiment model ever did, simply because they could actually explain it to their stakeholders.`,
    featured: false,
  },
  {
    slug: "kurofest",
    title: "KuroFest",
    description:
      "A static event website designed to present information for a fictional anime convention.",
    objective:
      "Practice translating a creative brief into a cohesive UI system, focusing on visual hierarchy and thematic consistency.",
    year: "2026",
    role: "UI/UX Developer",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "[https://kurofest.vercel.app](https://kurofest.vercel.app)",
    screenshots: [
      {
        src: "/projects/kurofest/kurofest-1-mockup.png",
        alt: "KuroFest hero section with large kanji typography and event branding",
      },
      {
        src: "/projects/kurofest/kurofest-2-mockup.png",
        alt: "KuroFest special guests section with editorial card layout",
      },
    ],
    context: `KuroFest was built as a portfolio-focused project rather than a functional production system. The primary goals were to practice translating a creative brief into a UI system and to explore visual hierarchy, layout, and thematic consistency.

The project was intentionally constrained to be read-only, with no backend, database, or dynamic functionality.`,
    architecture: `KuroFest is a frontend-only web application built with Next.js. The system consists of static pages, structured sections for event information, and reusable UI components aligned with a defined visual theme.

No data persistence, authentication, or server-side logic is present.`,
    tradeoffs: `No database or backend integration. No interactive or transactional features. Content is static and informational only.

These limitations were intentional and aligned with the project goal of demonstrating UI design skill rather than application logic.

The central design decision was to strictly adhere to predefined UI criteria derived from the event theme. All layout, typography, and color choices were evaluated against this criteria to maintain consistency across the site.`,
    outcome: `Deployed as a live portfolio piece demonstrating UI design skill and strict adherence to a predefined visual criteria.`,
    reflection: `This project reinforced the importance of analyzing and understanding a brief before implementation. Clear interpretation and planning significantly reduce rework during the design and development process.`,
    featured: false,
  },
  {
    slug: "recipeshare",
    title: "RecipeShare",
    description:
      "A web platform that allows users to browse Indonesian recipes and upload their own recipes for public viewing.",
    objective:
      "Build a functional full-stack web application as a group final project, emphasizing frontend consistency and client-side implementation within course constraints.",
    year: "2025",
    role: "Frontend Developer",
    stack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    liveUrl:
      "[https://recipeshare-project.vercel.app](https://recipeshare-project.vercel.app)",
    screenshots: [
      {
        src: "/projects/recipeshare/recipeshare-1-mockup.png",
        alt: "RecipeShare hero page with Indonesian food photography and navigation",
      },
      {
        src: "/projects/recipeshare/recipeshare-2-mockup.png",
        alt: "RecipeShare browse page with recipe grid, category filters, and search",
      },
    ],
    context: `RecipeShare was developed as a group final project for a Client-Side Programming course. The primary constraints were focus on frontend implementation, limited project timeline, and no requirement for role-based access control or administration features.

The project scope emphasized client-side functionality and UI consistency rather than backend complexity.`,
    architecture: `The application is a frontend-driven web system built with Next.js. Core functionality includes rendering a list of user-submitted recipes, client-side forms for recipe submission, and basic data persistence via an external backend service.

The system follows a simple read-and-write flow without moderation layers: users can read all recipes, users can submit new recipes, with no intermediate validation beyond basic input handling.`,
    tradeoffs: `No moderation workflow was implemented. All submitted content is treated equally, with no approval process.
These tradeoffs were accepted to keep the project aligned with course scope and time constraints.

The most important design decision was establishing clear UI criteria for typography and color usage early in development. This decision aimed to make the interface feel consistent and natural, despite being a group project with multiple contributors.`,
    outcome: `Successfully completed and deployed as a functional web application. Defining visual rules upfront reduced UI fragmentation across multiple contributors.`,
    reflection: `RecipeShare was my first real experience with the "messy middle" of group frontend work. It proved that while code style guides are helpful, a shared visual language is what actually prevents a project from looking like a patchwork quilt by the final week.`,
    featured: true,
  },
  {
    slug: "atlas-prms",
    title: "Atlas",
    description:
      "A personal records management system disguised as enterprise software, built to manage original character headcanons with the density and bureaucracy of real institutional tools.",
    objective:
      "Explore how far a personal creative tool can be pushed to feel like software that has existed for years inside a company, rather than something built for a single hobbyist.",
    year: "2026",
    role: "Full-Stack Developer (Personal Project)",
    stack: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Zustand",
      "TanStack Table",
      "Tiptap",
    ],
    liveUrl: "[https://atlas-prms.vercel.app/](https://atlas-prms.vercel.app/)",
    screenshots: [
      {
        src: "/projects/atlas/atlas-1-mockup.png",
        alt: "Atlas PRMS workspace showing sidebar navigation, record list, and dense enterprise layout",
      },
    ],
    context: `Atlas PRMS started as a personal tool for organizing original character headcanons, but the more interesting problem turned out to be disguise, not data modeling. Most personal organization tools look like personal organization tools: friendly, colorful, forgiving. Atlas set out to look like something else entirely  internal software a company has maintained and patched for years.

The subject matter is deliberately playful; the execution is not. Fixed modules (General Information, Behavioral Analysis, Timeline, Preferences, Associations, Attachments, Internal Notes) replace user-created categories, reinforcing the idea that this is a system with a schema, not a notebook with a template.`,
    architecture: `The application is built on Next.js and Supabase, with authentication gating a separate protected workspace from a public marketing surface. A desktop-inspired workspace  sidebar, toolbar, dense record list, and multi-tab editor  forms the core of the product, backed by a Zustand store for tab and editor state.

Record content uses Tiptap for structured rich text, while TanStack Table drives the list and log views where density and sortability matter more than visual flourish. Activity logs were deliberately redesigned away from a chat-style feed toward a tabular, timestamped audit-log format, since chat bubbles read as consumer software no matter how the rest of the UI is styled.`,
    tradeoffs: `The public landing page was intentionally deprioritized relative to the internal workspace, which created a visible inconsistency: the workspace reads as enterprise software, while the landing page still resembles a modern SaaS marketing site. This was an acceptable tradeoff during the build phase, since the workspace is what sells the concept, but it's flagged as the clearest remaining gap.

Atlas also currently lacks the institutional "paper trail" that makes internal software feel aged rather than freshly built  release notes, a version archive, an administrator manual, legacy terminology. Building the functional core first was prioritized over backfilling a fictional product history, on the reasoning that credibility work only matters once the underlying system is solid.`,
    outcome: `The result is a fully deployed, authenticated application with a convincing desktop-style workspace, structured record management (create/edit/delete/organize), a shared component library (tables, forms, toolbars, settings, confirmation dialogs), and enterprise-style activity logging.`,
    reflection: `Atlas taught me that "enterprise feel" isn't a color palette or a font choice  it's bureaucracy simulated convincingly. The workspace convinced people the moment the activity log stopped looking like a chat feed and started looking like an audit trail. The lesson wasn't about UI polish; it was about which details signal "this software has a history" versus "this software was built yesterday."`,
    featured: false,
  },
  {
    slug: "10-3-1",
    title: "10-3-1",
    description:
      "A daily math puzzle game where players combine three number tiles in sequence to hit a target value, with order and operator rules that reward logical deduction over arithmetic speed.",
    objective:
      "Design a small, replayable daily puzzle with a rule set simple enough to learn in seconds but deep enough to require genuine combinatorial thinking to fully solve.",
    year: "2026",
    role: "Solo Developer & Designer",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    liveUrl:
      "[https://10-3-1-game.vercel.app/](https://10-3-1-game.vercel.app/)",
    screenshots: [
      {
        src: "/projects/10-3-1/10-3-1-1-mockup.png",
        alt: "10-3-1 gameplay screen showing target number and selectable tiles",
      },
    ],
    context: `10-3-1 grew out of an interest in constraint-based puzzle mechanics: games like Wordle succeed not because the mechanic is complex, but because the rule set is small enough to hold entirely in your head while still producing genuine difficulty.

The core twist  that the first tile's operator is discarded and order changes the outcome  turns a simple arithmetic game into a small combinatorics problem, without requiring the player to understand combinatorics to enjoy it.`,
    architecture: `The game is built as a lightweight Next.js application with all puzzle logic  tile generation, operator evaluation with standard order of operations, and solution-space enumeration  computed client-side. A daily puzzle mode and a random mode share the same underlying combination engine, with statistics (streaks, win rate, average hints) tracked locally per player.

The visual language leans on a restrained East Asian typographic motif, pairing kanji numerals with a muted paper-like background to distinguish it from typical bright, gamified puzzle UIs.`,
    tradeoffs: `The game deliberately requires players to find every valid combination to register a full win, rather than stopping at the first correct answer. This raises the difficulty and average session length, but was chosen because "solve it once and move on" undersells the puzzle's actual depth.

No backend or account system was built for this project; all progress and stats are local to the device. This keeps the game lightweight and fast to load, at the cost of cross-device continuity.`,
    outcome: `The finished game supports daily and random puzzle modes, in-game hints, a solutions viewer, persistent stats tracking, and a shareable result summary similar in spirit to other daily puzzle games.`,
    reflection: `10-3-1 was a good reminder that constraint is a design tool, not a limitation. The entire game is three tiles and four operators, but requiring players to find every solution  not just one  was the single decision that turned a quick diversion into something people actually return to daily.`,
    featured: false,
  },
  {
    slug: "kopitiam-tjoa",
    title: "Kopitiam Tjoa",
    description:
      "A heritage coffee shop website for a fictional Peranakan kopitiam, built with a full ordering flow, live business-hours status, and a custom Supabase backend.",
    objective:
      "Design and build a small but production-grade full-stack site, not just a static mockup, where menu data, order state, and operating status are all backed by a real database rather than hardcoded content.",
    year: "2026",
    role: "Full-Stack Developer (Personal Project)",
    stack: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Supabase",
      "Tailwind CSS v4",
      "Zustand",
    ],
    liveUrl: "https://kopitiam-tjoa.vercel.app",
    screenshots: [
      {
        src: "/projects/kopitiam/kopitiam-1-mockup.png",
        alt: "Kopitiam Tjoa homepage with heritage signage graphic and live business hours status",
      },
      {
        src: "/projects/kopitiam/kopitiam-2-mockup.png",
        alt: "Kopitiam Tjoa order confirmation and live tracking page showing order receipt, step-by-step progress timeline, and itemized receipt break down",
      },
    ],
    context: `Kopitiam Tjoa is a heritage coffee shop concept rooted in Peranakan visual language, the kind of shop that has run on the same recipes and the same hand-painted sign since 1968. The project began as a static HTML mockup to lock down the visual identity, then was rebuilt as a full Next.js and Supabase application once the design direction felt right.

The goal was to avoid the common portfolio shortcut of a beautiful frontend backed by placeholder data. Menu items, order records, and business hours all live in a real database with real constraints, not a hardcoded array pretending to be one.`,
    architecture: `The application is built on Next.js App Router with Supabase as the backend, using Row Level Security policies to control data access rather than relying on client-side checks. Menu data is fetched server-side rather than shipped as static content, and cart state is managed with Zustand.

A consistent visual system carries the Peranakan-inspired palette (heritage green, signage red, warm ivory) across every component, keeping color and spacing decisions centralized instead of scattered per component. Business hours and open/closed status are computed from a shared settings table, with a manual override field so a real shop owner could mark an early closure without touching code.`,
    tradeoffs: `Supabase's server timezone runs in UTC, while the shop operates on WIB. Early in development, open/closed status was computed using the server's local time directly, which meant the site could report itself open or closed several hours off from reality. This was traced to raw date reads inside the status logic and fixed by explicitly converting all day and time calculations to WIB before comparison, a reminder that code working correctly on a local machine doesn't guarantee correct behavior once a server actually runs in a different timezone than its users.

The project also deliberately avoids third-party ordering or payment integrations, keeping the order flow self-contained. This limits real-world usability but keeps the scope focused on demonstrating full-stack data modeling rather than integrating external services.`,
    outcome: `The site currently supports a live menu backed by Supabase, a working cart and order flow, and real-time business-hours status. Development is ongoing, with ordering, rate limiting, and UI polish passes still being refined.`,
    reflection: `Kopitiam Tjoa has been a lesson in how many small details a real full-stack product actually has: timezone handling, database permissions, rate limiting, that a static mockup never forces you to confront. It's also taught me to verify behavior in the actual running environment rather than trusting a clean TypeScript compile as proof that something works.`,
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
