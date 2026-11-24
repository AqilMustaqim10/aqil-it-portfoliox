import { useEffect, useState, type FormEvent } from 'react';
import Admin from './Admin';
import portfolioData from './data/portfolio.json';
export default function App() {
  const [content, setContent] = useState(portfolioData);
  const [admin, setAdmin] = useState(window.location.hash === '#admin');
  useEffect(() => { const onHash = () => setAdmin(window.location.hash === '#admin'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
  const { profile, caseStudies, experience, skillCategories, education, certifications, tools, platforms: currentPlatforms } = content;
  const [dark, setDark] = useState(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = 'Portfolio enquiry from ' + data.get('name');
    const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message');
    window.location.href = 'mailto:' + profile.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  if (admin) return <Admin data={content} onSaved={setContent} />;

  return (
    <div className={dark ? 'site dark' : 'site'}>
      <header className="header">
        <div className="header-inner">
        <a className="wordmark" href="#top" aria-label="Aqil, back to top">aq<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <button className="theme" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'dark' : 'light'} theme`}>{dark ? 'Dark mode' : 'Light mode'}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-top"><span>IT SUPPORT & OPERATIONS</span><span>? &nbsp; {new Date().getFullYear()}</span></div><div className="hero-display" aria-hidden="true">Portfolio</div>
          <div className="hero-main">
            <div><p className="eyebrow">Hello, I’m {profile.name}.</p><h1>IT that works.<br /><em>People first.</em></h1></div>
            <div className="hero-aside"><span className="asterisk">✳</span><p>I help people get back to work when technology gets in the way.</p><a className="text-link" href="#work">Explore my work <span>↓</span></a></div>
          </div>
          <div className="hero-bottom"><p>Technical support, network monitoring<br />& IT asset management.</p><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="work" className="work section" aria-labelledby="work-heading">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">THE WORK</p>
                <h2 id="work-heading">Selected<br /><em>work.</em></h2>
              </div>
              <p>A closer look at the practical work behind reliable day-to-day IT.</p>
            </div>
            <div className="project-list">
              {caseStudies.map((project, index) => (
                <details className="project" key={project.id}>
                  <summary>
                    <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="project-title">
                      <span className="category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.subtitle}</p>
                    </div>
                    <span className="project-toggle" aria-hidden="true">+</span>
                  </summary>
                  <div className="project-content">
                    <div>
                      <span className="small-label">THE SITUATION</span>
                      <p>{project.situation}</p>
                    </div>
                    <div>
                      <span className="small-label">MY ROLE</span>
                      <p>{project.role}</p>
                      {project.checksPerformed && <ul>{project.checksPerformed.map(check => <li key={check.title}><strong>{check.title}.</strong> {check.description}</li>)}</ul>}
                      {project.actions && <ul>{project.actions.map(action => <li key={action}>{action}</li>)}</ul>}
                      {project.nextStep && <p>{project.nextStep}</p>}
                      {project.outcome && <><span className="small-label">OUTCOME</span><p>{project.outcome}</p></>}
                    </div>
                  </div>
                </details>
              ))}
            </div>
            <p className="work-note">Select a project to see the details.</p>
          </div>
        </section>

        <section id="experience" className="experience section">
          <div className="wrap experience-grid"><div><p className="eyebrow">BACKGROUND</p><h2>The work<br /><em>behind the work.</em></h2><p className="intro">The best fix is one people can understand. I bring a calm, practical approach to troubleshooting, documentation, and the small details that keep an IT environment running.</p></div>
            <div className="experience-content"><div className="info-block"><h3>Experience</h3>{experience.map(item => <div className="role" key={item.id}><div className="role-top"><strong>{item.role}</strong><span>{item.period}</span></div><p>{item.company} · {item.location}</p><p>{item.description}</p></div>)}</div>
            <div className="info-block" id="skills"><h3>What I work with</h3><div className="skills-list">{skillCategories.map(cat => <div key={cat.title}><strong>{cat.title}</strong><p>{cat.skills.map(skill => skill.name).join(' / ')}</p></div>)}</div></div>
            <div className="info-block platform-block"><h3>Platforms I use & learn</h3><div className="platform-marquee" aria-label={'Platforms I use and learn: ' + currentPlatforms.map(platform => platform.name).join(', ')}><div className="platform-track">{[0, 1].map(copy => <div className="platform-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{currentPlatforms.map(platform => <div className="platform-card" key={platform.name}><img src={`https://www.google.com/s2/favicons?domain=${platform.domain}&sz=64`} alt="" width="32" height="32" /><span>{platform.name}</span></div>)}</div>)}</div></div></div>
            <div className="info-block"><h3>Education & learning</h3>{education.map(item => <p key={item.degree}><strong>{item.degree}</strong><br />{item.institution} · {item.period}</p>)}{certifications.map(item => <p key={item.name}><strong>{item.name}</strong><br />{item.issuer} · {item.year}</p>)}</div>
            <div className="info-block"><h3>Tools</h3><p>{tools.join(' / ')}</p></div></div>
          </div>
        </section>

        <section id="contact" className="contact section"><div className="wrap"><p className="eyebrow">GET IN TOUCH</p><div className="contact-grid"><h2>Let’s make<br /><em>things work.</em></h2><div><p>Have an opportunity or a question? I’d love to hear from you.</p><form className="contact-form" onSubmit={handleContactSubmit}><div className="contact-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required /></div><div className="contact-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div><div className="contact-field contact-message"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={3} required /></div><button className="contact-email" type="submit">Prepare email</button><p className="contact-hint">This opens your email app with your message ready to send.</p></form><div className="socials"><a href={profile.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a></div></div></div></div></section>
      </main>
      <footer className="footer wrap"><span>© {new Date().getFullYear()} {profile.name}.</span><span>IT SUPPORT / MALAYSIA</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
