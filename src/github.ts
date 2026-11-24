const path = 'src/data/portfolio.json';
const headers = (token: string) => ({ Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' });
function endpoint(repo: string) { return `https://api.github.com/repos/${repo.split('/').map(encodeURIComponent).join('/')}/contents/${path}`; }
async function checked(response: Response) {
  const body = await response.json();
  if (!response.ok) throw new Error(body.message || 'GitHub request failed.');
  return body;
}
export async function readContent(repo: string, token: string) {
  const body = await checked(await fetch(endpoint(repo), { headers: headers(token), cache: 'no-store' }));
  const bytes = Uint8Array.from(atob(body.content.replace(/\s/g, '')), c => c.charCodeAt(0));
  return { data: JSON.parse(new TextDecoder().decode(bytes)), sha: body.sha as string };
}
export async function saveContent(repo: string, token: string, sha: string, data: unknown) {
  const bytes = new TextEncoder().encode(JSON.stringify(data, null, 2) + '\n');
  let binary = ''; bytes.forEach(byte => binary += String.fromCharCode(byte));
  const body = await checked(await fetch(endpoint(repo), { method: 'PUT', headers: { ...headers(token), 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'Update portfolio content', content: btoa(binary), sha }) }));
  return body.content.sha as string;
}
