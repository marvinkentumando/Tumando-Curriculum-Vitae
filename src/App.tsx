import { motion } from "motion/react";
import { 
  Mail, Phone, MapPin, Linkedin, ExternalLink, 
  Award, BookOpen, Briefcase, Code, GraduationCap, 
  Printer, ScrollText, Trophy, Presentation
} from "lucide-react";

const DATA = {
  name: "Marvin Ken P. Tumando",
  role: "BS Information Technology · Campus Journalist · Web Developer",
  portrait: "https://dnsc.edu.ph/davaoreef/wp-content/uploads/2024/04/TUMANDO-MARVIN-KEN-P.-Writer.jpeg",
  contact: {
    email: "marvinkentumando@gmail.com",
    phone: "0963 965 0443",
    location: "Prk. 14A, Magnaga, Pantukan, Davao de Oro",
    linkedin: "linkedin.com/in/marvin-kentumando-081732271"
  },
  tagline: "An IT student, creative storyteller, and faith-driven digital creator merging technology, art, and purpose—building systems that serve people and crafting spaces that reflect authenticity.",
  education: [
    {
      institution: "Davao del Norte State College, Panabo",
      period: "Aug 2023 — June 2027",
      degree: "Bachelor of Science in Information Technology",
      highlights: [
        "Consistent Dean's Lister (2023–2025)",
        "With Honor Research Innovation and Work Immersion Awardee"
      ]
    },
    {
      institution: "Magnaga National High School",
      period: "June 2021 — July 2023",
      degree: "Humanities and Social Sciences Strand",
      highlights: [
        "Class Valedictorian · With High Honor (Junior & Senior High)",
        "With Honor (Elementary, 2016–2017)"
      ]
    }
  ],
  editorial: [
    { role: "Managing and Circulations Editor", period: "2026 — 2027", organization: "The Davao Reef, DNSC Student Publication" },
    { role: "Associate Editor", period: "2025 — 2026", organization: "The Davao Reef, DNSC Student Publication" },
    { role: "Writer", period: "2023 — 2024", organization: "The Davao Reef, DNSC Student Publication" },
    { role: "Editor-in-Chief", period: "2022 — 2023", organization: "The Shoreline, Magnaga NHS" },
    { role: "Photojournalist · News Writer", period: "2018 — 2023", organization: "The Shoreline, Magnaga NHS" }
  ],
  projects: [
    { name: "UMA", description: "E-Commerce Agriculture Platform", tech: "Laravel, Tailwind CSS, SQL" },
    { name: "HATAG", description: "Helping All Through Active Giving", tech: "PHP, Tailwind CSS, SQL" },
    { name: "Online Riding App", description: "Java GUI application for PWDs", tech: "Java, CRUD" },
    { name: "Waste Management", description: "Tracking and reporting system", tech: "Java, CRUD" }
  ],
  skills: [
    "UI/UX Design", "Web Development", "Videography", "Photography", 
    "PHP", "SQL", "Java", "JavaScript", "React", "Tailwind CSS", "Laravel"
  ],
  awards: {
    major: [
      "Best UI/UX Designer",
      "Class Valedictorian (Magnaga NHS)",
      "Most Outstanding Campus Journalist, Davao de Oro (2023)",
      "2nd Most Outstanding Campus Journalist, Davao Region (2023)",
      "Vice Mayor's Academic Excellence Award",
      "Gov. Dorothy Montejo Gonzaga Academic Excellence Award"
    ],
    press: [
      { title: "Champion — DSPC 2019, 2020, 2023", category: "Desktop Publishing" },
      { title: "1st Place — RSPC 2023", category: "Desktop Publishing" },
      { title: "2nd Place — NSPC 2023", category: "Desktop Publishing" },
      { title: "Best Director & Film", category: "Chestnut Division Film Festival 2021" }
    ]
  },
  seminars: [
    "Journalism Camp (2024)",
    "DSPC / RSPC / NSPC Trainings (2018–2023)",
    "GAD, Drug Awareness, and Mental Health Seminars"
  ]
};

const Section = ({ title, icon: Icon, children, className = "" }: any) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className={`mb-12 print:mb-8 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-2">
      <Icon className="w-4 h-4 text-stone-400" />
      <h2 className="text-xs font-bold uppercase tracking-widest text-stone-500">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const Entry = ({ title, subtitle, period, highlights = [], tech = "" }: any) => (
  <div className="mb-8 group last:mb-0">
    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-1">
      <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-stone-700 transition-colors">{title}</h3>
      <span className="text-xs font-mono text-stone-400 tabular-nums">{period}</span>
    </div>
    <p className="text-sm text-stone-500 font-medium mb-2">{subtitle}</p>
    {tech && <p className="text-[10px] font-mono text-stone-400 mb-2 uppercase tracking-tight">{tech}</p>}
    <ul className="space-y-1.5">
      {highlights.map((h: string, i: number) => (
        <li key={i} className="text-sm text-stone-600 flex items-start gap-2.5">
          <span className="mt-2 w-1 h-1 rounded-full bg-stone-300 shrink-0" />
          <span className="leading-relaxed">{h}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function App() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] selection:bg-stone-200 font-sans">
      {/* Floating UI */}
      <div className="fixed top-6 right-6 z-50 print:hidden flex gap-4">
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95 group text-sm font-medium text-stone-600"
        >
          <Printer className="w-4 h-4" />
          Print PDF
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 lg:py-32">
        {/* Header */}
        <header className="mb-24 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 items-center border-b-[3px] border-double border-stone-900 pb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src={DATA.portrait} 
              alt={DATA.name}
              className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover transition-all duration-500 border border-stone-200 shadow-xl"
            />
          </motion.div>
          
          <div className="space-y-3">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold"
            >
              Curriculum Vitae
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-7xl font-serif font-bold tracking-tight leading-none"
            >
              {DATA.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-stone-500 font-medium tracking-tight"
            >
              {DATA.role}
            </motion.p>
          </div>

          <div className="flex flex-col gap-3 text-xs text-stone-500 md:text-right font-mono tracking-tight leading-relaxed">
            <a href={`mailto:${DATA.contact.email}`} className="flex items-center md:justify-end gap-3 hover:text-stone-900 transition-colors">
              {DATA.contact.email} <Mail className="w-3.5 h-3.5 text-stone-300" />
            </a>
            <div className="flex items-center md:justify-end gap-3">
              {DATA.contact.phone} <Phone className="w-3.5 h-3.5 text-stone-300" />
            </div>
            <div className="flex items-center md:justify-end gap-3">
              {DATA.contact.location} <MapPin className="w-3.5 h-3.5 text-stone-300" />
            </div>
            <a href={`https://${DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 hover:text-stone-900 transition-colors">
              LinkedIn <Linkedin className="w-3.5 h-3.5 text-stone-300" />
            </a>
          </div>
        </header>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative mb-32"
        >
          <div className="absolute -left-8 top-0 text-6xl text-stone-100 font-serif font-black select-none pointer-events-none">&ldquo;</div>
          <p className="text-2xl md:text-4xl font-serif italic text-stone-800 leading-tight max-w-4xl relative z-10">
            {DATA.tagline}
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-20 md:gap-32">
          
          {/* Main Column */}
          <div className="space-y-20">
            <Section title="Academic Foundation" icon={GraduationCap}>
              {DATA.education.map((edu, i) => (
                <Entry 
                  key={i}
                  title={edu.institution}
                  subtitle={edu.degree}
                  period={edu.period}
                  highlights={edu.highlights}
                />
              ))}
            </Section>

            <Section title="Editorial Journey" icon={BookOpen}>
              <div className="grid grid-cols-1 gap-10">
                {DATA.editorial.map((job, i) => (
                  <div key={i} className="group flex gap-6">
                    <div className="hidden md:block w-32 shrink-0 text-[10px] font-mono text-stone-400 uppercase pt-1.5">{job.period}</div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-serif font-bold text-stone-900 group-hover:text-stone-700 transition-colors">{job.role}</h4>
                      <p className="text-sm text-stone-500 italic">{job.organization}</p>
                      <div className="md:hidden text-[10px] font-mono text-stone-400 uppercase">{job.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Systems & Architecture" icon={Code}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {DATA.projects.map((project, i) => (
                  <div key={i} className="p-8 bg-white border border-stone-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-stone-100 group-hover:bg-stone-900 transition-colors" />
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-serif font-bold text-xl">{project.name}</h4>
                      <ExternalLink className="w-4 h-4 text-stone-200 group-hover:text-stone-900 transition-colors" />
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((t, j) => (
                        <span key={j} className="text-[10px] font-mono text-stone-400 bg-stone-50 px-2 py-1 rounded-sm border border-stone-100">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-20">
            <Section title="Expertise" icon={Briefcase}>
              <div className="flex flex-wrap gap-2.5">
                {DATA.skills.map((skill, i) => (
                  <span key={i} className="text-[11px] font-bold uppercase tracking-wider text-stone-600 border border-stone-200 px-3.5 py-1.5 rounded-sm hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Major Honors" icon={Trophy}>
              <div className="space-y-8">
                {DATA.awards.major.map((award, i) => (
                  <div key={i} className="group">
                    <p className="text-sm font-bold text-stone-900 leading-snug group-hover:translate-x-1 transition-transform">{award}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Press Distinctions" icon={ScrollText}>
              <div className="space-y-5 font-mono text-[10px] leading-relaxed text-stone-500 uppercase tracking-tight">
                {DATA.awards.press.map((award, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-stone-300 font-bold opacity-30 mt-0.5">•</span>
                    <span>
                      <span className="text-stone-700 font-bold">{award.title}</span>
                      <br />
                      <span className="opacity-60">{award.category}</span>
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Seminars" icon={Presentation}>
              <ul className="space-y-3">
                {DATA.seminars.map((s, i) => (
                  <li key={i} className="text-xs text-stone-500 leading-relaxed italic pr-4">
                    {s}
                  </li>
                ))}
              </ul>
            </Section>

            <div className="pt-16 border-t border-stone-200 print:hidden opacity-40 hover:opacity-100 transition-opacity">
              <p className="text-[10px] font-mono text-stone-400 uppercase leading-relaxed tracking-tighter">
                Soli Deo Gloria.<br />
                Built with precision & purpose.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-40 pt-16 border-t border-stone-200 text-center">
          <p className="text-[10px] font-mono text-stone-400 uppercase tracking-[0.4em] opacity-60 hover:opacity-100 transition-opacity cursor-default">
            © {new Date().getFullYear()} Marvin Ken P. Tumando · Panabo City, Philippines
          </p>
        </footer>
      </div>
    </div>
  );
}
