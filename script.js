/*
  ============================
  PERSONAL WEBSITE CONFIG
  Edit only this object first.
  ============================
*/
const SITE = {
  name: "Tohmid hossain",
  initials: "TH",
  role: "Web Developer",
  email: "tohomid20@gmail.com",
  bio: "Discipline is the foundation of success. I believe in learning, improving and building something meaningful every day.",
  about: "I’m Tohmid Hasan, a web development enthusiast focused on learning, creating and improving every day. I believe that discipline, consistency and continuous learning are the keys to turning goals into real achievements.",
  contactText: "Whether it's a project, collaboration or just a friendly hello.",
  typingWords: ["Developer", "Creator", "Tech Enthusiast", "Problem Solver"],

  facts: [
    {icon:"⌂", label:"Location", value:"Joypurhat, Rajshahi, Bangladesh"},
    {icon:"⌘", label:"Focus", value:"Web Development"},
    {icon:"✦", label:"Status", value:"Building & Growing"},
    {icon:"◎", label:"Website", value:"Personal Website"}
  ],

  socials: [
    {name:"Facebook", url:"https://www.facebook.com/share/19AfvgmGGS/", icon:"facebook"},
    {name:"Instagram", url:"https://www.instagram.com/tohmidhossaia?stkn=MTk3aWRvdnpsNzZkMQ==", icon:"instagram"},
    {name:"YouTube", url:"https://youtube.com/@tohmidhasan-mc3xk", icon:"youtube"},
    {name:"Telegram", url:"https://t.me/Tohomid1", icon:"telegram"},
  ],

  links: [
    {name:"Facebook", description:"Connect with me on Facebook", url:"https://www.facebook.com/share/19AfvgmGGS/", icon:"facebook"},
    {name:"Instagram", description:"Photos, updates and stories", url:"https://www.instagram.com/tohmidhossaia?stkn=MTk3aWRvdnpsNzZkMQ==", icon:"instagram"},
    {name:"YouTube", description:"Videos and tutorials", url:"https://youtube.com/@tohmidhasan-mc3xk", icon:"youtube"},
    {name:"Telegram", description:"Join my channel or community", url:"https://t.me/Tohomid1", icon:"telegram"},
  ],

  projects: [
    {tag:"Website", name:"Personal Website", description:"A fast, responsive home for my profile and links.", url:"#"},
    {tag:"Web App", name:"Coming Soon", description:"New projects and web experiments will be added here soon.", url:"#"},
    {tag:"Experiment", name:"Future Projects", description:"More projects, experiments and creations are coming soon.", url:"#"}
  ]
};

const ICONS = {
  facebook:`<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg>`,
  instagram:`<svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.5 6A1.5 1.5 0 1 1 16 7.5 1.5 1.5 0 0 1 17.5 6Z"/></svg>`,
  youtube:`<svg viewBox="0 0 24 24"><path d="M23 12s0-4-1-5-2.1-1.1-3.2-1.2C16.5 5.5 12 5.5 12 5.5s-4.5 0-6.8.3C4.1 5.9 3 6 2 7s-1 5-1 5 0 4 1 5 2.1 1.1 3.2 1.2c2.3.3 6.8.3 6.8.3s4.5 0 6.8-.3C19.9 18.1 21 18 22 17s1-5 1-5ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg>`,
  telegram:`<svg viewBox="0 0 24 24"><path d="M21.8 4.3 18.7 19c-.2 1-1 1.2-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9-8.1c.4-.4-.1-.6-.6-.2L6.3 12.8l-4.8-1.5c-1-.3-1-1 .2-1.5L20.5 3c.9-.3 1.7.2 1.3 1.3Z"/></svg>`,
  github:`<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>`,
  linkedin:`<svg viewBox="0 0 24 24"><path d="M5 3.5A2.5 2.5 0 1 1 5 8a2.5 2.5 0 0 1 0-4.5ZM3 9h4v12H3V9Zm6 0h3.8v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9V9Z"/></svg>`
};

document.title = `${SITE.name} — Personal Website`;
document.getElementById("name").textContent = SITE.name;
document.getElementById("bio").textContent = SITE.bio;
document.getElementById("aboutText").textContent = SITE.about;
document.getElementById("contactText").textContent = SITE.contactText;
document.getElementById("footerRole").textContent = SITE.role;
document.getElementById("emailLink").href = `mailto:${SITE.email}`;
document.getElementById("copyright").textContent = `© ${new Date().getFullYear()} ${SITE.name}. Built with care.`;

document.getElementById("facts").innerHTML = SITE.facts.map(f => `
  <div class="fact reveal">
    <div class="fact-icon">${f.icon}</div>
    <small>${f.label}</small>
    <strong>${f.value}</strong>
  </div>`).join("");

function socialButton(s){
  return `<a class="social" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" title="${s.name}">${ICONS[s.icon] || "↗"}</a>`;
}
document.getElementById("heroSocials").innerHTML = SITE.socials.map(socialButton).join("");
document.getElementById("footerSocials").innerHTML = SITE.socials.map(socialButton).join("");

document.getElementById("linksGrid").innerHTML = SITE.links.map(l => `
  <a class="link-card reveal" href="${l.url}" target="_blank" rel="noopener noreferrer">
    <div class="link-top">
      <div class="link-icon">${ICONS[l.icon] || "↗"}</div>
      <div class="link-arrow">↗</div>
    </div>
    <h3>${l.name}</h3>
    <p>${l.description}</p>
  </a>`).join("");

document.getElementById("projectsGrid").innerHTML = SITE.projects.map((p,i) => `
  <a class="project-card reveal" href="${p.url}" target="_blank" rel="noopener noreferrer">
    <span class="project-number">0${i+1}</span>
    <div>
      <div class="project-tag">${p.tag}</div>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
    </div>
  </a>`).join("");

/* Typing effect */
const typing = document.getElementById("typing");
let wordIndex = 0, charIndex = 0, deleting = false;
function typeLoop(){
  const word = SITE.typingWords[wordIndex] || "";
  typing.textContent = deleting ? word.slice(0, --charIndex) : word.slice(0, ++charIndex);
  let delay = deleting ? 55 : 90;
  if(!deleting && charIndex === word.length){ delay = 1200; deleting = true; }
  if(deleting && charIndex === 0){ deleting = false; wordIndex = (wordIndex + 1) % SITE.typingWords.length; delay = 350; }
  setTimeout(typeLoop, delay);
}
typeLoop();

/* Mobile menu */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));

/* Theme */
const themeBtn = document.getElementById("themeBtn");
if(localStorage.getItem("theme") === "light") document.body.classList.add("light");
themeBtn.textContent = document.body.classList.contains("light") ? "☀" : "☾";
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  localStorage.setItem("theme", light ? "light" : "dark");
  themeBtn.textContent = light ? "☀" : "☾";
});

/* Header shadow/border */
window.addEventListener("scroll", () => {
  document.getElementById("header").classList.toggle("scrolled", window.scrollY > 15);
});

/* Reveal-on-scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
