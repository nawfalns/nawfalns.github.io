/* This file builds the page from content.js. You do not need to edit it. */
{
const P = PORTFOLIO;
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const has = v => Array.isArray(v) ? v.length > 0 : !!(v && String(v).trim());

const ICON = {
  in: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/></svg>',
  gh: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3zm2 2v.5l7 4.5 7-4.5V7zm0 2.9V17h14V9.9l-7 4.5z"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  ph: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M6 2h8l6 6v14H6zm7 1.5V9h5.5zM8 13h8v2H8zm0 4h8v2H8z"/></svg>'
};
const COLORS = ['#e3a50b', '#2767b1', '#1d7a45', '#3a6fb0', '#7a4fc0', '#c04f6a', '#0f8a8a', '#8a5a2b'];
const TOOLCOL = {'power bi':'#e3a50b', 'sql':'#2767b1', 'excel':'#1d7a45', 'python':'#3a6fb0', 'tableau':'#c04f6a'};
const colOf = t => TOOLCOL[String(t).toLowerCase()] || COLORS[(P.mainTools.indexOf(t) + 8) % 8] || '#7a4fc0';
const initials = n => n.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();

/* Turn any YouTube link into one that plays on the page */
const ytEmbed = url => {
  if (!has(url)) return '';
  const m = String(url).match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0` : '';
};
const videoBox = url => {
  const src = ytEmbed(url);
  return src ? `<div class="vid"><iframe src="${src}" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>` : '';
};

/* ---------- Hero ---------- */
document.title = `${P.name} | ${P.role}`;
$('logo').innerHTML = `${esc(P.name.split(' ')[0])}<span>.</span>`;
$('name').textContent = P.name;
$('role').textContent = P.role;
$('tagline').textContent = P.tagline;
$('opento').querySelector('span').textContent = P.openTo;
if (!has(P.openTo)) $('opento').remove();
$('dashname').textContent = has(P.introVideo) ? 'Meet me in 60 seconds' : 'Analyst toolkit';
$('dashrole').textContent = has(P.introVideo) ? 'A short introduction' : 'What I bring to a team';
$('avatar').innerHTML = has(P.photo) ? `<img class="photo" src="${esc(P.photo)}" alt="${esc(P.name)}">` : `<div class="av">${esc(initials(P.name))}</div>`;

let btns = `<a class="btn pri" href="#contact">Let's connect</a>`;
if (has(P.resume)) btns += `<a class="btn ghost" href="${esc(P.resume)}" target="_blank" rel="noopener">${ICON.doc}Resume</a>`;
if (has(P.linkedin)) btns += `<a class="btn ghost" href="${esc(P.linkedin)}" target="_blank" rel="noopener">${ICON.in}LinkedIn</a>`;
if (has(P.github)) btns += `<a class="btn ghost" href="${esc(P.github)}" target="_blank" rel="noopener">${ICON.gh}GitHub</a>`;
$('herobtns').innerHTML = btns;

const allSkills = [...P.keySkills, ...P.toolSkills, ...P.peopleSkills].length;
if (has(P.introVideo)) {
  $('heromedia').innerHTML = videoBox(P.introVideo);
} else {
  $('heromedia').innerHTML = `<div class="kpis">
      <div class="kpi"><small>Projects</small><b>${P.projects.length}</b></div>
      <div class="kpi"><small>Certificates</small><b>${P.certificates.length}</b></div>
      <div class="kpi"><small>Skills</small><b>${allSkills}</b></div>
    </div>
    <div class="fig" id="trend"><svg></svg></div>
    <p class="cap">Illustration: a KPI trend view, the kind of report I build in Power BI.</p>`;
  const s = document.querySelector('#trend svg');
  const vals = [42, 48, 45, 53, 58, 55, 63, 68, 66, 74, 79, 85];
  const draw = () => {
    const W = s.clientWidth, H = s.clientHeight; if (!W) return;
    const m = {l:14, r:14, t:26, b:22}, max = 95, n = vals.length;
    const x = i => m.l + i * (W - m.l - m.r) / (n - 1), y = v => m.t + (1 - v / max) * (H - m.t - m.b);
    const pts = vals.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`);
    const bw = Math.max(6, (W - m.l - m.r) / n * .45);
    let o = `<defs><linearGradient id="fa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2767b1" stop-opacity=".35"/><stop offset="1" stop-color="#2767b1" stop-opacity="0"/></linearGradient></defs>`;
    [.25, .5, .75].forEach(f => { o += `<line x1="${m.l}" x2="${W - m.r}" y1="${m.t + f * (H - m.t - m.b)}" y2="${m.t + f * (H - m.t - m.b)}" stroke="#dfe6ef"/>`; });
    vals.forEach((v, i) => { o += `<rect x="${x(i) - bw / 2}" y="${y(v * .6)}" width="${bw}" height="${H - m.b - y(v * .6)}" rx="3" fill="#cfe0f5"/>`; });
    o += `<path d="M${pts.join('L')}L${x(n - 1)},${H - m.b}L${x(0)},${H - m.b}Z" fill="url(#fa)"/><path d="M${pts.join('L')}" fill="none" stroke="#2767b1" stroke-width="3" stroke-linejoin="round"/>`;
    o += `<circle cx="${x(n - 1)}" cy="${y(vals[n - 1])}" r="6" fill="#f2c230" stroke="#fff" stroke-width="2"/>`;
    o += `<text x="${m.l}" y="16" font-size="13" font-weight="600" fill="#0f1a2b">Monthly KPI trend</text>`;
    const idx = W < 360 ? [0, 11] : [0, 3, 6, 9, 11], lab = W < 360 ? ['Jan', 'Dec'] : ['Jan', 'Apr', 'Jul', 'Oct', 'Dec'];
    idx.forEach((k, i) => { o += `<text x="${x(k)}" y="${H - 5}" font-size="12" fill="#5a6a80" text-anchor="${k === 0 ? 'start' : k === 11 ? 'end' : 'middle'}">${lab[i]}</text>`; });
    s.innerHTML = o;
  };
  const trendObserver = new ResizeObserver(draw); trendObserver.observe(s);
}

/* ---------- Tool cards ---------- */
$('toolcards').innerHTML = P.mainTools.map(t => {
  const n = P.projects.filter(p => p.tool === t || (p.tags || []).includes(t)).length;
  return `<div class="tool"><div class="ic" style="background:${colOf(t)}">${esc(({'power bi':'BI','excel':'XL','python':'PY','tableau':'TB'})[t.toLowerCase()] || t.replace(/[^A-Za-z]/g, '').slice(0, 3).toUpperCase())}</div><div><b>${esc(t)}</b><span>${n} project${n === 1 ? '' : 's'}</span></div></div>`;
}).join('');

/* ---------- About & skills ---------- */
$('abouttext').innerHTML = P.about.map(p => `<p>${esc(p)}</p>`).join('');
const tag = (a, cls = '') => a.map(s => `<span class="tag ${cls}">${esc(s)}</span>`).join('');
$('keyskills').innerHTML = tag(P.keySkills, 'k');
$('toolskills').innerHTML = tag(P.toolSkills);
$('softskills').innerHTML = tag(P.peopleSkills);

/* ---------- Projects ---------- */
const art = (i, col) => {
  let s = `<rect width="320" height="150" fill="${col}"/>`, r = 7 + i * 101;
  const rnd = () => (r = r * 16807 % 2147483647) % 1000 / 1000;
  const kind = i % 3;
  if (kind === 0) for (let k = 0; k < 6; k++) { const h = 40 + rnd() * 85; s += `<rect x="${40 + k * 42}" y="${135 - h}" width="26" height="${h}" rx="4" fill="#fff" opacity="${.55 + k * .08}"/>`; }
  if (kind === 1) { let d = 'M30 110'; for (let k = 1; k < 9; k++) d += ` L${30 + k * 32} ${110 - k * 8 - rnd() * 30}`; s += `<path d="${d}" fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><circle cx="286" cy="${40}" r="0"/>`; }
  if (kind === 2) for (let k = 0; k < 30; k++) { const g = k % 2; s += `<circle cx="${(g ? 170 : 60) + rnd() * 100}" cy="${(g ? 30 : 60) + rnd() * 70}" r="5" fill="${g ? '#f2c230' : '#fff'}" opacity=".9"/>`; }
  return `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${s}</svg>`;
};
let cur = 'All';
const renderCards = () => {
  const tools = ['All', ...new Set([...P.mainTools, ...P.projects.map(p => p.tool)])];
  $('filter').innerHTML = tools.map(k => `<button type="button" data-k="${esc(k)}" aria-pressed="${k === cur}">${esc(k)}</button>`).join('');
  $('cards').innerHTML = P.projects.map((p, i) => ({p, i})).filter(({p}) => cur === 'All' || p.tool === cur).map(({p, i}) => {
    const flags = [has(p.video) && 'Video', has(p.dashboard) && 'Live dashboard', has(p.code) && 'Code'].filter(Boolean);
    const thumb = has(p.images) ? `<img src="${esc(p.images[0])}" alt="">` : art(i, colOf(p.tool));
    return `<article class="card" tabindex="0" role="button" data-i="${i}" aria-label="Open ${esc(p.title)}">
      <div class="thumb">${thumb}<span class="badge">${esc(p.tool)}</span></div>
      <div class="body"><h3>${esc(p.title)}</h3><p class="where2">${esc(p.where)}</p><p class="where2">${esc(p.summary)}</p>
      ${flags.length ? `<div class="has">${flags.map(f => `<span>${f}</span>`).join('')}</div>` : ''}
      <div class="stack">${(p.tags || []).map(x => `<span>${esc(x)}</span>`).join('')}</div>
      <span class="see">See my work →</span></div></article>`;
  }).join('') || '<p class="empty">No projects with this tool yet.</p>';
};
$('filter').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; cur = b.dataset.k; renderCards(); });

const dlg = $('dlg');
const openProject = i => {
  const p = P.projects[i];
  let h = `<div class="dlg-head"><div><span class="badge" style="position:static;background:${colOf(p.tool)};color:#fff">${esc(p.tool)}</span><h3 id="dlgtitle" style="margin-top:10px">${esc(p.title)}</h3><p class="where2">${esc(p.where)}</p></div><button class="x" id="dlgx" aria-label="Close">×</button></div>`;
  if (has(p.summary)) h += `<p>${esc(p.summary)}</p>`;
  const links = [];
  if (has(p.code)) links.push(`<a href="${esc(p.code)}" target="_blank" rel="noopener">View code on GitHub</a>`);
  if (has(p.post)) links.push(`<a class="o" href="${esc(p.post)}" target="_blank" rel="noopener">LinkedIn post</a>`);
  if (has(p.video)) links.push(`<a class="o" href="${esc(p.video)}" target="_blank" rel="noopener">Watch on YouTube</a>`);
  if (links.length) h += `<div class="dlinks">${links.join('')}</div>`;
  if (has(p.video)) h += `<div><h4>Video walkthrough</h4>${videoBox(p.video)}</div>`;
  if (has(p.dashboard)) h += `<div><h4>Live dashboard</h4><div class="pbi"><iframe src="${esc(p.dashboard)}" title="Dashboard" allowfullscreen loading="lazy"></iframe></div></div>`;
  if (has(p.images)) h += `<div><h4>Screenshots</h4><div class="shots" id="shots">${p.images.map(src => `<img src="${esc(src)}" alt="Screenshot of ${esc(p.title)}" loading="lazy">`).join('')}</div>${p.images.length > 1 ? `<div class="shotnav"><button type="button" data-d="-1">← Previous</button><button type="button" data-d="1">Next →</button></div>` : ''}</div>`;
  if (has(p.results)) h += `<div><h4>Results</h4><ul>${p.results.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`;
  if (has(p.learnings)) h += `<div><h4>What I did and learned</h4><ul>${p.learnings.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`;
  if (has(p.codeSnippet)) h += `<div><h4>Code sample</h4><pre><code>${esc(p.codeSnippet)}</code></pre></div>`;
  if (has(p.tags)) h += `<div class="stack">${p.tags.map(x => `<span>${esc(x)}</span>`).join('')}</div>`;
  $('dlgbody').innerHTML = h;
  dlg.showModal();
};
$('cards').addEventListener('click', e => { const c = e.target.closest('.card'); if (c) openProject(+c.dataset.i); });
$('cards').addEventListener('keydown', e => { const c = e.target.closest('.card'); if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openProject(+c.dataset.i); } });
dlg.addEventListener('click', e => {
  if (e.target === dlg || e.target.id === 'dlgx') { dlg.close(); return; }
  const b = e.target.closest('[data-d]'); if (!b) return;
  const sh = $('shots'); sh.scrollBy({left: sh.clientWidth * +b.dataset.d, behavior: 'smooth'});
});
dlg.addEventListener('close', () => { $('dlgbody').innerHTML = ''; }); /* stops a playing video */
renderCards();

/* ---------- Experience & education ---------- */
$('jobs').innerHTML = P.experience.map(j => `<div class="job"><div class="when">${esc(j.dates)}<small>${esc(j.details)}</small></div><div><h3>${esc(j.role)} <span>· ${esc(j.company)}</span></h3><ul>${(j.points || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></div>`).join('');
$('edu').innerHTML = P.education.map(e => `<div class="box"><b>${esc(e.degree)}</b><p>${esc(e.school)} · ${esc(e.dates)}</p>${has(e.note) ? `<p>${esc(e.note)}</p>` : ''}${has(e.grade) ? `<span class="grade">${esc(e.grade)}</span>` : ''}</div>`).join('');

/* ---------- Certificates ---------- */
$('certs').innerHTML = P.certificates.map(c => `<article class="cert">
  ${has(c.image) ? `<a class="pic" href="${esc(c.link || c.image)}" target="_blank" rel="noopener"><img src="${esc(c.image)}" alt="${esc(c.title)} certificate" loading="lazy"></a>` : `<div class="face"><small>${esc(c.issuer)}</small><b>${esc(c.title)}</b></div>`}
  <div class="meta"><b style="color:var(--ink)">${esc(c.title)}</b><span>${esc(c.issuer)}</span><span>${esc(c.date)}</span>${has(c.link) ? `<a class="see" href="${esc(c.link)}" target="_blank" rel="noopener">Verify certificate →</a>` : ''}</div>
</article>`).join('') || '<p class="empty">Certificates coming soon.</p>';

/* ---------- Contact ---------- */
let w = '';
if (has(P.email)) w += `<div class="way">${ICON.mail}<div><small>Email</small><b>${esc(P.email)}</b></div><button id="copy" type="button">Copy</button></div>`;
if (has(P.phone)) w += `<div class="way">${ICON.ph}<div><small>Phone</small><b>${esc(P.phone)}</b></div></div>`;
if (has(P.linkedin)) w += `<a class="way" href="${esc(P.linkedin)}" target="_blank" rel="noopener">${ICON.in}<div><small>LinkedIn</small><b>${esc(P.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))}</b></div></a>`;
if (has(P.github)) w += `<a class="way" href="${esc(P.github)}" target="_blank" rel="noopener">${ICON.gh}<div><small>GitHub</small><b>${esc(P.github.replace(/^https?:\/\/(www\.)?/, ''))}</b></div></a>`;
if (has(P.location)) w += `<div class="way">${ICON.pin}<div><small>Location</small><b>${esc(P.location)}</b></div></div>`;
$('ways').innerHTML = w;
const cp = $('copy');
if (cp) cp.addEventListener('click', async () => { try { await navigator.clipboard.writeText(P.email); cp.textContent = 'Copied'; } catch (_) { cp.textContent = 'Select to copy'; } setTimeout(() => cp.textContent = 'Copy', 2000); });

$('copy-year').textContent = `© ${new Date().getFullYear()} ${P.name}`;
$('footrole').textContent = P.role;
}
