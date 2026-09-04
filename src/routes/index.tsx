import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import ragImage from "@/assets/agentic-rag.png.asset.json";
import resumeAsset from "@/assets/priyanshu-kalondia-resume.pdf.asset.json";
import sentinelImage from "@/assets/sentinelml.png.asset.json";
import sentryImage from "@/assets/sentry.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu Kalondia | AI & ML Engineer" },
      { name: "description", content: "Portfolio of Priyanshu Kalondia, an AI and ML engineer building production MLOps, agentic RAG, and fraud detection systems." },
      { property: "og:title", content: "Priyanshu Kalondia | AI & ML Engineer" },
      { property: "og:description", content: "Production AI, generative AI, MLOps, and machine learning engineering projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const primaryProjects = [
  {
    number: "01",
    title: "SentinelML",
    subtitle: "Self-Healing MLOps Platform",
    image: sentinelImage.url,
    alt: "SentinelML self-healing MLOps platform interface",
    description: "An end-to-end ML lifecycle platform with experiment tracking, registry, deployment, PSI/KS drift detection, automated retraining, champion-challenger evaluation, rollback, and SHAP explainability.",
    stack: "Python · FastAPI · MLflow · XGBoost · React · PostgreSQL · Docker",
    live: "https://sentinelml.vercel.app/",
    github: "https://github.com/priyanshukalondia-svg/SentinelML",
  },
  {
    number: "02",
    title: "Production Agentic RAG",
    subtitle: "Knowledge Assistant",
    image: ragImage.url,
    alt: "Agentic RAG knowledge assistant interface",
    description: "A grounded answer system using query decomposition, multi-hop retrieval, hybrid BM25/vector search, reciprocal rank fusion, reranking, citations, guardrails, and self-correction.",
    stack: "Python · FastAPI · LangGraph · RAG · BM25 · Vector Search · React",
    live: "https://fraudfrontend.vercel.app/",
    github: "https://github.com/priyanshukalondia-svg/fraud-detection-scheme",
  },
  {
    number: "03",
    title: "Sentry",
    subtitle: "Fraud Detection & Risk Monitoring",
    image: sentryImage.url,
    alt: "Sentry AI fraud detection and risk monitoring dashboard",
    description: "A real-time fraud system combining supervised classification and anomaly detection with explainable risk scores, reason codes, alert triage, persistent transaction state, and live WebSocket updates.",
    stack: "Python · Scikit-learn · FastAPI · SQLAlchemy · React · WebSockets",
    live: "https://frontend-five-phi-44.vercel.app/",
    github: "https://github.com/priyanshukalondia-svg/production-agentic-rag",
  },
];

const additionalProjects = [
  {
    number: "04",
    title: "E-Commerce Sales Dashboard",
    description: "Interactive analysis across 32K+ transactions, unifying revenue, customer cohorts, category performance, and RFM behavior in an executive view.",
    stack: "Power BI · SQL · DAX",
    github: "https://github.com/priyanshukalondia-svg/advanced-ecommerce-cohort-rfm-analysis",
  },
  {
    number: "05",
    title: "RFM Customer Segmentation",
    description: "Behavioral segmentation using recency, frequency, and monetary scoring to reveal valuable cohorts and practical retention opportunities.",
    stack: "Python · Pandas · NumPy · Matplotlib",
    github: "https://github.com/priyanshukalondia-svg/advanced-ecommerce-cohort-rfm-analysis",
  },
  {
    number: "06",
    title: "Spotify Listening Analysis",
    description: "An exploration of streaming behavior and audio features—mapping mood against tempo, energy, danceability, and listening patterns.",
    stack: "SQL · Python · Seaborn",
    github: "https://github.com/priyanshukalondia-svg/spotify_mysql_project",
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase text-foreground underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:text-accent">
      {children}<ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-end justify-between border-b border-foreground/20 pb-4">
      <h2 className="font-serif text-4xl md:text-6xl">{title}</h2>
      <span className="text-xs uppercase text-foreground/45">§ {eyebrow}</span>
    </div>
  );
}

function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-secondary/50">
      <header className="journal-reveal mx-auto max-w-[1180px] px-5 pt-6 md:px-10 md:pt-8">
        <nav aria-label="Primary navigation" className="flex items-center justify-between border-b border-foreground/20 pb-4">
          <a href="#top" className="font-serif text-xl">Priyanshu Kalondia</a>
          <div className="flex items-center gap-4 text-sm sm:gap-7">
            <a href="#projects" className="text-foreground/70 transition-colors hover:text-foreground">Work</a>
            <a href="#skills" className="hidden text-foreground/70 transition-colors hover:text-foreground sm:inline">Craft</a>
            <a href="#experience" className="hidden text-foreground/70 transition-colors hover:text-foreground sm:inline">Record</a>
            <a href="#contact" className="-skew-x-6 bg-primary px-4 py-2 text-xs uppercase text-primary-foreground transition-colors hover:bg-accent">Contact</a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-[1180px] grid-cols-12 gap-6 px-5 pb-8 pt-12 md:px-10 md:pt-16">
        <div className="col-span-12 lg:col-span-8">
          <p className="journal-reveal mb-6 text-xs uppercase text-accent [animation-delay:120ms]">Portfolio · Artificial Intelligence & Machine Learning</p>
          <h1 className="journal-reveal font-serif text-[22vw] leading-[0.82] sm:text-8xl lg:text-[9.5rem]">PRIYAN<span className="text-accent">SHU</span></h1>
          <div className="journal-reveal mt-5 flex items-center gap-4 [animation-delay:240ms]">
            <span className="journal-rule h-0.5 w-20 bg-secondary md:w-24" />
            <p className="font-serif text-3xl md:text-4xl">AI & ML Engineer</p>
          </div>
          <p className="journal-reveal mt-8 max-w-[56ch] text-base leading-relaxed text-foreground/75 [animation-delay:360ms] md:text-lg">
            I build production-oriented machine learning and generative AI systems—from self-healing MLOps and agentic retrieval to real-time fraud detection.
          </p>
          <div className="journal-reveal mt-8 flex flex-wrap items-center gap-5 [animation-delay:480ms]">
            <a href="#projects" className="-skew-x-6 bg-accent px-6 py-3 text-sm font-medium uppercase text-accent-foreground transition-colors hover:bg-primary">See the work</a>
            <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-secondary decoration-2 underline-offset-4 hover:text-accent"><Download className="size-4" /> Open résumé</a>
          </div>
        </div>
        <aside className="journal-reveal col-span-12 border-l-2 border-secondary pl-5 text-sm [animation-delay:240ms] lg:col-span-4 lg:mt-12">
          <div className="space-y-5">
            <div className="flex items-center gap-3"><span className="size-2 rounded-full bg-accent" /><span className="text-foreground/70">Available for AI/ML opportunities</span></div>
            <div><span className="block text-xs uppercase text-foreground/45">Based in</span><span className="mt-1 flex items-center gap-2 font-serif text-xl"><MapPin className="size-4 text-accent" />Delhi, India</span></div>
            <div><span className="block text-xs uppercase text-foreground/45">Focus</span><span className="mt-1 block text-foreground/80">Generative AI · MLOps · Agentic systems</span></div>
            <div><span className="block text-xs uppercase text-foreground/45">Studying</span><span className="mt-1 block text-foreground/80">B.Tech IT, specializing in AI & ML</span></div>
          </div>
        </aside>
      </section>

      <section id="skills" className="mx-auto max-w-[1180px] scroll-mt-8 px-5 pt-20 md:px-10 md:pt-28">
        <SectionTitle eyebrow="02" title="Craft & capability" />
        <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-4">
          {[
            ["AI / ML Core", "Scikit-learn · XGBoost · Feature engineering · Hyperparameter tuning · SHAP · Explainable AI"],
            ["Generative AI", "LLMs · RAG · Agentic AI · Embeddings · BM25 · Hybrid retrieval · RRF · Reranking"],
            ["MLOps", "MLflow · Model registry · PSI · KS testing · Automated retraining · Champion-challenger · Rollback"],
            ["Engineering", "Python · FastAPI · REST APIs · WebSockets · React · PostgreSQL · Docker · Git"],
          ].map(([title, text]) => <div key={title}><h3 className="font-serif text-2xl">{title}</h3><p className="mt-4 text-sm leading-relaxed text-foreground/70">{text}</p></div>)}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[1180px] scroll-mt-8 px-5 pt-24 md:px-10 md:pt-32">
        <SectionTitle eyebrow="03" title="Projects" />
        <div className="space-y-20 pt-12">
          {primaryProjects.map((project, index) => (
            <article key={project.title} className="grid grid-cols-12 items-center gap-7">
              <div className={`col-span-12 md:col-span-7 ${index === 1 ? "md:order-2" : ""}`}>
                <div className="overflow-hidden border border-foreground/15 bg-primary">
                  <img src={project.image} alt={project.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.02]" loading={index === 0 ? "eager" : "lazy"} />
                </div>
              </div>
              <div className={`col-span-12 md:col-span-5 ${index === 1 ? "md:order-1" : ""}`}>
                <span className="font-serif text-6xl text-accent/35">{project.number}</span>
                <h3 className="-mt-3 font-serif text-4xl md:text-5xl">{project.title}</h3>
                <p className="mt-1 text-xs uppercase text-accent">{project.subtitle}</p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/75">{project.description}</p>
                <p className="mt-4 border-l border-secondary pl-3 text-xs leading-relaxed text-foreground/55">{project.stack}</p>
                <div className="mt-6 flex flex-wrap gap-5"><ExternalLink href={project.live}>Live Demo</ExternalLink><ExternalLink href={project.github}>GitHub</ExternalLink></div>
              </div>
            </article>
          ))}
        </div>

        {showMore && (
          <div id="additional-projects" className="journal-reveal mt-16 grid gap-10 border-t border-foreground/15 pt-14 md:grid-cols-3">
            {additionalProjects.map((project) => (
              <article key={project.title} className="border-t-2 border-secondary pt-5">
                <span className="font-serif text-5xl text-accent/35">{project.number}</span>
                <h3 className="-mt-2 font-serif text-2xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">{project.description}</p>
                <p className="mt-4 text-xs text-foreground/50">{project.stack}</p>
                <div className="mt-5"><ExternalLink href={project.github}>GitHub</ExternalLink></div>
              </article>
            ))}
          </div>
        )}
        <div className="mt-12 flex justify-center">
          <Button variant="journal" onClick={() => setShowMore((value) => !value)} aria-expanded={showMore} aria-controls="additional-projects" className="group h-auto gap-2 pb-1 text-xs uppercase">
            {showMore ? "Show less" : "Show more"}{showMore ? <ArrowDown className="size-4 rotate-180" /> : <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />}
          </Button>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-[1180px] scroll-mt-8 px-5 pt-24 md:px-10 md:pt-32">
        <SectionTitle eyebrow="04" title="The record" />
        <div className="mt-12 grid grid-cols-12 gap-x-10 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <p className="mb-5 text-xs uppercase text-accent">Experience</p>
            <div className="space-y-8">
              <div className="border-l border-foreground/20 pl-5"><h3 className="font-serif text-xl">Data Analyst Intern · V Devi Foundation</h3><p className="mt-1 text-sm text-foreground/50">Jun 2026 — Jul 2026</p><p className="mt-3 text-sm leading-relaxed text-foreground/70">Built a centralized donor data system, automated CSV/Excel validation, and developed Power BI and Streamlit dashboards.</p></div>
              <div className="border-l border-foreground/20 pl-5"><h3 className="font-serif text-xl">Lead & Co-Founder · Insanzia Labs</h3><p className="mt-1 text-sm text-foreground/50">Jan 2026 — Mar 2026</p><p className="mt-3 text-sm leading-relaxed text-foreground/70">Designed database schemas and frontend data flows, integrated REST APIs, and monitored product usage.</p></div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3"><p className="mb-5 text-xs uppercase text-accent">Education</p><h3 className="font-serif text-xl">B.Tech, Information Technology</h3><p className="mt-1 text-sm text-foreground/50">GGSIPU (USICT) · 2023—2027</p><p className="mt-3 text-sm leading-relaxed text-foreground/70">Specialization in Artificial Intelligence and Machine Learning.</p></div>
          <div className="col-span-12 md:col-span-4"><p className="mb-5 text-xs uppercase text-accent">Achievements</p><ul className="space-y-4 text-sm leading-relaxed text-foreground/70"><li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />Top 20%—top 5,000 of 25,000 teams—at BuildWithIndia–HackWithIndia.</li><li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />Built an AI solution aligned with UN Sustainable Development Goals for the GDG Solution Challenge.</li></ul></div>
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-[1180px] scroll-mt-8 px-5 pb-12 pt-24 md:px-10 md:pt-32">
        <div className="border-t-2 border-foreground pt-12">
          <p className="text-xs uppercase text-accent">Let's build something measurable</p>
          <a href="mailto:priyanshukalondia@gmail.com" className="mt-4 inline-flex max-w-full items-center gap-3 font-serif text-[9vw] leading-none transition-colors hover:text-accent sm:text-6xl lg:text-7xl"><Mail className="hidden size-9 shrink-0 sm:block" />priyanshukalondia@gmail.com</a>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            <ExternalLink href="https://www.linkedin.com/in/priyanshu-kalondia-653517390/">LinkedIn</ExternalLink>
            <ExternalLink href="https://github.com/priyanshukalondia-svg">GitHub</ExternalLink>
            <ExternalLink href="https://x.com/Priyanshu__1703">Twitter</ExternalLink>
            <ExternalLink href="https://wa.me/919971747013">WhatsApp</ExternalLink>
            <ExternalLink href={resumeAsset.url}>Résumé PDF</ExternalLink>
          </div>
          <div className="mt-14 flex flex-col justify-between gap-2 border-t border-foreground/20 pt-5 text-xs uppercase text-foreground/45 sm:flex-row"><span>© 2026 Priyanshu Kalondia</span><span>AI / ML · Delhi, India</span></div>
        </div>
      </footer>
    </main>
  );
}