const work = [
  ['Maestro, Hold On', 'Pleiades', 'September 2026', 'fiction', 'https://pleiadesmag.com/2025_fiction_prize_barrios/', 'Winner, 2025 Kinder/Crump Fiction Prize'],
  ['The Sign of Peace', 'Latino Book Review', 'July 2026', 'fiction', 'https://www.latinobookreview.com/magazine-2026.html'],
  ['Door Holders of the Bakery', 'Defiance & Dialogue (A Blunt Space)', 'July 2026', 'fiction', 'https://www.canva.com/design/DAHNiWuCxww/kJmwcFoaCx_BuSmIb__9oA/view?utm_content=DAHNiWuCxww&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbc33dc36d3#55'],
  ['The Act of Cleaning Up', 'About Place Journal', 'May 2026', 'fiction', 'https://aboutplacejournal.org/issues/the-ground-beneath-us/urban-tapestries/daniel-barrios/'],
  ['Our Injuries', 'The August Drift & Dribble Miscellany', 'March 2026', 'fiction', 'https://www.augustdriftanddribble.com/barrios'],
  ['Let Me See Your Face', 'Tendon Magazine', 'February 2026', 'fiction', 'https://hopkinsmedicalhumanities.org/tendon-magazine/issue-8-care/let-me-see-your-face/'],
  ['nobody wants to get deported', 'Pleiades', 'October 2024', 'fiction', 'https://pleiadesmag.com/issues/fall-2024/'],
  ['Neighbors', 'Action, Spectacle', 'Summer 2024', 'fiction', 'https://www.action-spectacle.com/summer-2024-part-ii/barrios'],
  ['A Good Impression', 'The Brooklyn Review', 'February 2024', 'fiction', 'https://thebrooklynreview.com/2024/02/09/a-good-impression-daniel-barrios/', 'Winner, 2023 Fiction Contest: This Time It’s Personal!'],
  ['The Angel and the Storm', 'Querencia Press', 'October 2023', 'fiction', 'https://www.querenciapress.com/querencia-autumn-2023'],
  ['Hormigas No Piensan', 'Forever Endeavour', 'June 2020', 'fiction', null, 'Online magazine now defunct'],
  ['War on the Poor', 'The Massachusetts Review', 'Winter 2026 · forthcoming', 'poetry', 'https://massreview.org/'],
  ['Sugar Donuts', 'Viction Magazine', 'Inaugural Issue · forthcoming', 'poetry', 'https://victionmag.com/'],
  ['[Que] Dios Te Bendiga', 'Viction Magazine', 'Inaugural Issue · forthcoming', 'poetry', 'https://victionmag.com/'],
  ['[We] Niggas Don’t Smile in the Bronx', 'Viction Magazine', 'Inaugural Issue · forthcoming', 'poetry', 'https://victionmag.com/'],
  ['Caribbean Sonnet', 'Latin@ Literatures', 'September 2026 · Issue 13', 'poetry', 'https://www.latinoliteratures.org/archives/2722'],
  ['Try to Stop Me, Werewolf Sonic', 'Naugatuck River Review', 'July 2026', 'poetry', 'https://naugatuckriverreview.org/buy/'],
  ['My Hispanic Characters Should Be Allowed to Speak', 'Assignment Magazine', 'January 2021', 'nonfiction', 'https://www.assignmentmag.com/onlineonly/my-hispanic-characters-should-be-allowed-to-speak', 'Reprinted in The B’K, Vol. 13, Issue 1 (2022)'],
  ["A Guide in the Jungle: A Writer's Letter to His Young Son", 'Assignment Magazine', '2021', 'nonfiction', 'https://www.assignmentmag.com/onlineonly/2021/3/31/a-guide-in-the-jungle-a-writers-letter-to-his-young-son']
];

const featured = [
  { title: 'Maestro, Hold On', img: 'pleiades.webp', description: 'Pleiades · Kinder/Crump Fiction Prize' },
  { title: 'The Sign of Peace', img: 'latino-book.webp', description: 'Latino Book Review · Fiction' },
  { title: 'Caribbean Sonnet', img: 'sonnet.webp', description: 'Latin@ Literatures · Poetry' },
  { title: 'Our Injuries', img: 'injuries.webp', description: 'The August Drift & Dribble Miscellany · Fiction' }
];

const biography = `
  <p>daniel barrios (he/él) is a Dominican/Puerto Rican writer from Staten Island, New York, now living in Dodge City, Kansas. He holds an MFA in Fiction Writing from Southern New Hampshire University, where he received a residency scholarship.</p>
  <p>His debut short story collection, <em>A Good Impression</em>, is forthcoming in March 2028 from Cornerstone Press, an imprint of the University of Wisconsin–Stevens Point. The collection was a finalist for the 2025 EastOver Prize for Debut Short Story Collections and the 2025 Black Lawrence Press Immigrant Writing Series.</p>
  <p>barrios is the winner of <em>Pleiades</em> magazine’s 2025 Kinder/Crump Fiction Prize and <em>The Brooklyn Review</em>’s 2023 Fiction Contest, <em>This Time It’s Personal!</em> His writing has appeared in <em>Pleiades</em>, <em>The Brooklyn Review</em>, <em>Latino Book Review</em>, <em>Latin@ Literatures</em>, and elsewhere.</p>
  <p>He has received support through residencies and fellowships with PREE Writing Studio (Kingston, Jamaica), Abode Press (virtual), PERIPLUS (virtual), Under the Volcano (Tepoztlán, Mexico), Sundress Academy for the Arts (Knoxville, Tennessee), and the Martha’s Vineyard Institute of Creative Writing (virtual).</p>
`;

const fragment = `daniel barrios is interested in the small moments people survive: a haircut, a joke between brothers, a long silence at a kitchen table. He writes to understand those moments a little better. Most of the time he is somewhere between New York and the Caribbean, listening to the splishes and splashes of seagulls cackling while hovering over ferries along the Hudson and mermaids swirling foreshore during shimmering overcasted beaches in Borikén.`;

const photoGallery = [
  {
    src: 'author-bw-clean.jpg',
    alt: 'Black-and-white author portrait of daniel barrios leaning in a hallway wearing a tie.',
    title: 'author portrait',
    note: 'Black-and-white portrait.'
  },
  {
    src: 'poets-passage.jpg',
    alt: 'daniel barrios reading into a microphone at The Poet’s Passage in Viejo San Juan, Puerto Rico.',
    title: 'reading at poet’s passage',
    note: 'Open mic at The Poet’s Passage · Viejo San Juan, Puerto Rico.'
  },
  {
    src: 'macaw-redacted.jpg',
    alt: 'Scarlet macaw perched on a rail on a city street.',
    title: 'macaw',
    note: 'Puerto Rico.'
  },
  {
    src: 'coqui.jpg',
    alt: 'Small brown coquí frog on rough pavement.',
    title: 'coquí',
    note: 'Puerto Rico.'
  },
  {
    src: 'market.jpg',
    alt: 'Produce market display with plantains, avocados, roots, and other vegetables.',
    title: 'market',
    note: 'A Caribbean market palette.'
  }
];

const news = [
  ['Kinder/Crump Fiction Prize', 'Pleiades · September 2026', 'Read about the winning fiction piece “Maestro, Hold On.”', 'https://pleiadesmag.com/2025_fiction_prize_barrios/'],
  ['Brooklyn Review — Judge’s Commentary', 'The Brooklyn Review · February 2024', 'Ernesto Mestre-Reed on “A Good Impression”: “a powerful lament about the transcendence we miss out on” when judging ourselves by others’ standards.', 'https://thebrooklynreview.com/2024/02/09/the-2023-brooklyn-review-short-story-prize-winners-this-time-its-personal/'],
  ['Hostos interview', 'Hostos Community College · 2026', 'Interview and institutional feature.', 'https://www.instagram.com/p/DeJ_kABDVPF/'],
  ['Abode Press literary reading', 'Recorded reading · begins at 39:24', 'Watch daniel’s portion of the Abode Press reading.', 'https://www.youtube.com/watch?v=waYggKya7CY&t=2364s']
];

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function external(url, label) {
  return url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${label || 'read'}</a>` : '';
}

function item(w) {
  return `<article class="entry"><h3>${w[4] ? external(w[4], `“${esc(w[0])}”`) : `“${esc(w[0])}”`}</h3><div class="meta"><em>${esc(w[1])}</em> · ${esc(w[2])}</div>${w[5] ? `<div class="small-note">${esc(w[5])}</div>` : ''}</article>`;
}

function section(title, body) {
  return `<section class="shell"><p class="kicker">daniel b. barrios</p><h1 class="page-title">${title}</h1>${body}</section>`;
}

function home() {
  return `
    <div class="divider-accent"></div>
    <div class="shell">
      <div class="home-hero hero-with-photo">
        <div>
          <p class="intro">${esc(fragment)}</p>
          <a class="arrow-link" href="#/about">read full biography</a>
        </div>
        <figure class="home-portrait-card">
          <img src="author-closeup.jpg" alt="Close portrait of daniel barrios wearing glasses and looking toward the camera." loading="lazy">
        </figure>
      </div>
      <div class="rule"></div>
      <section>
        <p class="kicker">in print & online</p>
        <h2 class="section-title">Selected publications</h2>
        <div class="featured-grid">
          ${featured.map(f => {
            const w = work.find(a => a[0] === f.title);
            return `<article class="featured-card"><a href="${esc(w[4])}" target="_blank" rel="noopener noreferrer"><img src="${f.img}" alt="Publication artwork associated with ${esc(f.title)}" loading="lazy"></a><h3>${esc(f.title)}</h3><div class="meta">${esc(f.description)}</div><a class="more" href="${esc(w[4])}" target="_blank" rel="noopener noreferrer">view publication</a></article>`;
          }).join('')}
        </div>
        <div class="link-strip">
          <a class="arrow-link" href="#/publications#fiction">view all fiction</a>
          <a class="arrow-link" href="#/publications#poetry">view all poetry</a>
          <a class="arrow-link" href="#/publications#nonfiction">view all nonfiction</a>
        </div>
      </section>
      <div class="rule"></div>
      <section>
        <p class="kicker">what's happening</p>
        <h2 class="section-title">News & updates</h2>
        ${newsCards()}
        <p style="margin-top:35px"><a class="arrow-link" href="#/news">see all updates</a></p>
      </section>
    </div>
  `;
}

function publications() {
  return section('Publications', `<nav class="anchor-nav" aria-label="Publication genres"><a href="#/publications#fiction">fiction</a><a href="#/publications#poetry">poetry</a><a href="#/publications#nonfiction">nonfiction</a></nav>${['fiction', 'poetry', 'nonfiction'].map(g => `<section class="genre" id="${g}"><h2>${g}</h2>${work.filter(w => w[3] === g).map(item).join('')}</section>`).join('')}`);
}

function books() {
  return section('Books', `<p class="kicker">current project</p><article class="book-panel"><p class="kicker">forthcoming · march 2028</p><h2>A Good Impression</h2><p><em>A collection of short stories</em></p><p>Cornerstone Press · University of Wisconsin–Stevens Point</p><div class="rule"></div><p>Finalist, 2025 EastOver Prize for Debut Short Story Collections</p><p>Finalist, 2025 Black Lawrence Press Immigrant Writing Series</p><p class="small-note">Cover and ordering information will be added when available.</p></article>`);
}

function teaching() {
  const jobs = [
    ['Dodge City Community College', 'English Faculty · 2026–Present'],
    ['Hostos Community College (CUNY)', 'Adjunct Professor of English · 2025–Present'],
    ['Yale University — Young Writers’ Workshop', 'Fiction Faculty (On-Site) · Summer 2026'],
    ['Kean University', 'Adjunct Professor of English · 2025'],
    ['St. Paul’s School of Nursing', 'Professor of English · 2023–2025']
  ];

  return section('Teaching', `<h2 class="section-title">Academic appointments</h2>${jobs.map(x => `<article class="entry"><h3>${esc(x[0])}</h3><p class="meta">${esc(x[1])}</p></article>`).join('')}<div class="rule"></div><h2 class="section-title">Student reviews</h2><p class="intro">External student feedback on Rate My Professors.</p>${[['St. Paul’s School of Nursing', '2940908'], ['Hostos Community College', '3131206'], ['Kean University', '3134221']].map(x => `<article class="entry teaching-line"><h3>${esc(x[0])}</h3>${external('https://www.ratemyprofessors.com/professor/' + x[1], 'view profile')}</article>`).join('')}`);
}

function newsCards() {
  return `<div class="news-grid">${news.map(n => `<article class="news-card"><p class="kicker">${esc(n[1])}</p><h3>${esc(n[0])}</h3><p class="meta">${esc(n[2])}</p>${external(n[3], 'view')}</article>`).join('')}</div>`;
}

function newsPage() {
  return section('News & updates', `<p class="intro">Readings, interviews, publications, prizes, and dispatches from the writing life.</p><div class="rule"></div>${newsCards()}`);
}

function photoCard(photo, variant = '') {
  const extra = variant ? ` ${variant}-photo-card` : '';
  return `<article class="photo-card${extra}"><img src="${photo.src}" alt="${esc(photo.alt)}" loading="lazy"><div class="photo-copy"><h3>${esc(photo.title)}</h3><p class="meta">${esc(photo.note)}</p></div></article>`;
}

function about() {
  return section('About', `
    <div class="about-top">
      <figure class="about-portrait-main">
        <img src="author-bw-clean.jpg" alt="Black-and-white author portrait of daniel barrios leaning against a hallway wall." loading="lazy">
      </figure>
      <div class="bio">${biography}</div>
    </div>
    <div class="rule"></div>
    <h2 class="section-title">Awards & honors</h2>
    <ul class="info-list">
      <li>2025 Kinder/Crump Fiction Prize — Winner, <em>Pleiades</em></li>
      <li>2023 Fiction Contest: This Time It’s Personal! — Winner, <em>The Brooklyn Review</em></li>
      <li>2025 EastOver Prize for Debut Short Story Collections — Finalist</li>
      <li>2025 Black Lawrence Press Immigrant Writing Series — Finalist</li>
      <li>2026 Veasna So Scholarship in Fiction, <em>The Adroit Journal</em> — Semifinalist</li>
    </ul>
    <div class="rule"></div>
    <h2 class="section-title">Fellowships & residencies</h2>
    <ul class="info-list">
      <li>PREE Writing Studio — Kingston, Jamaica</li>
      <li>Abode Press — Virtual</li>
      <li>PERIPLUS — Virtual</li>
      <li>Under the Volcano — Tepoztlán, Mexico</li>
      <li>Sundress Academy for the Arts — Knoxville, Tennessee</li>
      <li>Martha’s Vineyard Institute of Creative Writing — Virtual</li>
      <li>Southern New Hampshire University — Mountainview MFA program — Residency Scholarship</li>
    </ul>
    <div class="rule"></div>
    <h2 class="section-title">original photography</h2>
    <div class="swipe-gallery" aria-label="Original photography gallery">
      ${photoGallery.slice(1).map((p, i) => photoCard(p, i === 0 ? 'featured' : 'swipe')).join('')}
    </div>
  `);
}

function contact() {
  return section('Contact', `<p class="intro">For literary inquiries, readings, interviews, and collaborations.</p><div class="rule"></div><form class="contact-form" id="contactForm"><label>Name<input name="name" autocomplete="name" required></label><label>Email<input name="email" type="email" autocomplete="email" required></label><label>Subject<input name="subject" required></label><label>Message<textarea name="message" rows="7" required></textarea></label><button type="button" disabled title="Form delivery will be connected before publication">send message — coming soon</button></form><p class="form-note">This preview form is not connected to a message-delivery service yet. No messages are being collected. You can find me on ${external('https://www.instagram.com/daniel.b.barrios/', 'Instagram')} or ${external('https://x.com/pastelesaregood', 'X')}.</p>`);
}

const pages = { home, books, publications, teaching, news: newsPage, about, contact };
const site = document.getElementById('site');
const entrance = document.getElementById('entrance');

function showSite() {
  site.hidden = false;
  requestAnimationFrame(() => entrance.classList.add('dismissed'));
  sessionStorage.setItem('entered', 'yes');
  render();
}

function frontDoor() {
  sessionStorage.removeItem('entered');
  entrance.classList.remove('dismissed');
  window.scrollTo(0, 0);
  document.getElementById('enter').focus();
}

function render() {
  let route = (location.hash.match(/^#\/([^#]+)/) || [])[1] || 'home';
  if (!pages[route]) route = 'home';
  document.getElementById('view').innerHTML = pages[route]();
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#/' + route));
  document.getElementById('mainNav').classList.remove('open');
  document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
  const anchor = location.hash.split('#')[2];
  if (anchor) {
    setTimeout(() => document.getElementById(anchor)?.scrollIntoView(), 30);
  } else {
    window.scrollTo(0, 0);
  }
  document.title = `${route === 'home' ? 'daniel b. barrios' : route + ' | daniel b. barrios'}`;
}

document.getElementById('enter').addEventListener('click', showSite);
document.getElementById('returnEntrance').addEventListener('click', frontDoor);
document.getElementById('menuToggle').addEventListener('click', () => {
  const nav = document.getElementById('mainNav');
  const open = nav.classList.toggle('open');
  document.getElementById('menuToggle').setAttribute('aria-expanded', String(open));
});
window.addEventListener('hashchange', () => {
  if (!site.hidden) render();
});
document.getElementById('year').textContent = new Date().getFullYear();
if (sessionStorage.getItem('entered') === 'yes') {
  site.hidden = false;
  entrance.classList.add('dismissed');
  render();
}
