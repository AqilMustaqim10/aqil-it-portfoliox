import { useState } from 'react';
import type { FormEvent } from 'react';
import { readContent, saveContent } from './github';

const labels: Record<string, string> = { caseStudies: 'Selected work', experience: 'Experience', skillCategories: 'Skills', platforms: 'Platforms', education: 'Education', certifications: 'Learning & certifications', tools: 'Tools' };
const templates: Record<string, any> = {
  caseStudies: { id: '', title: '', subtitle: '', category: '', situation: '', role: '', actions: [], outcome: '', tags: [] },
  experience: { id: '', role: '', company: '', location: '', period: '', description: '', achievements: [], skillsUsed: [] },
  skillCategories: { title: '', iconName: 'FileText', description: '', skills: [] },
  platforms: { name: '', domain: '' }, education: { degree: '', institution: '', location: '', period: '', notes: '' },
  certifications: { name: '', issuer: '', year: '' }, tools: '', skills: { name: '', interviewTask: '' },
  checksPerformed: { title: '', description: '' }, actions: '', achievements: '', skillsUsed: '', tags: ''
};
const label = (key: string) => key.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase());
function Fields({ value, field, change }: { value: any; field: string; change: (v: any) => void }) {
  if (Array.isArray(value)) return <div className="editor-array">{value.map((item, i) => <div className="editor-item" key={i}><Fields field={field} value={item} change={v => change(value.map((x, n) => n === i ? v : x))} /><button type="button" onClick={() => change(value.filter((_, n) => n !== i))}>Remove</button></div>)}<button type="button" onClick={() => change([...value, field === 'caseStudies' || field === 'experience' ? { ...structuredClone(templates[field]), id: crypto.randomUUID() } : structuredClone(templates[field] ?? '')])}>Add {label(field)}</button></div>;
  if (value && typeof value === 'object') return <div className="editor-object">{Object.entries(value).map(([key, item]) => <div key={key}><label>{label(key)}</label><Fields field={key} value={item} change={v => change({ ...value, [key]: v })} /></div>)}</div>;
  if (typeof value === 'boolean') return <input type="checkbox" checked={value} onChange={e => change(e.target.checked)} />;
  return <textarea aria-label={label(field)} rows={String(value ?? '').length > 100 ? 4 : 2} value={value ?? ''} onChange={e => change(e.target.value)} />;
}
export default function Admin({ data, onSaved }: { data: any; onSaved: (data: any) => void }) {
  const [draft, setDraft] = useState(() => structuredClone(data));
  const [repo, setRepo] = useState(import.meta.env.VITE_GITHUB_REPOSITORY || '');
  const [sha, setSha] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  async function login(e: FormEvent) {
    e.preventDefault(); setBusy(true); setMessage('');
    try { const result = await readContent(repo.trim(), password); setDraft(result.data); setSha(result.sha); setToken(password); setPassword(''); }
    catch { setMessage('Could not connect. Check the repository name and token permissions.'); }
    finally { setBusy(false); }
  }
  async function save(e: FormEvent) {
    e.preventDefault(); setBusy(true); setMessage('');
    try { const nextSha = await saveContent(repo.trim(), token, sha, draft); setSha(nextSha); onSaved(draft); setMessage('Saved to GitHub. Your site will update after the Pages build completes.'); }
    catch { setMessage('Could not save. Check your connection and token permissions. If the file changed on GitHub, reconnect to load the latest version.'); }
    finally { setBusy(false); }
  }
  return <main className="editor"><div className="editor-head"><div><p className="eyebrow">PORTFOLIO EDITOR</p><h1>{token ? 'Update your content.' : 'Sign in to edit.'}</h1><p>{token ? 'Expand a section to edit, add, or remove entries. Save when finished.' : 'Connect to your GitHub repository using a fine-grained access token.'}</p></div><a href="#">View portfolio</a></div>{!token ? <form className="editor-save" onSubmit={login}><label htmlFor="repo">Repository (owner/name)</label><input id="repo" value={repo} onChange={e => setRepo(e.target.value)} required placeholder="username/repository" /><label htmlFor="password">GitHub access token</label><input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="off" /><button disabled={busy} type="submit">{busy ? 'Connecting...' : 'Connect'}</button><p role="status">{message}</p></form> : <form onSubmit={save}>{Object.entries(labels).map(([key, title]) => <details className="editor-section" key={key}><summary>{title}</summary><Fields field={key} value={draft[key]} change={v => setDraft({ ...draft, [key]: v })} /></details>)}<div className="editor-save"><button disabled={busy} type="submit">{busy ? 'Saving...' : 'Save changes'}</button>{' '}<button type="button" onClick={() => { setToken(''); setMessage(''); }}>Sign out</button><p role="status">{message}</p></div></form>}</main>;
}
