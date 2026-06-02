import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Filter,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import profilePhoto from './assets/profile-photo.png';
import { certifications, education, experiences, profile, projects, skillGroups, stats, websiteSamples } from './profileData';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Websites', 'Contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');
  const [activeWebsiteCategory, setActiveWebsiteCategory] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const mailTo = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio Inquiry for Malakias Escasinas')}`;

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], []);
  const websiteCategories = useMemo(() => ['All', ...Array.from(new Set(websiteSamples.map((sample) => sample.category)))], []);

  const filteredProjects = projects.filter((project) => {
    const search = [project.name, project.category, project.description, ...project.stack].join(' ').toLowerCase();
    return (activeProjectCategory === 'All' || project.category === activeProjectCategory) && (!query || search.includes(query.toLowerCase()));
  });

  const filteredWebsiteSamples = websiteSamples.filter((sample) => activeWebsiteCategory === 'All' || sample.category === activeWebsiteCategory);

  const copyContact = async () => {
    await navigator.clipboard.writeText(`${profile.name}\n${profile.title}\n${profile.email}\n${profile.phone}\n${profile.portfolio}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const generateCvPdf = () => {
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const html = `
      <!doctype html>
      <html><head><title>${escapeHtml(profile.name)} - CV</title>
      <style>
        *{box-sizing:border-box} body{margin:0;padding:34px;font-family:Arial,sans-serif;color:#111827;line-height:1.45}.cv{max-width:850px;margin:0 auto}header{border-bottom:3px solid #0f172a;padding-bottom:18px;margin-bottom:22px}h1{margin:0 0 8px;font-size:32px}h2{margin:24px 0 10px;font-size:18px;border-bottom:1px solid #cbd5e1;padding-bottom:6px}h3{margin:0 0 4px;font-size:15px}p{margin:0 0 8px}.meta,.contact{color:#475569;font-size:12px}li{margin-bottom:5px}section{margin-bottom:14px;page-break-inside:avoid}
      </style></head><body><main class="cv">
      <header><h1>${escapeHtml(profile.name)}</h1><p><strong>${escapeHtml(profile.title)}</strong></p><p class="contact">${escapeHtml(profile.location)} | ${escapeHtml(profile.email)} | ${escapeHtml(profile.phone)}</p><p class="contact">Portfolio: ${escapeHtml(profile.portfolio)} | LinkedIn: ${escapeHtml(profile.linkedIn)}</p></header>
      <h2>Professional Summary</h2><p>${escapeHtml(profile.intro)}</p><p>${escapeHtml(profile.about)}</p><p>${escapeHtml(profile.dataStory)}</p>
      <h2>Technical Skills</h2>${skillGroups.map((group) => `<section><h3>${escapeHtml(group.title)}</h3><p>${group.skills.map(escapeHtml).join(' • ')}</p></section>`).join('')}
      <h2>Experience</h2>${experiences.map((exp) => `<section><h3>${escapeHtml(exp.role)}</h3><p class="meta"><strong>${escapeHtml(exp.company)}</strong> | ${escapeHtml(exp.location)} | ${escapeHtml(exp.period)}</p><ul>${exp.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>`).join('')}
      <h2>Projects</h2>${projects.map((project) => `<section><h3>${escapeHtml(project.name)}</h3><p class="meta">${escapeHtml(project.category)} | ${project.stack.map(escapeHtml).join(' • ')}</p><p>${escapeHtml(project.description)}</p></section>`).join('')}
      <h2>Education</h2><section><h3>${escapeHtml(education.degree)}</h3><p class="meta">${escapeHtml(education.school)} | ${escapeHtml(education.period)}</p></section>
      <h2>Certifications</h2><p>${certifications.map((cert) => `<a href="${escapeHtml(cert.url)}">${escapeHtml(cert.name)}</a>`).join(' • ')}</p>
      </main></body></html>`;

    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    if (!printWindow) return;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    window.setTimeout(() => printWindow.print(), 250);
  };

  return (
    <div className={`app-shell ${theme}-mode`}>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Go to top">
          <span>ME</span>
          <div>
            <strong>{profile.shortName}</strong>
            <small>Interactive Profile</small>
          </div>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow"><Sparkles size={16} /> Web Development • Data • SEO • Dashboards</p>
            <h1 className="hero-name">{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="primary-button" href={mailTo}><Mail size={18} /> Contact Me</a>
              <button className="ghost-button" onClick={generateCvPdf}><Download size={18} /> Generate CV PDF</button>
              <a className="ghost-button" href={profile.portfolio} target="_blank" rel="noreferrer">View Portfolio <ArrowUpRight size={18} /></a>
              <button className="ghost-button" onClick={copyContact}><Copy size={18} /> {copied ? 'Copied!' : 'Copy Contact'}</button>
            </div>
          </div>

          <aside className="hero-card reveal delay-one">
            <a className="profile-photo-link" href={mailTo} aria-label="Email Malakias Escasinas">
              <img className="profile-photo" src={profilePhoto} alt="Portrait of Malakias Escasinas" />
            </a>
            <div className="availability-block">
              <span className="availability-pill"><span className="availability-dot" /> Available for opportunities</span>
              <p>Web development, WordPress, dashboards, API/data workflows, SEO, and senior support.</p>
            </div>
            <div className="contact-grid">
              <span><Phone size={16} /> {profile.phone}</span>
              <span><Mail size={16} /> {profile.email}</span>
              <span><MapPin size={16} /> {profile.location}</span>
            </div>
          </aside>
        </section>

        <section className="stats-grid section-pad compact">
          {stats.map((stat) => <article className="stat-card reveal" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.detail}</p></article>)}
        </section>

        <section className="section-pad about-grid" id="about">
          <div className="section-heading about-heading">
            <p className="eyebrow">About</p>
            <h2>From custom WordPress builds to dashboard-driven business systems.</h2>
          </div>
          <div className="about-panels">
            {[profile.about, profile.dataStory].map((paragraph, index) => <article className="glass-panel reveal" key={paragraph}><span className="panel-number">0{index + 1}</span><p>{paragraph}</p></article>)}
          </div>
        </section>

        <section className="section-pad" id="skills">
          <div className="section-heading centered"><p className="eyebrow">Technical Stack</p><h2>Built around practical delivery, optimization, and reporting.</h2></div>
          <div className="skill-grid">
            {skillGroups.map((group) => <article className="skill-card reveal" key={group.title}><h3>{group.title}</h3><div className="chip-wrap">{group.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section-pad" id="experience">
          <div className="section-heading"><p className="eyebrow">Experience</p><h2>Professional background and measurable impact.</h2></div>
          <div className="experience-grid">
            {experiences.map((exp) => <article className="experience-card reveal" key={exp.company}><div className="experience-card-top"><BriefcaseBusiness size={30} /><div><h3>{exp.role}</h3><p>{exp.company} • {exp.location}</p><small>{exp.period}</small></div></div><ul>{exp.highlights.map((item) => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="section-pad" id="projects">
          <div className="section-heading project-heading"><div><p className="eyebrow">Projects</p><h2>Interactive project explorer.</h2></div><div className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search systems, dashboards, API..." /></div></div>
          <div className="filter-row"><Filter size={18} />{categories.map((category) => <button key={category} className={activeProjectCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveProjectCategory(category)}>{category}</button>)}</div>
          <div className="project-grid">{filteredProjects.map((project) => <article className="project-card reveal" key={project.name}><div className="project-card-top"><span>{project.category}</span><BarChart3 size={22} /></div><h3>{project.name}</h3><p>{project.description}</p><div className="chip-wrap compact-chips">{project.stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section-pad website-section" id="websites">
          <div className="section-heading project-heading"><div><p className="eyebrow">Website Samples</p><h2>Selected live websites grouped by platform and business purpose.</h2></div></div>
          <div className="filter-row"><Filter size={18} />{websiteCategories.map((category) => <button key={category} className={activeWebsiteCategory === category ? 'filter active' : 'filter'} onClick={() => setActiveWebsiteCategory(category)}>{category}</button>)}</div>
          <div className="website-grid">{filteredWebsiteSamples.map((sample) => <a className="website-card reveal" href={sample.url} target="_blank" rel="noreferrer" key={sample.url}><div className="website-card-top"><span>{sample.category}</span><ExternalLink size={16} /></div><h3>{sample.name}</h3><small>{new URL(sample.url).hostname.replace('www.', '')}</small><p>{sample.summary}</p></a>)}</div>
        </section>

        <section className="section-pad credential-grid">
          <article className="glass-panel reveal"><p className="eyebrow">Education</p><h3>{education.degree}</h3><p>{education.school}</p><span>{education.period}</span></article>
          <article className="glass-panel reveal"><p className="eyebrow">Certifications & Training</p><div className="cert-list">{certifications.map((item) => <a className="cert-link" key={item.name} href={item.url} target="_blank" rel="noreferrer">{item.name} <ExternalLink size={14} /></a>)}</div></article>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="contact-card reveal"><p className="eyebrow">Contact</p><h2>Let’s discuss how my skills align with your organization’s needs.</h2><p>My strength is turning business requirements into practical digital solutions—websites, dashboards, data tools, SEO-ready pages, and support systems.</p><div className="link-grid"><a href={mailTo}><Mail size={18} /> Email Me <ExternalLink size={15} /></a><button className="link-button" onClick={generateCvPdf}><Download size={18} /> Generate CV PDF</button><a href={profile.linkedIn} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn <ExternalLink size={15} /></a><a href={profile.portfolio} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> Portfolio <ExternalLink size={15} /></a></div></div>
        </section>
      </main>
    </div>
  );
}

export default App;
