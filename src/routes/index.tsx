import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
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

const capabilities = ["MACHINE LEARNING", "GENERATIVE AI", "MLOPS", "AGENTIC SYSTEMS", "DATA ENGINEERING", "EXPLAINABLE AI"];

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-foreground transition-colors hover:text-accent">{children}<ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>;
}

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="grid gap-5 border-y border-border py-7 md:grid-cols-[180px_1fr] md:items-end">
      <div className="font-mono text-[10px] uppercase text-muted-foreground">[{index}] / {label}</div>
      <h2 className="font-display text-4xl uppercase leading-[0.9] md:text-7xl lg:text-8xl">{title}</h2>
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
      <div className={`flex flex-col justify-between p-6 md:p-10 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground"><span>PROJECT_{project.number}</span><span className="text-accent">SYSTEM ACTIVE</span></div>
          <h3 className="mt-10 font-display text-4xl uppercase leading-[0.92] md:text-6xl">{project.title}</h3>
          <p className="mt-3 font-mono text-[10px] uppercase text-accent">{project.subtitle}</p>
          <p className="mt-7 max-w-[48ch] text-base leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
        <div className="mt-12 border-t border-border pt-5">
          <p className="mb-5 font-mono text-[9px] uppercase leading-relaxed text-muted-foreground">{project.stack}</p>
          <div className="flex gap-7"><ExternalLink href={project.live}>Live system</ExternalLink><ExternalLink href={project.github}>Source code</ExternalLink></div>
        </div>
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
          <a href="#top" className="font-display text-lg uppercase">PK<span className="text-accent">//</span>AI</a>
          <div className="hidden items-center gap-7 font-mono text-[9px] uppercase text-muted-foreground md:flex"><a href="#about" className="hover:text-accent">About</a><a href="#projects" className="hover:text-accent">Work</a><a href="#record" className="hover:text-accent">Record</a></div>
          <Button asChild variant="journal"><a href="#contact">Initialize contact <ArrowUpRight /></a></Button>
        </nav>
      </header>

      <section className="system-grid relative mx-auto min-h-[820px] max-w-[1500px] overflow-hidden border-x border-border px-5 pb-10 pt-16 md:px-10 lg:px-14">
        <div className="absolute right-0 top-0 h-full w-[46%] opacity-45 [mask-image:linear-gradient(to_left,black,transparent)]"><img src={aiSystemHero.url} alt="Abstract artificial intelligence inference architecture" width={1920} height={1080} className="h-full w-full object-cover" /></div>
        <div className="relative z-10 flex min-h-[730px] flex-col justify-between">
          <div className="system-reveal flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 font-mono text-[9px] uppercase text-muted-foreground">
            <span className="flex items-center gap-3"><span className="size-2 bg-accent" />Node status: available for opportunities</span><span>Delhi / India / 28.6139° N</span>
          </div>
          <div className="system-reveal max-w-[1200px] [animation-delay:120ms]">
            <p className="mb-6 font-mono text-[10px] uppercase text-accent">AI & ML Engineer / Portfolio 2026</p>
            <h1 className="-translate-y-2 font-display text-[2.6rem] uppercase leading-[0.78] sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]">Priyanshu Kalondia</h1>
            <div className="mt-6 flex items-center gap-5"><div className="h-px flex-1 bg-border" /><p className="max-w-xl text-right font-mono text-sm uppercase leading-relaxed md:text-lg">Engineering <span className="text-accent">intelligent systems</span> from model to production.</p></div>
          </div>
          <div className="system-reveal grid gap-8 [animation-delay:240ms] md:grid-cols-12 md:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">I build production-oriented machine learning and generative AI systems—from self-healing MLOps and agentic retrieval to real-time fraud detection.</p>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end"><Button asChild><a href="#projects">View systems <ArrowDown /></a></Button><Button asChild variant="journal"><a href={resumeAsset.url} target="_blank" rel="noreferrer"><Download /> Résumé PDF</a></Button></div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-accent bg-accent py-4 text-accent-foreground">
        <div className="ticker-track flex w-max items-center whitespace-nowrap font-display text-xl uppercase">
          {[...capabilities, ...capabilities].map((item, index) => <span key={`${item}-${index}`} className="flex items-center"><span className="px-8">{item}</span><span aria-hidden="true">✦</span></span>)}
        </div>
      </div>

      <section id="about" className="mx-auto max-w-[1500px] scroll-mt-4 border-x border-border">
        <SectionHeading index="01" label="Profile" title="Built for production" />
        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-6 md:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
            <p className="max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">I connect machine learning research with the systems discipline required to make it useful, observable, and resilient.</p>
            <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
              {[['06','BUILT SYSTEMS'],['04','CORE DOMAINS'],['32K+','ROWS ANALYZED'],['2027','B.TECH GRAD']].map(([value,label]) => <div key={label} className="bg-background p-5"><p className="font-display text-3xl text-accent md:text-4xl">{value}</p><p className="mt-2 font-mono text-[8px] uppercase text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
          <div className="p-6 md:p-10 lg:col-span-5">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase text-muted-foreground"><MapPin className="size-4 text-accent" /> Delhi, India</div>
            <div className="mt-10 space-y-8">{[["AI / ML CORE","Scikit-learn · XGBoost · feature engineering · SHAP · explainability"],["GENERATIVE AI","LLMs · RAG · agentic AI · embeddings · hybrid retrieval · reranking"],["MLOPS","MLflow · model registry · drift detection · automated retraining · rollback"],["ENGINEERING","Python · FastAPI · React · PostgreSQL · Docker · WebSockets"]].map(([title,text]) => <div key={title} className="grid grid-cols-[120px_1fr] gap-4 border-t border-border pt-4"><h3 className="font-mono text-[9px] text-accent">{title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div>
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-[1500px] overflow-hidden border-x border-border">
        <div className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-accent" />
        <img src={dividerDataAI.url} alt="Abstract data and AI visualization" width={1920} height={600} loading="lazy" className="aspect-[16/5] w-full object-cover grayscale" />
      </div>

      <section id="projects" className="mx-auto max-w-[1500px] scroll-mt-4 border-x border-border">
        <SectionHeading index="02" label="Selected work" title="Deployed intelligence" />
        <div className="space-y-4">{primaryProjects.map((project, index) => <Project key={project.title} project={project} reverse={index % 2 === 1} />)}</div>
        {showMore && <div id="additional-projects" className="system-reveal grid gap-4 border-b border-border p-4 lg:grid-cols-3">{additionalProjects.map((project) => <article key={project.title} className="group flex flex-col border border-border"><div className="overflow-hidden"><img src={project.image.url} alt={project.alt} width={1600} height={1000} loading="lazy" className="aspect-[16/10] w-full object-cover grayscale transition duration-700 group-hover:grayscale-0" /></div><div className="flex flex-1 flex-col p-6 md:p-8"><span className="font-mono text-[9px] text-accent">PROJECT_{project.number}</span><h3 className="mt-5 font-display text-3xl uppercase leading-none">{project.title}</h3><p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p><p className="my-6 border-t border-border pt-4 font-mono text-[9px] uppercase text-muted-foreground">{project.stack}</p><ExternalLink href={project.github}>Source code</ExternalLink></div></article>)}</div>}
        <div className="flex justify-center border-b border-border py-12"><Button variant="journal" onClick={() => setShowMore((value) => !value)} aria-expanded={showMore} aria-controls="additional-projects">{showMore ? "Collapse archive" : "Show 03 more projects"}<ArrowDown className={showMore ? "rotate-180" : ""} /></Button></div>
      </section>

      <div className="relative mx-auto max-w-[1500px] overflow-hidden border-x border-border">
        <div className="scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-accent" />
        <img src={dividerMLPipeline.url} alt="Abstract machine learning pipeline visualization" width={1920} height={600} loading="lazy" className="aspect-[16/5] w-full object-cover grayscale" />
      </div>

      <section id="record" className="mx-auto max-w-[1500px] scroll-mt-4 border-x border-border">
        <SectionHeading index="03" label="Experience" title="The operating record" />
        <div className="grid lg:grid-cols-12">
          <div className="border-b border-border p-6 md:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
            <p className="font-mono text-[10px] uppercase text-accent">Experience log</p>
            <div className="mt-10">{[["2026.06—07","Data Analyst Intern","V Devi Foundation","Built a centralized donor data system, automated CSV/Excel validation, and developed Power BI and Streamlit dashboards."],["2026.01—03","Lead & Co-Founder","Insanzia Labs","Designed database schemas and frontend data flows, integrated REST APIs, and monitored product usage."]].map(([date,role,org,text]) => <article key={role} className="grid gap-4 border-t border-border py-7 sm:grid-cols-[130px_1fr]"><span className="font-mono text-[9px] text-muted-foreground">{date}</span><div><h3 className="text-xl font-bold uppercase">{role}</h3><p className="mt-1 font-mono text-[9px] uppercase text-accent">{org}</p><p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div>
          </div>
          <div className="grid lg:col-span-5">
            <div className="border-b border-border p-6 md:p-10"><p className="font-mono text-[10px] uppercase text-accent">Education</p><h3 className="mt-8 font-display text-3xl uppercase">B.Tech Information Technology</h3><p className="mt-3 font-mono text-[9px] uppercase text-muted-foreground">GGSIPU (USICT) / 2023—2027</p><p className="mt-5 text-sm text-muted-foreground">Specialization in Artificial Intelligence and Machine Learning.</p></div>
            <div className="p-6 md:p-10"><p className="font-mono text-[10px] uppercase text-accent">Recognition</p><ul className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground"><li className="border-l-2 border-accent pl-4"><strong className="block text-foreground">Top 20% nationwide</strong>Top 5,000 of 25,000 teams at BuildWithIndia–HackWithIndia.</li><li className="border-l-2 border-accent pl-4"><strong className="block text-foreground">GDG Solution Challenge</strong>Built an AI solution aligned with UN Sustainable Development Goals.</li></ul></div>
          </div>
        </div>
      </section>

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