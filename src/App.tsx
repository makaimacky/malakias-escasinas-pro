import { useEffect, useMemo, useState } from 'react';
import profilePhoto from './assets/profile-photo.png';
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Copy,
  DatabaseZap,
  Download,
  ExternalLink,
  Filter,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Moon,
  Sun,
  Star,
  X,
} from 'lucide-react';
import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  stats,
  websiteSamples,
  gallerySamples,
} from './profileData';

const iconMap = {
  Code2,
  Globe2,
  BarChart3,
  ShieldCheck,
};

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Websites', 'Gallery', 'Contact'];

function App() {
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeWebsiteCategory, setActiveWebsiteCategory] = useState('All');
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('All');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  const websiteCategories = useMemo(
    () => ['All', ...Array.from(new Set(websiteSamples.map((sample) => sample.category)))],
    [],
  );

  const galleryCategories = useMemo(
    () => ['All', ...Array.from(new Set(gallerySamples.map((sample) => sample.category)))],
    [],
  );


  const filteredWebsiteSamples = useMemo(() => {
    return websiteSamples.filter((sample) => activeWebsiteCategory === 'All' || sample.category === activeWebsiteCategory);
  }, [activeWebsiteCategory]);

  const filteredGallerySamples = useMemo(() => {
    return gallerySamples.filter((sample) => activeGalleryCategory === 'All' || sample.category === activeGalleryCategory);
  }, [activeGalleryCategory]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesCategory = activeProjectCategory === 'All' || project.category === activeProjectCategory;
      const searchable = [project.name, project.category, project.description, ...project.stack, ...project.outcomes]
        .join(' ')
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeProjectCategory, query]);

  const copyContact = async () => {
    const contact = `${profile.name}\n${profile.title}\n${profile.email}\n${profile.phone}\n${profile.linkedIn}`;
    await navigator.clipboard.writeText(contact);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const mailTo = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio Inquiry for Malakias Escasinas')}`;

  const generateCvPdf = () => {
    const escapeHtml = (value: string) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const skillsHtml = skillGroups
      .map((group) => `<section><h3>${escapeHtml(group.title)}</h3><p>${group.skills.map(escapeHtml).join(' • ')}</p></section>`)
      .join('');

    const experienceHtml = experiences
      .map(
        (experience) => `
          <section>
            <h3>${escapeHtml(experience.role)}</h3>
            <p class="meta"><strong>${escapeHtml(experience.company)}</strong> | ${escapeHtml(experience.location)} | ${escapeHtml(experience.period)}</p>
            <p>${escapeHtml(experience.impact)}</p>
            <ul>${experience.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
          </section>
        `,
      )
      .join('');

    const projectsHtml = projects
      .map(
        (project) => `
          <section>
            <h3>${escapeHtml(project.name)}</h3>
            <p class="meta">${escapeHtml(project.category)} | ${project.stack.map(escapeHtml).join(' • ')}</p>
            <p>${escapeHtml(project.description)}</p>
          </section>
        `,
      )
      .join('');

    const html = `
      <!doctype html>
      <html>
        <head>
          <title>${escapeHtml(profile.name)} - CV</title>
          <style>
            * { box-sizing: border-box; }
            body { margin: 0; padding: 34px; font-family: Arial, sans-serif; color: #111827; line-height: 1.45; }
            .cv { max-width: 850px; margin: 0 auto; }
            header { border-bottom: 3px solid #0f172a; padding-bottom: 18px; margin-bottom: 22px; }
            h1 { margin: 0 0 8px; font-size: 32px; letter-spacing: -0.03em; }
            h2 { margin: 24px 0 10px; font-size: 18px; color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; }
            h3 { margin: 0 0 4px; font-size: 15px; color: #0f172a; }
            p { margin: 0 0 8px; }
            ul { margin: 8px 0 0 18px; padding: 0; }
            li { margin-bottom: 5px; }
            section { margin-bottom: 14px; page-break-inside: avoid; }
            .meta, .contact { color: #475569; font-size: 12px; }
            .summary { font-size: 14px; }
            @media print { body { padding: 22px; } }
          </style>
        </head>
        <body>
          <main class="cv">
            <header>
              <h1>${escapeHtml(profile.name)}</h1>
              <p><strong>${escapeHtml(profile.title)}</strong></p>
              <p class="contact">${escapeHtml(profile.location)} | ${escapeHtml(profile.email)} | ${escapeHtml(profile.phone)}</p>
              <p class="contact">Portfolio: ${escapeHtml(profile.portfolio)} | LinkedIn: ${escapeHtml(profile.linkedIn)}</p>
            </header>

            <h2>Professional Summary</h2>
            <p class="summary">${escapeHtml(profile.intro)}</p>
            <p class="summary">${escapeHtml(profile.about)}</p>
            <p class="summary">${escapeHtml(profile.dataStory)}</p>

            <h2>Technical Skills</h2>
            ${skillsHtml}

            <h2>Professional Experience</h2>
            ${experienceHtml}

            <h2>Projects</h2>
            ${projectsHtml}

            <h2>Education</h2>
            <section>
              <h3>${escapeHtml(education.degree)}</h3>
              <p class="meta">${escapeHtml(education.school)} | ${escapeHtml(education.period)}</p>
            </section>

            <h2>Certifications & Training</h2>
            <p>${certifications.map((cert) => cert.url ? `<a href="${escapeHtml(cert.url)}">${escapeHtml(cert.name)}</a>` : escapeHtml(cert.name)).join(' • ')}</p>
          </main>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    if (!printWindow) return;
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    window.setTimeout(() => printWindow.print(), 250);
  };

  return (
    <div className={`app-shell ${theme}-mode`}>
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Go to top">
          <span>ME</span>
          <div>
            <strong>{profile.shortName}</strong>
            <small>Interactive Profile</small>
          </div>
        </a>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow"><Sparkles size={16} /> Web Development • Data • SEO • Dashboards</p>
            <h1 className="hero-name">Malakias T. Escasinas</h1>
            <h2>{profile.title}</h2>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="primary-button" href={mailTo}>
                <Mail size={18} /> Contact Me
              </a>
              <button className="ghost-button" onClick={generateCvPdf}>
                <Download size={18} /> Generate CV PDF
              </button>
              <a className="ghost-button" href={profile.portfolio} target="_blank" rel="noreferrer">
                View Portfolio <ArrowUpRight size={18} />
              </a>
              <button className="ghost-button" onClick={copyContact}>
                <Copy size={18} /> {copied ? 'Copied!' : 'Copy Contact'}
              </button>
            </div>
          </div>

          <aside className="hero-card reveal delay-one">
            <a className="profile-photo-link" href={mailTo} aria-label="Email Malakias Escasinas"><img className="profile-photo" src={profilePhoto} alt="Portrait of Malakias Escasinas" /></a>
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
          {stats.map((stat) => (
            <article className="stat-card reveal" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="section-pad about-grid" id="about">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">About</p>
            <h2>From custom WordPress builds to dashboard-driven business systems.</h2>
          </div>
          <div className="about-panels">
            {[profile.about, profile.dataStory, profile.modernStack, profile.closing].map((paragraph, index) => (
              <article className="glass-panel reveal" key={paragraph}>
                <span className="panel-number">0{index + 1}</span>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad" id="skills">
          <div className="section-heading centered">
            <p className="eyebrow">Technical Stack</p>
            <h2>Built around practical delivery, optimization, and reporting.</h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => {
              const Icon = iconMap[group.icon as keyof typeof iconMap];
              return (
                <article className="skill-card reveal" key={group.title}>
                  <div className="skill-icon"><Icon size={26} /></div>
                  <h3>{group.title}</h3>
                  <div className="chip-wrap">
                    {group.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-pad experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Professional background and measurable impact.</h2>
          </div>

          <div className="experience-layout">
            <div className="timeline-tabs">
              {experiences.map((experience, index) => (
                <button
                  className={selectedExperience === index ? 'timeline-tab active' : 'timeline-tab'}
                  key={experience.company}
                  onClick={() => setSelectedExperience(index)}
                >
                  <span>{experience.period}</span>
                  <strong>{experience.company}</strong>
                </button>
              ))}
            </div>

            <article className="experience-card reveal">
              <div className="experience-card-top">
                <BriefcaseBusiness size={34} />
                <div>
                  <h3>{experiences[selectedExperience].role}</h3>
                  <p>{experiences[selectedExperience].company} • {experiences[selectedExperience].location}</p>
                </div>
              </div>
              <p className="impact-line">{experiences[selectedExperience].impact}</p>
              <ul>
                {experiences[selectedExperience].highlights.map((highlight) => (
                  <li key={highlight}><CheckCircle2 size={18} /> {highlight}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section-pad" id="projects">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Interactive project explorer.</h2>
            </div>
            <div className="search-box">
              <Search size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search systems, dashboards, API, WordPress..."
              />
            </div>
          </div>

          <div className="filter-row" aria-label="Project filters">
            <Filter size={18} />
            {categories.map((category) => (
              <button
                key={category}
                className={activeProjectCategory === category ? 'filter active' : 'filter'}
                onClick={() => setActiveProjectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card reveal" key={project.name}>
                <div className="project-card-top">
                  <span>{project.category}</span>
                  <DatabaseZap size={24} />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="chip-wrap compact-chips">
                  {project.stack.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
                <ul>
                  {project.outcomes.map((outcome) => <li key={outcome}><Star size={15} /> {outcome}</li>)}
                </ul>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="empty-state">No projects match your search. Try another keyword.</div>
          )}
        </section>

        <section className="section-pad website-section" id="websites">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">Website Samples</p>
              <h2>Selected live websites grouped by platform and business purpose.</h2>
            </div>
            <p className="website-note">Custom themes, WooCommerce, Shopify, SEO content sites, and hospitality web work.</p>
          </div>

          <div className="filter-row" aria-label="Website sample filters">
            <Filter size={18} />
            {websiteCategories.map((category) => (
              <button
                key={category}
                className={activeWebsiteCategory === category ? 'filter active' : 'filter'}
                onClick={() => setActiveWebsiteCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="website-grid">
            {filteredWebsiteSamples.map((sample) => {
              const hostname = new URL(sample.url).hostname.replace('www.', '');
              return (
                <a className="website-card reveal" href={sample.url} target="_blank" rel="noreferrer" key={sample.url}>
                  <div className="website-card-body">
                    <div className="website-card-top">
                      <span>{sample.category}</span>
                      <ExternalLink size={16} />
                    </div>
                    <h3>{sample.name}</h3>
                    <small>{hostname}</small>
                    <p>{sample.summary}</p>
                    <div className="chip-wrap compact-chips">
                      {sample.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="section-pad gallery-section" id="gallery">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">Drive Gallery</p>
              <h2>Visual samples from dashboard, website, and reporting work.</h2>
            </div>
            <p className="website-note">Clean clickable cards that open the source file in a new tab.</p>
          </div>

          <div className="filter-row" aria-label="Gallery sample filters">
            <Filter size={18} />
            {galleryCategories.map((category) => (
              <button
                key={category}
                className={activeGalleryCategory === category ? 'filter active' : 'filter'}
                onClick={() => setActiveGalleryCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredGallerySamples.map((sample) => (
              <a className="gallery-card reveal no-thumbnail" href={sample.url} target="_blank" rel="noreferrer" key={sample.id}>
                <div className="gallery-body">
                  <div className="gallery-card-head">
                    <span className="gallery-icon"><BarChart3 size={24} /></span>
                    <span className="gallery-badge clean">{sample.category}</span>
                  </div>
                  <div className="website-card-top">
                    <span>{sample.source}</span>
                    <ExternalLink size={16} />
                  </div>
                  <h3>{sample.title}</h3>
                  <p>{sample.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section-pad credential-grid">
          <article className="glass-panel reveal">
            <GraduationCap size={34} />
            <p className="eyebrow">Education</p>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <span>{education.period}</span>
          </article>

          <article className="glass-panel reveal">
            <CheckCircle2 size={34} />
            <p className="eyebrow">Certifications & Training</p>
            <div className="cert-list">
              {certifications.map((item) => item.url ? (
                <a className="cert-link" key={item.name} href={item.url} target="_blank" rel="noreferrer">
                  {item.name} <ExternalLink size={14} />
                </a>
              ) : (
                <span key={item.name}>{item.name}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">Contact</p>
            <h2>Let’s discuss how my skills align with your organization’s needs.</h2>
            <p>{profile.closing}</p>
            <div className="link-grid">
              <a href={mailTo}><Mail size={18} /> Email Me <ExternalLink size={15} /></a>
              <button className="link-button" onClick={generateCvPdf}><Download size={18} /> Generate CV PDF</button>
              <a href={profile.linkedIn} target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn <ExternalLink size={15} /></a>
              <a href={profile.portfolio} target="_blank" rel="noreferrer"><Globe2 size={18} /> Portfolio <ExternalLink size={15} /></a>
              <a href={profile.driveFolder} target="_blank" rel="noreferrer"><Download size={18} /> Drive Samples <ExternalLink size={15} /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
