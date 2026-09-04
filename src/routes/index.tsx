import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Braces, BrainCircuit, Boxes, DatabaseZap, Download, Mail, MapPin } from "lucide-react";
import { useState } from "react";

import aiSystemHero from "@/assets/ai-system-hero.jpg.asset.json";
import customerSegmentation from "@/assets/customer-segmentation.jpg.asset.json";
import dividerAIEngineering from "@/assets/divider-ai-engineering.jpg.asset.json";
import dividerDataAI from "@/assets/divider-data-ai.jpg.asset.json";
import dividerMLPipeline from "@/assets/divider-ml-pipeline.jpg.asset.json";
import ecommerceIntelligence from "@/assets/ecommerce-intelligence.jpg.asset.json";
import listeningAnalysis from "@/assets/listening-analysis.jpg.asset.json";
import ragImage from "@/assets/agentic-rag.png.asset.json";
import resumeAsset from "@/assets/priyanshu-kalondia-resume.pdf.asset.json";
import sentinelImage from "@/assets/sentinelml.png.asset.json";
import sentryImage from "@/assets/sentry.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu Kalondia | AI & ML Engineer" },
      { name: "description", content: "Portfolio of Priyanshu Kalondia—AI and ML engineer building production MLOps, agentic RAG, and real-time risk systems." },
      { property: "og:title", content: "Priyanshu Kalondia | AI & ML Engineer" },
      { property: "og:description", content: "Production AI, machine learning, generative AI, and MLOps portfolio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const primaryProjects = [
  { number: "01", title: "SentinelML", subtitle: "Self-Healing MLOps Platform", image: sentinelImage.url, alt: "SentinelML self-healing MLOps platform interface", description: "An end-to-end ML lifecycle platform with experiment tracking, registry, deployment, PSI/KS drift detection, automated retraining, champion-challenger evaluation, rollback, and SHAP explainability.", stack: "Python / FastAPI / MLflow / XGBoost / React / PostgreSQL / Docker", live: "https://sentinelml.vercel.app/", github: "https://github.com/priyanshukalondia-svg/SentinelML" },
  { number: "02", title: "Production Agentic RAG", subtitle: "Knowledge Assistant", image: ragImage.url, alt: "Agentic RAG knowledge assistant interface", description: "A grounded answer system using query decomposition, multi-hop retrieval, hybrid BM25/vector search, reciprocal rank fusion, reranking, citations, guardrails, and self-correction.", stack: "Python / FastAPI / LangGraph / RAG / BM25 / Vector Search / React", live: "https://fraudfrontend.vercel.app/", github: "https://github.com/priyanshukalondia-svg/fraud-detection-scheme" },
  { number: "03", title: "Sentry", subtitle: "Fraud Detection & Risk Monitoring", image: sentryImage.url, alt: "Sentry AI fraud detection and risk monitoring dashboard", description: "A real-time fraud system combining supervised classification and anomaly detection with explainable risk scores, reason codes, alert triage, persistent transaction state, and live WebSocket updates.", stack: "Python / Scikit-learn / FastAPI / SQLAlchemy / React / WebSockets", live: "https://frontend-five-phi-44.vercel.app/", github: "https://github.com/priyanshukalondia-svg/production-agentic-rag" },
];

const additionalProjects = [
  { number: "04", title: "E-Commerce Sales Dashboard", image: ecommerceIntelligence, alt: "Abstract e-commerce analytics data system", description: "Interactive analysis across 32K+ transactions, unifying revenue, customer cohorts, category performance, and RFM behavior in an executive view.", stack: "Power BI / SQL / DAX", github: "https://github.com/priyanshukalondia-svg/advanced-ecommerce-cohort-rfm-analysis" },
  { number: "05", title: "RFM Customer Segmentation", image: customerSegmentation, alt: "Abstract customer segmentation clusters", description: "Behavioral segmentation using recency, frequency, and monetary scoring to reveal valuable cohorts and practical retention opportunities.", stack: "Python / Pandas / NumPy / Matplotlib", github: "https://github.com/priyanshukalondia-svg/advanced-ecommerce-cohort-rfm-analysis" },
  { number: "06", title: "Spotify Listening Analysis", image: listeningAnalysis, alt: "Abstract listening behavior and waveform analysis", description: "An exploration of streaming behavior and audio features—mapping mood against tempo, energy, danceability, and listening patterns.", stack: "SQL / Python / Seaborn", github: "https://github.com/priyanshukalondia-svg/spotify_mysql_project" },
];

const experiences = [
  { number: "01", date: "2026.06—07", role: "Data Analyst Intern", org: "V Devi Foundation", description: "Built a centralized donor data system, automated CSV/Excel validation, and developed Power BI and Streamlit dashboards.", testimonial: { quote: "Priyanshu was a standout intern — reliable, detail-oriented, and quick to turn raw data into actionable dashboards. His work on the donor system directly improved our reporting workflow.", author: "Shaurya Shandaliya", title: "Project Mentor, V Devi Foundation" } },
  { number: "02", date: "2026.01—03", role: "Lead & Co-Founder", org: "Insanzia Labs", description: "Designed database schemas and frontend data flows, integrated REST APIs, and monitored product usage.", testimonial: { quote: "Priyanshu is a great partner to work with. He brings strong ownership, clean engineering, and a product mindset that makes every collaboration smoother.", author: "Ankit Kumar Mishra", title: "Founder, Insanzia Labs" } },
];

const capabilities = ["MACHINE LEARNING", "GENERATIVE AI", "MLOPS", "AGENTIC SYSTEMS", "DATA ENGINEERING", "EXPLAINABLE AI"];

const skillGroups = [
  {
    index: "01",
    title: "Languages",
    icon: Braces,
    skills: ["Python", "SQL", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    index: "02",
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["Scikit-learn", "XGBoost", "Pandas", "NumPy", "Feature Engineering", "Model Evaluation", "Hyperparameter Tuning", "SHAP", "Explainable AI"],
  },
  {
    index: "03",
    title: "Generative AI",
    icon: Boxes,
    skills: ["LLMs", "RAG", "Agentic AI", "Embeddings", "Vector Search", "BM25", "Hybrid Retrieval", "RRF", "Reranking", "Query Decomposition", "Multi-Hop Retrieval", "LLM Evaluation"],
  },
  {
    index: "04",
    title: "MLOps",
    icon: DatabaseZap,
    skills: ["MLflow", "Experiment Tracking", "Model Registry", "Model Monitoring", "Data Drift Detection", "PSI", "KS Test", "Automated Retraining", "Champion-Challenger Evaluation", "Model Rollback"],
  },
  {
    index: "05",
    title: "Engineering",
    icon: Braces,
    skills: ["FastAPI", "REST APIs", "WebSockets", "React", "Tailwind CSS", "SQLAlchemy", "PostgreSQL", "MySQL", "Docker", "Git", "GitHub"],
  },
];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-foreground transition-colors hover:text-accent">{children}<ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>;
}

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="grid gap-6 border-y border-border py-9 md:grid-cols-[180px_1fr] md:items-end md:py-12">
      <div className="font-mono text-[10px] uppercase text-muted-foreground">[{index}] / {label}</div>
      <h2 className="font-display text-4xl uppercase leading-[0.9] md:text-7xl lg:text-8xl">{title}</h2>
    </div>
  );
}

function SectionBreak({ index, label }: { index: string; label: string }) {
  return (
    <div className="mx-auto max-w-[1500px] border-x border-b border-border px-5 py-8 md:px-10 md:py-12">
      <div className="flex items-center gap-4">
        <span className="size-2.5 bg-accent" aria-hidden="true" />
        <span className="font-mono text-[9px] uppercase text-muted-foreground">End of section [{index}] / {label}</span>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
}

function Project({ project, reverse = false }: { project: (typeof primaryProjects)[number]; reverse?: boolean }) {
  return (
    <article className="grid border-b border-border lg:grid-cols-12">
      <div className={`relative overflow-hidden border-border bg-card lg:col-span-7 ${reverse ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
        <div className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-accent" />
        <img src={project.image} alt={project.alt} width={1600} height={1000} loading="lazy" className="aspect-[16/10] h-full w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
      </div>
      <div className={`flex flex-col justify-between p-8 md:p-14 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground"><span>PROJECT_{project.number}</span><span className="text-accent">SYSTEM ACTIVE</span></div>
          <h3 className="mt-12 font-display text-4xl uppercase leading-[0.92] md:text-6xl">{project.title}</h3>
          <p className="mt-4 font-mono text-[10px] uppercase text-accent">{project.subtitle}</p>
          <p className="mt-8 max-w-[48ch] text-base leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
        <div className="mt-14 border-t border-border pt-6">
          <p className="mb-6 font-mono text-[9px] uppercase leading-relaxed text-muted-foreground">{project.stack}</p>
          <div className="flex gap-8"><ExternalLink href={project.live}>Live system</ExternalLink><ExternalLink href={project.github}>Source code</ExternalLink></div>
        </div>
      </div>
    </article>
  );
}

function Experience({ experience }: { experience: (typeof experiences)[number] }) {
  return (
    <article className="grid border-b border-border lg:grid-cols-12">
      <div className="flex flex-col justify-between border-b border-border p-8 md:p-14 lg:col-span-3 lg:border-b-0 lg:border-r">
        <p className="font-mono text-[10px] uppercase text-accent">{experience.date}</p>
        <p className="mt-8 font-mono text-[9px] uppercase text-muted-foreground lg:mt-0">{experience.org}</p>
      </div>
      <div className="p-8 md:p-14 lg:col-span-9">
        <h3 className="font-display text-3xl uppercase leading-[0.92] md:text-5xl">{experience.role}</h3>
        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground">{experience.description}</p>
      </div>
    </article>
  );
}

function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  return (
    <main id="top" className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <header className="relative z-30 border-b border-border bg-background/95 px-5 py-5 backdrop-blur md:px-10">
        <nav aria-label="Primary navigation" className="mx-auto flex max-w-[1500px] items-center justify-between gap-6">
          <a href="#top" className="font-display text-lg uppercase">AI<span className="text-accent">/</span>ML</a>
          <div className="hidden items-center gap-7 font-mono text-[9px] uppercase text-muted-foreground md:flex"><a href="#about" className="hover:text-accent">About</a><a href="#projects" className="hover:text-accent">Work</a><a href="#record" className="hover:text-accent">Record</a></div>
          <Button asChild variant="journal"><a href="#contact">Initialize contact <ArrowUpRight /></a></Button>
        </nav>
      </header>

      <section className="system-grid relative mx-auto min-h-[820px] max-w-[1500px] overflow-hidden border-x border-border px-5 pb-16 pt-20 md:px-10 md:pb-20 md:pt-24 lg:px-14">
        <div className="absolute right-0 top-0 h-full w-[46%] opacity-45 [mask-image:linear-gradient(to_left,black,transparent)]"><img src={aiSystemHero.url} alt="Abstract artificial intelligence inference architecture" width={1920} height={1080} className="h-full w-full object-cover" /></div>
        <div className="relative z-10 flex min-h-[730px] flex-col justify-between">
          <div className="system-reveal flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 font-mono text-[9px] uppercase text-muted-foreground">
            <span className="flex items-center gap-3"><span className="size-2 bg-accent" />Node status: available for opportunities</span><span>Delhi / India / 28.6139° N</span>
          </div>
          <div className="system-reveal max-w-[1200px] [animation-delay:120ms]">
            <p className="mb-6 font-mono text-[10px] uppercase text-accent">AI & ML Engineer / Portfolio 2026</p>
            <h1 className="-translate-y-2 font-display text-[2.6rem] uppercase leading-[0.78] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]">Priyanshu Kalondia</h1>
            <div className="mt-6 flex items-center gap-5"><div className="h-px flex-1 bg-border" /><p className="max-w-xl text-right font-mono text-sm uppercase leading-relaxed md:text-lg">Engineering <span className="text-accent">intelligent systems</span> that learn, reason, and ship.</p></div>
          </div>
          <div className="system-reveal grid gap-8 [animation-delay:240ms] md:grid-cols-12 md:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">I ship end-to-end AI systems: MLOps platforms that monitor, retrain, and rollback themselves; agentic RAG that reasons across documents; and real-time fraud detection that explains every risk score.</p>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end"><Button asChild><a href="#projects">View systems <ArrowDown /></a></Button><Button asChild variant="journal"><a href={resumeAsset.url} target="_blank" rel="noreferrer"><Download /> Résumé PDF</a></Button></div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-accent bg-accent py-4 text-accent-foreground">
        <div className="ticker-track flex w-max items-center whitespace-nowrap font-display text-xl uppercase">
          {[...capabilities, ...capabilities].map((item, index) => <span key={`${item}-${index}`} className="flex items-center"><span className="px-8">{item}</span><span aria-hidden="true">✦</span></span>)}
        </div>
      </div>

      <section id="about" className="mx-auto max-w-[1500px] scroll-mt-4 border-x border-border py-16 md:py-24">
        <SectionHeading index="01" label="Profile" title="Built for production" />
        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-8 md:p-14 lg:col-span-8 lg:border-r">
            <p className="max-w-3xl font-mono text-lg font-normal leading-relaxed md:text-xl">I don't just train models—I ship systems. My work sits between research and production: MLOps pipelines that heal themselves, agentic retrieval that reasons across sources, and real-time risk engines that explain every decision.</p>
            <div className="mt-20 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {[['10+','BUILT SYSTEMS'],['04','CORE DOMAINS'],['08+','MODELS DEPLOYED'],['2027','B.TECH GRAD']].map(([value,label]) => <div key={label} className="bg-background p-6"><p className="font-display text-3xl text-accent md:text-4xl">{value}</p><p className="mt-2 font-mono text-[8px] uppercase text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
          <div className="system-grid flex min-h-72 flex-col justify-between p-8 md:p-14 lg:col-span-4">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-muted-foreground"><MapPin className="size-4 text-accent" /> Delhi, India</div>
            <div><p className="font-display text-6xl text-accent md:text-7xl">48</p><p className="mt-2 font-mono text-[9px] uppercase text-muted-foreground">Tools, methods & technologies in active stack</p></div>
          </div>
        </div>
        <div className="mt-16 border-t border-border">
          <div className="flex flex-col justify-between gap-5 border-b border-border p-8 md:flex-row md:items-end md:p-14">
            <div><p className="font-mono text-[9px] uppercase text-accent">Technical arsenal / full résumé index</p><h3 className="mt-4 font-display text-4xl uppercase leading-none md:text-6xl">Skills matrix</h3></div>
            <p className="max-w-sm font-mono text-[9px] uppercase leading-relaxed text-muted-foreground">From model research and retrieval architecture to production APIs, observability, and deployment.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-12">
            {skillGroups.map((group, groupIndex) => {
              const Icon = group.icon;
              const span = groupIndex < 2 ? "xl:col-span-6" : "xl:col-span-4";
              return (
                <article key={group.title} className={`group relative overflow-hidden border-b border-border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_44px_-14px_rgba(255,255,255,0.12)] md:p-10 md:odd:border-r xl:border-r ${span}`}>
                  <div className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[9rem] leading-none text-foreground/[0.035] transition-all duration-500 group-hover:-translate-y-3">{group.index}</div>
                  <div className="relative z-10 flex items-start justify-between border-b border-current/20 pb-6">
                    <div><span className="font-mono text-[9px] opacity-60">MODULE_{group.index}</span><h4 className="mt-2 font-display text-2xl uppercase md:text-3xl">{group.title}</h4></div>
                    <Icon className="size-7 text-accent" strokeWidth={1.4} />
                  </div>
                  <ul className="relative z-10 mt-8 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => <li key={skill} className="border border-current/20 px-2.5 py-1.5 font-mono text-[9px] uppercase transition-transform duration-300 group-hover:-translate-y-0.5">{skill}</li>)}
                  </ul>
                  <div className="relative z-10 mt-10 flex items-center justify-between font-mono text-[8px] uppercase opacity-60"><span>Capability set</span><span>{String(group.skills.length).padStart(2, "0")} entries</span></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SectionBreak index="01" label="Profile" />

      <div className="relative mx-auto max-w-[1500px] overflow-hidden border-x border-border">
        <div className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-accent" />
        <img src={dividerDataAI.url} alt="Abstract data and AI visualization" width={1920} height={600} loading="lazy" className="aspect-[16/5] w-full object-cover grayscale" />
      </div>

      <section id="projects" className="mx-auto max-w-[1500px] scroll-mt-4 border-x border-border py-16 md:py-24">
        <SectionHeading index="02" label="Selected work" title="Deployed intelligence" />
        <div className="space-y-10 md:space-y-14">{primaryProjects.map((project, index) => <Project key={project.title} project={project} reverse={index % 2 === 1} />)}</div>
        {showMore && <div id="additional-projects" className="system-reveal mt-14 grid gap-6 border-b border-border p-4 lg:grid-cols-3">{additionalProjects.map((project) => <article key={project.title} className="group flex flex-col border border-border"><div className="overflow-hidden"><img src={project.image.url} alt={project.alt} width={1600} height={1000} loading="lazy" className="aspect-[16/10] w-full object-cover grayscale transition duration-700 group-hover:grayscale-0" /></div><div className="flex flex-1 flex-col p-8 md:p-10"><span className="font-mono text-[9px] text-accent">PROJECT_{project.number}</span><h3 className="mt-5 font-display text-3xl uppercase leading-none">{project.title}</h3><p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p><p className="my-6 border-t border-border pt-4 font-mono text-[9px] uppercase text-muted-foreground">{project.stack}</p><ExternalLink href={project.github}>Source code</ExternalLink></div></article>)}</div>}
        <div className="flex justify-center border-b border-border py-16 md:py-20"><Button variant="journal" onClick={() => setShowMore((value) => !value)} aria-expanded={showMore} aria-controls="additional-projects">{showMore ? "Collapse archive" : "Show 03 more projects"}<ArrowDown className={showMore ? "rotate-180" : ""} /></Button></div>
      </section>

      <SectionBreak index="02" label="Selected work" />

      <div className="relative mx-auto max-w-[1500px] overflow-hidden border-x border-border">
        <div className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-accent" />
        <img src={dividerMLPipeline.url} alt="Abstract machine learning pipeline visualization" width={1920} height={600} loading="lazy" className="aspect-[16/5] w-full object-cover grayscale" />
      </div>

      <section id="record" className="mx-auto max-w-[1500px] scroll-mt-4 border-x border-border py-16 md:py-24">
        <SectionHeading index="03" label="Experience" title="The operating record" />
        <div className="space-y-10 md:space-y-14">{experiences.map((experience) => <Experience key={experience.role} experience={experience} />)}</div>
        <div className="mt-14 grid gap-6 border-b border-border lg:grid-cols-2">
          <article className="group flex flex-col border border-border p-8 md:p-10">
            <span className="font-mono text-[9px] text-accent">EDU_01</span>
            <h3 className="mt-5 font-display text-3xl uppercase leading-none">B.Tech Information Technology</h3>
            <p className="my-6 border-t border-border pt-4 font-mono text-[9px] uppercase text-muted-foreground">GGSIPU (USICT) / 2023—2027</p>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">Specialization in Artificial Intelligence and Machine Learning.</p>
          </article>
          <article className="group flex flex-col border border-border p-8 md:p-10">
            <span className="font-mono text-[9px] text-accent">REC_01</span>
            <h3 className="mt-5 font-display text-3xl uppercase leading-none">Recognition</h3>
            <ul className="mt-5 flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li className="border-l-2 border-accent pl-4"><strong className="block text-foreground">Top 20% nationwide</strong>Top 5,000 of 25,000 teams at BuildWithIndia–HackWithIndia.</li>
              <li className="border-l-2 border-accent pl-4"><strong className="block text-foreground">GDG Solution Challenge</strong>Built an AI solution aligned with UN Sustainable Development Goals.</li>
            </ul>
          </article>
        </div>
      </section>

      <SectionBreak index="03" label="Experience" />

      <div className="relative mx-auto max-w-[1500px] overflow-hidden border-x border-border">
        <div className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-accent" />
        <img src={dividerAIEngineering.url} alt="Abstract AI engineering visualization" width={1920} height={600} loading="lazy" className="aspect-[16/5] w-full object-cover grayscale" />
      </div>

      <footer id="contact" className="mx-auto max-w-[1500px] scroll-mt-4 border-x border-t border-border">
        <div className="system-grid p-6 py-20 md:p-12 md:py-28">
          <p className="font-mono text-[10px] uppercase text-accent">[04] / Open channel</p>
          <h2 className="mt-8 max-w-6xl font-display text-[13vw] uppercase leading-[0.8] md:text-8xl lg:text-[9rem]">Let's build what learns.</h2>
          <a href="mailto:priyanshukalondia@gmail.com" className="mt-12 inline-flex max-w-full items-center gap-3 break-all border-b border-foreground pb-2 font-mono text-xs transition-colors hover:border-accent hover:text-accent sm:text-base"><Mail className="size-5 shrink-0" />priyanshukalondia@gmail.com</a>
        </div>
        <div className="grid gap-px border-t border-border bg-border sm:grid-cols-5">{[["LINKEDIN","https://www.linkedin.com/in/priyanshu-kalondia-653517390/"],["GITHUB","https://github.com/priyanshukalondia-svg"],["TWITTER","https://x.com/Priyanshu__1703"],["WHATSAPP","https://wa.me/919971747013"],["RÉSUMÉ",resumeAsset.url]].map(([label,href]) => <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-background p-5 font-mono text-[9px] hover:bg-accent hover:text-accent-foreground">{label}<ArrowUpRight className="size-3.5" /></a>)}</div>
        <div className="flex flex-col justify-between gap-2 border-t border-border px-6 py-5 font-mono text-[8px] uppercase text-muted-foreground sm:flex-row"><span>© 2026 Priyanshu Kalondia</span><span>AI / ML Engineer · Delhi, India</span></div>
      </footer>
    </main>
  );
}