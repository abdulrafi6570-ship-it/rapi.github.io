const nav=document.getElementById('navbar');window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>30));
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const portrait=document.querySelector('.portrait-frame'),wrap=document.querySelector('.portrait-wrap');if(portrait&&wrap){wrap.addEventListener('pointermove',e=>{const r=wrap.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;portrait.style.transform=`rotateY(${x*8}deg) rotateX(${-y*8}deg)`});wrap.addEventListener('pointerleave',()=>portrait.style.transform='')}
document.querySelectorAll('.about-card,.dest-card,.tool-logo,.podium-card').forEach(card=>{card.addEventListener('pointermove',e=>{if(innerWidth<992)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(800px) rotateY(${x*3}deg) rotateX(${-y*3}deg) translateY(-6px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
const sections=document.querySelectorAll('section[id]'),links=document.querySelectorAll('.nav-link');new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}),{rootMargin:'-40% 0px -50% 0px'});sections.forEach(s=>new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}),{rootMargin:'-40% 0px -50% 0px'}).observe(s));
document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{const menu=document.getElementById('nav');if(menu.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(menu).hide()}));


// Allow the numbered skill rows to open the same project gallery with keyboard input.
document.querySelectorAll('.skill-project-link').forEach(el => {
  el.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      el.click();
    }
  });
});

// ── Explore gallery (foto/video per project) ──────────────────────────────
// title    = judul project (samakan dengan judul di kartu)
// category = label kecil di atas judul
// items    = daftar foto/video, tiap item punya title + desc sendiri
const skillGalleries = {
  s1: {
    category: { id: '01 / PENGEMBANGAN WEB', en: '01 / WEB DEVELOPMENT' },
    title: { id: 'TOOLS & KEAHLIAN WEB', en: 'WEB TOOLS & SKILLS' },
    desc: { id: 'Teknologi yang biasa saya gunakan untuk membuat website, dashboard, dan sistem.', en: 'Technologies I use to build websites, dashboards, and systems.' },
    items: [
      { image: 'img/projects/9.jpg', title: 'HTML & CSS', desc: { id: 'Struktur halaman dan tampilan antarmuka.', en: 'Page structure and interface styling.' }, tags: ['HTML', 'CSS'] },
      { image: 'img/projects/10.jpg', title: 'JavaScript', desc: { id: 'Interaksi, animasi, dan logika pada website.', en: 'Interactions, animations, and website logic.' }, tags: ['JavaScript', 'UI'] },
      { image: 'img/projects/11.jpg', title: 'PHP & MySQL', desc: { id: 'Backend dan database untuk sistem dinamis.', en: 'Backend and database for dynamic systems.' }, tags: ['PHP', 'MySQL'] },
      { image: 'img/projects/12.jpg', title: 'Bootstrap 5', desc: { id: 'Membangun layout responsif dengan komponen siap pakai.', en: 'Responsive layouts with reusable components.' }, tags: ['Bootstrap', 'Responsive'] }
    ]
  },
  s2: {
    category: { id: '02 / EDITING KREATIF', en: '02 / CREATIVE EDITING' },
    title: { id: 'TOOLS & KEAHLIAN EDITING', en: 'EDITING TOOLS & SKILLS' },
    desc: { id: 'Tools dan kemampuan yang saya gunakan untuk video, motion, visual, dan thumbnail.', en: 'Tools and skills I use for video, motion, visual design, and thumbnails.' },
    items: [
      { image: 'img/projects/13.jpg', title: 'Editing Video', desc: { id: 'Memotong, menyusun, dan memberi ritme pada footage.', en: 'Cutting, arranging, and giving footage its rhythm.' }, tags: ['Video', 'Editing'] },
      { image: 'img/projects/14.jpg', title: 'Motion', desc: { id: 'Animasi teks dan elemen visual untuk membuat konten lebih hidup.', en: 'Animated text and visual elements to make content more dynamic.' }, tags: ['Motion', 'Animation'] },
      { image: 'img/projects/15.jpg', title: 'Desain Visual', desc: { id: 'Komposisi visual, typography, dan elemen pendukung.', en: 'Visual composition, typography, and supporting elements.' }, tags: ['Design', 'Visual'] },
      { image: 'img/projects/16.jpg', title: 'Thumbnail', desc: { id: 'Membuat thumbnail yang jelas dan menarik perhatian.', en: 'Creating clear and attention-grabbing thumbnails.' }, tags: ['Thumbnail', 'Creative'] }
    ]
  },
  s3: {
    category: { id: '03 / GAMING KOMPETITIF', en: '03 / COMPETITIVE GAMING' },
    title: { id: 'TOOLS & KEAHLIAN GAMING', en: 'GAMING TOOLS & SKILLS' },
    desc: { id: 'Pengalaman dan kemampuan yang saya gunakan saat bermain Mobile Legends secara kompetitif.', en: 'Experience and skills I use when playing Mobile Legends competitively.' },
    items: [
      { image: 'img/projects/3.jpg', title: 'Mobile Legends', desc: { id: 'Pengalaman bermain dan memahami mekanik permainan.', en: 'Gameplay experience and understanding of game mechanics.' }, tags: ['Mobile Legends', 'Game'] },
      { image: 'img/projects/6.jpg', title: 'Strategi', desc: { id: 'Membaca situasi dan menentukan langkah bersama tim.', en: 'Reading situations and deciding moves with the team.' }, tags: ['Strategy', 'Macro'] },
      { image: 'img/projects/3.jpg', title: 'Kerja Sama Tim', desc: { id: 'Koordinasi dan pembagian peran saat bermain bersama.', en: 'Coordination and role distribution while playing as a team.' }, tags: ['Teamwork', 'Role'] },
      { image: 'img/projects/6.jpg', title: 'Komunikasi', desc: { id: 'Komunikasi cepat untuk menjaga koordinasi permainan.', en: 'Fast communication to maintain team coordination.' }, tags: ['Communication', 'Team'] }
    ]
  }
};

const projectGalleries = {
  p1: {
    category: { id: 'Web / Pengembangan', en: 'Web / Development' },
    title: { id: 'Project Web Development', en: 'Web Development Projects' },
    items: [
      { type: 'image', src: 'img/projects/1.jpg',
        title: { id: 'Website & Dashboard', en: 'Website & Dashboard' },
        desc: { id: 'Contoh tampilan sementara untuk karya pengembangan web. Ganti foto ini dengan screenshot project aslimu.', en: 'Temporary showcase image for a web development project. Replace it with your real project screenshot.' } },
      { type: 'image', src: 'img/projects/4.jpg',
        title: { id: 'UI Sistem', en: 'System UI' },
        desc: { id: 'Placeholder sementara untuk project kedua di kategori pengembangan web.', en: 'Temporary placeholder for another web development project.' } }
    ]
  },
  p2: {
  category: { id: 'Kreatif / Editing', en: 'Creative / Editing' },
  title: { id: 'Project Editing Kreatif', en: 'Creative Editing Projects' },
  items: [
    {
      type: 'image',
      src: 'img/projects/2.jpg',
      title: { id: 'Captured Memories', en: 'Editing Result' },
      desc: {
        id: 'Karya ini merupakan editing foto bertema “Boyy Gang” yang mengangkat konsep persahabatan dan kenangan bersama. Menggunakan gaya scrapbook dengan dominasi warna biru, elemen kamera, Polaroid, tulisan dekoratif, dan foto kebersamaan untuk memberikan kesan nostalgic, playful, dan youthful.',
        en: 'Temporary image representing video editing, visual design, motion, and thumbnail work.'
      }
    },
    {
      type: 'image',
      src: 'img/projects/5.jpg',
      title: { id: 'Motion & Visual', en: 'Motion & Visual' },
      desc: {
        id: 'Placeholder sementara. Nanti tinggal ganti dengan hasil karya editing milikmu.',
        en: 'Temporary placeholder. Replace it with your own editing work later.'
      }
    },
    {
      type: 'image',
      src: 'img/projects/7.jpg',
      title: { id: 'Project Ketiga', en: 'Third Project' },
      desc: {
        id: 'Project editing tambahan dengan konsep visual kreatif dan modern.',
        en: 'Additional editing project with a creative and modern visual concept.'
      }
    }
  ]
},
 p3: {
  category: { id: 'Gaming Kompetitif', en: 'Competitive Gaming' },
  title: { id: 'Project Gaming Kompetitif', en: 'Competitive Gaming Projects' },
  items: [
    {
      type: 'image',
      src: 'img/projects/3.jpg',
      title: { id: 'Mobile Legends', en: 'Mobile Legends' },
      desc: {
        id: 'Foto sementara untuk dokumentasi gaming kompetitif dan pengalaman Mobile Legends.',
        en: 'Temporary image for competitive gaming and Mobile Legends experience.'
      }
    },
    {
      type: 'image',
      src: 'img/projects/6.jpg',
      title: { id: 'Team Play', en: 'Team Play' },
      desc: {
        id: 'Placeholder sementara untuk dokumentasi pertandingan atau tim.',
        en: 'Temporary placeholder for match or team documentation.'
      }
    },
    {
      type: 'image',
      src: 'img/projects/17.jpg',
      title: { id: 'Project Gaming', en: 'Gaming Project' },
      desc: {
        id: 'Dokumentasi tambahan project gaming kompetitif.',
        en: 'Additional competitive gaming project documentation.'
      }
    }
  ]
},
};

const translations = {
  id: {
    'page.title':'RAPP — Creative Developer',
    'nav.home':'Beranda','nav.about':'Tentang','nav.skills':'Tools & Keahlian','nav.work':'Karya / Project','nav.achievements':'Pencapaian','nav.journey':'Journey','nav.contact':'Kontak','nav.talk':'Ayo Ngobrol',
    'hero.available':'TERSEDIA UNTUK PROJECT KREATIF','hero.title':'ABDUL<br><em>RAFI</em><br>PROJECT',
    'hero.subtitle':'Saya mengubah ide menjadi <strong>pengalaman web</strong>, konten visual, dan karya kompetitif.',
    'hero.explore':'Lihat Karya Saya','hero.contact':'Hubungi Saya','hero.follow':'IKUTI','hero.online':'ONLINE / BERKARYA',
    'hero.portfolio':'PORTOFOLIO','hero.mainRole':'PERAN UTAMA','hero.role':'CREATIVE DEVELOPER','hero.scroll':'SCROLL UNTUK MENJELAJAH',
    'about.label':'01 / TENTANG SAYA','about.kicker':'SIAPA SAYA',
    'about.title':'',
    'about.desc':'Saya seorang programmer yang juga bergerak di dunia editing dan kompetisi Mobile Legends. Saya suka membuat sesuatu dari nol, mengutak-atik detail, lalu melihat hasilnya benar-benar bekerja.',
    'about.build.title':'MEMBANGUN','about.build.desc':'Website, sistem, dan eksperimen digital dengan fokus pada UI yang rapi.',
    'about.create.title':'BERKARYA','about.create.desc':'Editing video dan visual untuk menghasilkan konten yang punya karakter.',
    'about.compete.title':'BERKOMPETISI','about.compete.desc':'Pengalaman kompetitif Mobile Legends dan kerja sama tim.',
    'about.status':'OPEN TO CREATE','about.who':'TENTANG SAYA','about.identityTitle':'Programmer, editor, dan competitive player yang suka mengubah ide menjadi sesuatu yang bisa dilihat dan digunakan.','about.focusLabel':'YANG SAYA KERJAKAN','about.focus':'FOKUS UTAMA','about.web':'DEVELOPMENT','about.visual':'CREATIVE EDITING','about.game':'COMPETITIVE',
    'skills.label':'02 / KEAHLIAN','skills.kicker':'PERALATAN SAYA','skills.title':'TOOLS<br><span>&</span><br>KEAHLIAN.',
    'skills.desc':'Teknologi dan kemampuan yang biasa saya gunakan untuk mengubah ide menjadi hasil nyata.',
    'skills.web.title':'Pengembangan Web','skills.web.tools':'HTML · CSS · Bootstrap 5 · JavaScript · PHP · MySQL',
    'skills.edit.title':'Editing Kreatif','skills.edit.tools':'Editing Video · Desain Visual · Motion · Thumbnail',
    'skills.game.title':'Gaming Kompetitif','skills.game.tools':'Mobile Legends · Strategi · Kerja Sama Tim · Komunikasi',
    'work.label':'03 / KARYA PILIHAN','work.kicker':'PROJECT','work.title':'KARYA<br><span>PILIHAN.</span>',
    'work.desc':'Klik kartu untuk melihat galeri karya. Jelajahi setiap karya dan lihat detailnya secara lebih lengkap.','work.p1.cat':'WEB / PENGEMBANGAN','work.p1.title':'PROJECT WEBSITE',
    'work.p1.desc':'Ganti judul dan deskripsi project ini di index.html.','work.explore':'Lihat Sekarang',
    'work.p2.cat':'KREATIF / EDITING','work.p2.title':'PROJECT EDITING','work.p2.desc':'Karya editing atau creative work kamu.',
    'work.p3.cat':'LAINNYA / PROJECT','work.p3.title':'PRESTASI MLBB','work.p3.desc':'Tambahkan project lain sesuka kamu.',
    'work.video.label':'04 / VIDEO SHOWCASE','work.video.title':'TAMPILKAN PROSESNYA.','work.video.desc':'Masukkan video terbaik kamu ke <code>img/videos/1.mp4</code>.',
    'ach.label':'04 / PENCAPAIAN','ach.kicker':'DAFTAR JUARA','ach.title':'DAFTAR JUARA <span>TURNAMEN MLBB.</span>',
    'ach.desc':'Tiga pencapaian Mobile Legends yang bisa kamu lengkapi dengan nama turnamen, tahun, dan detail lainnya.',
    'ach.game':'MOBILE LEGENDS','ach.second':'JUARA 2','ach.first':'JUARA 1','ach.placeholder':'Nama turnamen / tahun',
    'now.label':'05 / SEKARANG','now.kicker':'CURRENTLY EXPLORING','now.live':'SEDANG DIPELAJARI','now.title':'Terus belajar, bereksperimen, dan memperluas cara saya membuat sesuatu.',
    'journey.label':'06 / PERJALANAN','journey.kicker':'MY JOURNEY','journey.title':'BELAJAR.<br><span>MEMBUAT.</span><br>BERKEMBANG.','journey.desc':'Perjalanan singkat tentang bagaimana minat saya berkembang dari visual, coding, sampai project dan kompetisi.','journey.2024.title':'Mulai mengeksplor editing kreatif','journey.2024.desc':'Belajar video editing, visual, motion, dan membuat konten dengan karakter sendiri.','journey.2025.title':'Masuk lebih dalam ke web development','journey.2025.desc':'Mulai membangun website, dashboard, sistem, dan bereksperimen dengan UI.','journey.2026.title':'Project, teknologi, dan kompetisi','journey.2026.desc':'Menggabungkan coding, kreativitas visual, serta pengalaman kompetitif menjadi portfolio yang terus berkembang.',
    'contact.label':'07 / KONTAK','contact.title':'PUNYA IDE?<br><em>YUK WUJUDKAN.</em>',
    'contact.desc':'Project, kolaborasi, editing, atau sekadar ngobrol soal teknologi.','contact.button':'HUBUNGI SAYA',
    'footer.role':'PROGRAMMER · EDITOR · PLAYER','footer.tagline':'Built with curiosity & caffeine.',
    'modal.photo':'Foto','modal.video':'Video','modal.previous':'Sebelumnya','modal.next':'Berikutnya','modal.close':'Tutup'
  },
  en: {
    'page.title':'RAPP — Creative Developer',
    'nav.home':'Home','nav.about':'About','nav.skills':'Tools & Skills','nav.work':'Work / Projects','nav.achievements':'Achievements','nav.journey':'Journey','nav.contact':'Contact','nav.talk':"Let's Talk",
    'hero.available':'AVAILABLE FOR CREATIVE PROJECTS','hero.title':'ABDUL<br><em>RAFI</em><br>PROJECT',
    'hero.subtitle':'I turn ideas into <strong>web experiences</strong>, visual content, and competitive work.',
    'hero.explore':'Explore My Work','hero.contact':'Contact Me','hero.follow':'FOLLOW','hero.online':'ONLINE / CREATING',
    'hero.portfolio':'PORTFOLIO','hero.mainRole':'MAIN ROLE','hero.role':'CREATIVE DEVELOPER','hero.scroll':'SCROLL TO EXPLORE',
    'about.label':'01 / ABOUT ME','about.kicker':'WHO I AM',
    'about.title':'',
    'about.desc':'I am a programmer who also works in editing and competitive Mobile Legends. I like building things from scratch, tweaking the details, and seeing the final result actually work.',
    'about.build.title':'BUILD','about.build.desc':'Websites, systems, and digital experiments with a focus on clean UI.',
    'about.create.title':'CREATE','about.create.desc':'Video editing and visual work that gives content its own character.',
    'about.compete.title':'COMPETE','about.compete.desc':'Competitive Mobile Legends experience and teamwork.',
    'about.status':'OPEN TO CREATE','about.who':'ABOUT ME','about.identityTitle':'A programmer, editor, and competitive player who likes turning ideas into things people can see and use.','about.focusLabel':'WHAT I DO','about.focus':'MAIN FOCUS','about.web':'DEVELOPMENT','about.visual':'CREATIVE EDITING','about.game':'COMPETITIVE',
    'skills.label':'02 / SKILLS','skills.kicker':'MY TOOLKIT','skills.title':'TOOLS<br><span>&</span><br>SKILLS.',
    'skills.desc':'The technologies and skills I use to turn ideas into real results.',
    'skills.web.title':'Web Development','skills.web.tools':'HTML · CSS · Bootstrap 5 · JavaScript · PHP · MySQL',
    'skills.edit.title':'Creative Editing','skills.edit.tools':'Video Editing · Visual Design · Motion · Thumbnails',
    'skills.game.title':'Competitive Gaming','skills.game.tools':'Mobile Legends · Strategy · Teamwork · Communication',
    'work.label':'03 / SELECTED WORK','work.kicker':'PROJECTS','work.title':'SELECTED<br><span>WORK.</span>',
    'work.desc':'Put your work inside <code>img/projects/</code>.','work.p1.cat':'WEB / DEVELOPMENT','work.p1.title':'YOUR PROJECT ONE',
    'work.p1.desc':'Change this project title and description in index.html.','work.explore':'Explore Now',
    'work.p2.cat':'CREATIVE / EDITING','work.p2.title':'YOUR PROJECT TWO','work.p2.desc':'Your editing or creative work.',
    'work.p3.cat':'OTHER / PROJECT','work.p3.title':'YOUR PROJECT THREE','work.p3.desc':'Add another project however you like.',
    'work.video.label':'04 / VIDEO SHOWCASE','work.video.title':'SHOW THE PROCESS.','work.video.desc':'Put your best video in <code>img/videos/1.mp4</code>.',
    'ach.label':'04 / ACHIEVEMENTS','ach.kicker':'TOURNAMENT WINNERS','ach.title':'MLBB TOURNAMENT <span>WINNERS.</span>',
    'ach.desc':'Three Mobile Legends achievements you can fill in with the tournament name, year, and other details.',
    'ach.game':'MOBILE LEGENDS','ach.second':'2ND PLACE','ach.first':'1ST PLACE','ach.placeholder':'Tournament name / year',
    'now.label':'05 / NOW','now.kicker':'CURRENTLY EXPLORING','now.live':'LEARNING NOW','now.title':'Always learning, experimenting, and expanding the way I create things.',
    'journey.label':'06 / JOURNEY','journey.kicker':'MY JOURNEY','journey.title':'LEARN.<br><span>BUILD.</span><br>GROW.','journey.desc':'A short journey showing how my interests grew from visuals and coding into projects and competition.','journey.2024.title':'Started exploring creative editing','journey.2024.desc':'Learning video editing, visuals, motion, and building content with my own character.','journey.2025.title':'Went deeper into web development','journey.2025.desc':'Started building websites, dashboards, systems, and experimenting with UI.','journey.2026.title':'Projects, technology, and competition','journey.2026.desc':'Combining code, visual creativity, and competitive experience into an evolving portfolio.',
    'contact.label':'07 / CONTACT','contact.title':'HAVE AN IDEA?<br><em>LET\'S BUILD IT.</em>',
    'contact.desc':'Projects, collaborations, editing, or just a chat about technology.','contact.button':'GET IN TOUCH',
    'footer.role':'PROGRAMMER · EDITOR · PLAYER','footer.tagline':'Built with curiosity & caffeine.',
    'modal.photo':'Photo','modal.video':'Video','modal.previous':'Previous','modal.next':'Next','modal.close':'Close'
  }
};

// ── Language system ─────────────────────────────────────────────────────
let currentLang = localStorage.getItem('portfolioLang') || 'id';

function t(key){
  return (translations[currentLang] && translations[currentLang][key]) || translations.id[key] || key;
}


let heroTypingTimer = null;
let heroTypingToken = 0;
function typeHeroSubtitle(){
  const target = document.querySelector('.hero-type-text');
  if(!target) return;
  const token = ++heroTypingToken;
  clearTimeout(heroTypingTimer);
  const source = document.createElement('div');
  source.innerHTML = t('hero.subtitle');
  const text = source.textContent || source.innerText || '';
  target.textContent = '';
  let i = 0;
  const speed = 34;
  const step = () => {
    if(token !== heroTypingToken) return;
    target.textContent = text.slice(0, i);
    if(i < text.length){
      i += 1;
      heroTypingTimer = setTimeout(step, speed);
    }
  };
  step();
}

function applyLanguage(lang){
  currentLang = translations[lang] ? lang : 'id';
  localStorage.setItem('portfolioLang', currentLang);
  document.documentElement.lang = currentLang;
  document.title = t('page.title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });

  // Hero subtitle: typewriter effect. It restarts cleanly when the language changes.
  typeHeroSubtitle();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  const open = document.querySelector('#exploreModal.show');
  if (open && typeof refreshGalleryLanguage === 'function') refreshGalleryLanguage();
  const skillOpen = document.querySelector('#skillGalleryModal.show');
  if (skillOpen && typeof refreshSkillGalleryLanguage === 'function') refreshSkillGalleryLanguage();
}

// Event delegation: tombol bahasa tetap berfungsi walau navbar Bootstrap berubah.
document.addEventListener('click', (event) => {
  const btn = event.target.closest('.lang-btn');
  if (!btn) return;
  event.preventDefault();
  event.stopPropagation();
  applyLanguage(btn.dataset.lang);
});

applyLanguage(currentLang);

(function(){
  const modalEl = document.getElementById('skillGalleryModal');
  if (!modalEl) return;
  const titleEl = document.getElementById('skillGalleryTitle');
  const categoryEl = document.getElementById('skillGalleryCategory');
  const descEl = document.getElementById('skillGalleryDesc');
  const countEl = document.getElementById('skillGalleryCount');
  const gridEl = document.getElementById('skillGalleryGrid');

  function val(value){ return typeof value === 'object' ? (value[currentLang] || value.id || '') : value; }
  function render(data){
    if (!data) return;
    categoryEl.textContent = val(data.category);
    titleEl.textContent = val(data.title);
    descEl.textContent = val(data.desc);
    countEl.textContent = String(data.items.length).padStart(2,'0') + ' ITEMS';
    gridEl.innerHTML = data.items.map((item, i) => `
      <article class="skill-gallery-card" tabindex="0">
        <div class="skill-card-image"><img src="${item.image}" alt="${item.title}" loading="lazy"><span>${String(i+1).padStart(2,'0')}</span></div>
        <div class="skill-card-body">
          <h3>${item.title}</h3>
          <p>${val(item.desc)}</p>
          <div class="skill-card-tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        </div>
      </article>`).join('');
  }

  modalEl.addEventListener('show.bs.modal', e => {
    const key = e.relatedTarget?.getAttribute('data-skill');
    render(key ? skillGalleries[key] : null);
  });
  window.refreshSkillGalleryLanguage = () => {
    const key = modalEl.dataset.skillKey;
    if (key) render(skillGalleries[key]);
  };
  modalEl.addEventListener('show.bs.modal', e => {
    modalEl.dataset.skillKey = e.relatedTarget?.getAttribute('data-skill') || '';
  });
})();

(function(){
  const modalEl = document.getElementById('exploreModal');
  if (!modalEl) return;
  const $ = id => document.getElementById(id);
  const mediaWrap = $('fanMediaWrap'), imgEl = $('fanMediaImg'), vidEl = $('fanMediaVideo');
  const thumbsEl = $('fanThumbs'), counterEl = $('fanCounter');
  const prevBtn = $('fanPrev'), nextBtn = $('fanNext');
  const catEl = $('fanCat'), projEl = $('fanProject');
  const captionEl = $('fanCaption'), typeEl = $('fanType'), titleEl = $('fanTitle'), descEl = $('fanDesc');
  const animEls = modalEl.querySelectorAll('.fan-anim');

  let gallery = [];
  let index = 0;
  let timer = null;

  // isi konten (media + caption) tanpa animasi
  function paint(item){
    if (!item) return;
    const itemTitle = typeof item.title === 'object' ? item.title[currentLang] : item.title;
    const itemDesc = typeof item.desc === 'object' ? item.desc[currentLang] : item.desc;
    if (item.type === 'video') {
      vidEl.src = item.src;
      if (item.poster) vidEl.poster = item.poster;
      vidEl.classList.remove('d-none');
      imgEl.classList.add('d-none');
      vidEl.load();
    } else {
      imgEl.src = item.src;
      imgEl.alt = itemTitle || '';
      imgEl.classList.remove('d-none');
      vidEl.classList.add('d-none');
      vidEl.pause();
    }
    typeEl.innerHTML = item.type === 'video'
      ? '<i class="bi bi-play-circle"></i> ' + t('modal.video')
      : '<i class="bi bi-image"></i> ' + t('modal.photo');
    titleEl.textContent = itemTitle || '';
    descEl.textContent = itemDesc || '';
    captionEl.hidden = !(itemTitle || itemDesc);
  }

  function updateMeta(){
    counterEl.textContent = gallery.length ? (index + 1) + ' / ' + gallery.length : '';
    thumbsEl.querySelectorAll('.fan-thumb').forEach((t, i) => t.classList.toggle('active', i === index));
  }

  // dir: 1 = next (masuk dari kanan), -1 = prev (masuk dari kiri)
  function renderMedia(dir){
    const item = gallery[index];
    if (!item) return;
    clearTimeout(timer);
    modalEl.style.setProperty('--dir', dir || 1);
    updateMeta();
    vidEl.pause();
    animEls.forEach(el => el.classList.add('is-out'));          // 1) keluar
    timer = setTimeout(() => {
      paint(item);                                              // 2) ganti isi
      animEls.forEach(el => { el.classList.remove('is-out'); el.classList.add('is-pre'); });
      void modalEl.offsetWidth;                                 // reflow
      animEls.forEach(el => el.classList.remove('is-pre'));     // 3) masuk (berurutan)
    }, 220);
  }

  function renderThumbs(){
    thumbsEl.innerHTML = '';
    gallery.forEach((item, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'fan-thumb' + (i === index ? ' active' : '');
      const thumbTitle = typeof item.title === 'object' ? item.title[currentLang] : item.title;
      btn.title = thumbTitle || '';
      btn.setAttribute('aria-label', thumbTitle || 'Media ' + (i + 1));
      if (item.type === 'video') {
        btn.innerHTML = '<video src="' + item.src + '" muted></video><i class="bi bi-play-fill"></i>';
      } else {
        btn.innerHTML = '<img src="' + item.src + '" alt="">';
      }
      btn.addEventListener('click', () => {
        if (i === index) return;
        const dir = i > index ? 1 : -1;
        index = i;
        renderMedia(dir);
      });
      thumbsEl.appendChild(btn);
    });
  }

  function go(delta){
    if (gallery.length < 2) return;
    index = (index + delta + gallery.length) % gallery.length;
    renderMedia(delta);
  }

  function refreshGalleryLanguage(){
    const key = modalEl.dataset.projectKey;
    const data = key ? projectGalleries[key] : null;
    if (!data) return;
    catEl.textContent = typeof data.category === 'object' ? data.category[currentLang] : data.category;
    projEl.textContent = typeof data.title === 'object' ? data.title[currentLang] : data.title;
    renderThumbs();
    paint(gallery[index]);
    updateMeta();
  }

  modalEl.addEventListener('show.bs.modal', (e) => {
    const trigger = e.relatedTarget;
    const key = trigger ? trigger.getAttribute('data-project') : null;
    const data = key ? projectGalleries[key] : null;
    modalEl.dataset.projectKey = key || '';
    gallery = data ? data.items : [];
    catEl.textContent = data ? (typeof data.category === 'object' ? data.category[currentLang] : data.category) : '';
    projEl.textContent = data ? (typeof data.title === 'object' ? data.title[currentLang] : data.title) : '';
    const glowVal = trigger ? trigger.style.getPropertyValue('--glow').trim() : '';
    modalEl.style.setProperty('--glow', glowVal || '139,108,255');
    modalEl.style.setProperty('--dir', 1);
    index = 0;
    clearTimeout(timer);
    renderThumbs();
    updateMeta();
    paint(gallery[0]);
    // sembunyikan dulu, animasi masuk jalan setelah popup terbuka
    animEls.forEach(el => { el.classList.remove('is-out'); el.classList.add('is-pre'); });
  });

  modalEl.addEventListener('shown.bs.modal', () => {
    void modalEl.offsetWidth;
    animEls.forEach(el => el.classList.remove('is-pre'));
  });

  modalEl.addEventListener('hidden.bs.modal', () => { clearTimeout(timer); vidEl.pause(); });
  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));
})();
// Dynamic-island style navbar: subtle focus/hover state without changing navigation behavior.
(function(){
  const dynamicNav=document.getElementById('navbar');
  if(!dynamicNav) return;
  dynamicNav.addEventListener('pointerenter',()=>dynamicNav.classList.add('nav-focus'));
  dynamicNav.addEventListener('pointerleave',()=>dynamicNav.classList.remove('nav-focus'));
})();

// Soft reveal animation: respects reduced-motion preferences.
(function(){
  const items=document.querySelectorAll('.section-top,.big-title,.large-muted,.about-card,.skill-line,.tool-logo,.dest-card,.video-feature,.podium-card,.identity-panel,.now-card,.timeline-item,.contact-inner');
  items.forEach(el=>el.classList.add('reveal-item'));
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){items.forEach(el=>el.classList.add('is-visible'));return;}
  const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -50px'});
  items.forEach(el=>obs.observe(el));
})();
