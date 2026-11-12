/* ============================================================
   JAMES MURPHY - PORTFOLIO CONTENT
   ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.

   The site has three pages (Home, Film, About), a Contact
   popup, and one page per project (generated automatically).

   - To swap a photo: drop your image into the /assets folder
     and put its file name in an "image" field, e.g.
     image: "assets/mystill.jpg"
   - Leave image as null to keep the dark placeholder.
   - Save the file and commit - the site updates itself in
     about a minute.
   ============================================================ */

window.SITE = {

  /* ---------- YOUR NAME ---------- */
  name: "James Murphy",
  monogram: "JM",               // tiny logo, top-left

  /* ---------- TOP NAV ----------
     "Contact" opens the popup automatically. Keep its url as
     "#contact" - do not point it at a page. */
  nav: [
    { label: "Home",    url: "index.html" },
    { label: "Film",    url: "film.html"  },
    { label: "About",   url: "about.html" },
    { label: "Contact", url: "#contact"   }
  ],

  /* ---------- HOME: HERO (full-screen opening) ---------- */
  hero: {
    image: null,                // e.g. "assets/hero.jpg" - full-screen background
    video: "assets/hero.mp4",   // e.g. "assets/hero.mp4" - plays instead of the image
    eyebrow: "James Murphy",    // small bold line
    headline: "Filmmaker.", // the big line
    tagline: "Narrative and documentary films, from shorts to features.",
    linkLeft:  { label: "Watch the films", url: "film.html" },
    linkRight: { label: "Get in touch",    url: "#contact" },   // opens the popup
    scrollHint: "Scroll"
  },

  /* ---------- HOME: STATS STRIP (scrolling under the hero) ---------- */
  brandStrip: [
    "15 CREDITS AT 16", "1.1M+ TOTAL VIEWS", "~1.7M HOURS WATCHED",
    "2 FEATURE FILMS", "8 SHORT FILMS", "1 DOCUMENTARY",
    "11 PROJECTS", "FOUNDING APPERT FILMS"
  ],

  /* ---------- HOME: STATEMENT (lights up word by word as you scroll) ---------- */
  statement: "Fifteen credits at sixteen. Director, producer, cinematographer, actor\u00A0- whatever the film needs, that's me.",

  /* ---------- HOME: FEATURED PROJECTS (grid under the statement) ---------- */
  featuredTitle: "Projects",
  featuredCount: 4,             // how many projects show on the home page
  featuredLinkLabel: "All projects",

  /* ---------- PROJECTS ----------
     These show on the home grid, the Film page, and each one
     gets its own project page automatically.

     ADDING A PROJECT = copying one of these blocks and changing
     it. Nothing else to do.
     - slug: the short id for its page link. Lowercase, dashes,
       no spaces (e.g. "my-film"). Never reuse one.
     - type: used for the Film page filter pills.
     - year: shown on cards and the project page.
     - releaseDate: YouTube public release date (YYYY-MM-DD).
       Keep the blocks in newest-to-oldest order.
     - Only released projects belong in this public file.
     - image: still for the cards (null = uses the YouTube
       thumbnail when videoUrl is set, else a placeholder).
     - videoUrl: full YouTube link, including its &t= start
       time. Used for the card thumbnail and the project page
       player. Leave null and set unreleased: true if the film
       is not out yet.
     - images: stills for the project page grid (leave null for
       now - James will fill these later).
     - credits: rows for the project page credits table.
     - url: optional external link ("View source" on its page). */
  projects: [
    { slug: "kotor-ii-search-for-the-star-forge", title: "Knights of the Old Republic II: Search for the Star Forge", type: "Feature", year: "Jun-Aug 2026", unreleased: true, featured: false,
      videoLabel: "Watch teaser", videoUrl: "https://www.youtube.com/watch?v=b_h2gfT5H4Q", image: null, images: [],
      credits: [
        { role: "Director", name: "Austin Parenti" },
        { role: "Cinematographer", name: "Phil King" },
        { role: "First Assistant Camera Operator", name: "James Murphy" }
      ] },
    { slug: "the-legend-of-skunk-ape", title: "The Legend of Skunk Ape", type: "Short film", year: "Jan 2026", releaseDate: "2026-05-14",
      image: "assets/the-legend-of-skunk-ape-card.jpg", videoUrl: "https://www.youtube.com/watch?v=3Ff5KQgyAmA&t=12s",
      images: ["assets/the-legend-of-skunk-ape-1.jpg", "assets/the-legend-of-skunk-ape-2.jpg", "assets/the-legend-of-skunk-ape-3.jpg", "assets/the-legend-of-skunk-ape-4.jpg", "assets/the-legend-of-skunk-ape-5.jpg", "assets/the-legend-of-skunk-ape-6.jpg"],
      credits: [
        { role: "Director", name: "Constantine Morano" },
        { role: "Cinematographer", name: "Max Miller" },
        { role: "Lead Actor", name: "James Murphy" }
      ] },
    { slug: "midnight-justice-dawn-of-night-wraith", title: "Midnight Justice: The Dawn of Night Wraith", type: "Short film", year: "2025", releaseDate: "2026-05-26",
      image: "assets/midnight-justice-dawn-of-night-wraith-card.jpg", videoUrl: "https://www.youtube.com/watch?v=9jMnqgMCKT4",
      images: ["assets/midnight-justice-dawn-of-night-wraith-1.jpg", "assets/midnight-justice-dawn-of-night-wraith-2.jpg", "assets/midnight-justice-dawn-of-night-wraith-3.jpg", "assets/midnight-justice-dawn-of-night-wraith-4.jpg", "assets/midnight-justice-dawn-of-night-wraith-5.jpg", "assets/midnight-justice-dawn-of-night-wraith-6.jpg"],
      credits: [
        { role: "Director", name: "Max Miller" },
        { role: "Cinematographer", name: "Constantine Morano" },
        { role: "Producer", name: "James Murphy" }
      ] },
    { slug: "above-the-fold", title: "Above the Fold", type: "Short film", year: "May 2026", releaseDate: "2026-05-22",
      image: "assets/above-the-fold-card.jpg", videoUrl: "https://www.youtube.com/watch?v=rF0aAd_4Dr8&t=140s",
      images: ["assets/above-the-fold-1.jpg", "assets/above-the-fold-2.jpg", "assets/above-the-fold-3.jpg", "assets/above-the-fold-4.jpg", "assets/above-the-fold-5.jpg", "assets/above-the-fold-6.jpg"],
      credits: [
        { role: "Director", name: "Rose Warren" },
        { role: "Cinematographer", name: "Dylan Yuan" },
        { role: "Assistant Camera Operator / Camera Operator", name: "James Murphy" }
      ] },
    { slug: "future-presence-passed", title: "Future Presence Passed", type: "Short film", year: "Apr 2026", releaseDate: "2026-05-15",
      image: "assets/future-presence-passed-card.jpg", videoUrl: "https://www.youtube.com/watch?v=eVz5IkvKdgk&t=338s",
      images: ["assets/future-presence-passed-1.jpg", "assets/future-presence-passed-2.jpg", "assets/future-presence-passed-3.jpg", "assets/future-presence-passed-4.jpg", "assets/future-presence-passed-5.jpg", "assets/future-presence-passed-6.jpg"],
      credits: [
        { role: "Director", name: "Max Miller" },
        { role: "Producer & Starring Actor", name: "James Murphy" }
      ] },
    { slug: "sky-guys", title: "Sky Guys", type: "Short film", year: "Nov 2025", releaseDate: "2026-05-27",
      image: "assets/sky-guys-card.jpg", videoUrl: "https://www.youtube.com/watch?v=Sv-a5apauQI&t=281s",
      images: ["assets/sky-guys-1.jpg", "assets/sky-guys-2.jpg", "assets/sky-guys-3.jpg", "assets/sky-guys-4.jpg", "assets/sky-guys-5.jpg", "assets/sky-guys-6.jpg"],
      credits: [
        { role: "Director", name: "Julianne Backherms" },
        { role: "Lead Actor", name: "James Murphy" }
      ] },
    { slug: "tales-of-mission-and-zaalbar", title: "The Tales of Mission & Zaalbar", type: "Short film", year: "Apr 2026", releaseDate: "2026-05-12",
      image: "assets/tales-of-mission-and-zaalbar-card.jpg", videoUrl: "https://www.youtube.com/watch?v=_6kAz1IJx8Q&t=14s",
      images: ["assets/tales-of-mission-and-zaalbar-1.jpg", "assets/tales-of-mission-and-zaalbar-2.jpg", "assets/tales-of-mission-and-zaalbar-3.jpg", "assets/tales-of-mission-and-zaalbar-4.jpg", "assets/tales-of-mission-and-zaalbar-5.jpg", "assets/tales-of-mission-and-zaalbar-6.jpg"],
      credits: [
        { role: "Director", name: "Sophia Kerns & Myla Tumas" },
        { role: "Cinematographer", name: "Max McCabe" },
        { role: "Producer", name: "James Murphy" }
      ] },
    { slug: "kotor-escape-from-taris", title: "Knights of the Old Republic: Escape from Taris", type: "Feature", year: "Aug 2025-Apr 2026", releaseDate: "2026-05-07",
      image: "assets/kotor-escape-from-taris-card.jpg", videoUrl: "https://www.youtube.com/watch?v=SWSa8dvaCSM",
      images: ["assets/kotor-escape-from-taris-1.jpg", "assets/kotor-escape-from-taris-2.jpg", "assets/kotor-escape-from-taris-3.jpg", "assets/kotor-escape-from-taris-4.jpg", "assets/kotor-escape-from-taris-5.jpg", "assets/kotor-escape-from-taris-6.jpg"],
      credits: [
        { role: "Director", name: "Austin Parenti" },
        { role: "Cinematographer", name: "Phil King" },
        { role: "Second Unit Camera Operator (uncredited)", name: "James Murphy" }
      ] },
    { slug: "the-last-toy-store", title: "The Last Toy Store", type: "Short film", year: "Sep 2025", releaseDate: "2025-12-17",
      image: "assets/the-last-toy-store-card.jpg", videoUrl: "https://www.youtube.com/watch?v=why6EtoQpNQ",
      images: ["assets/the-last-toy-store-1.jpg", "assets/the-last-toy-store-2.jpg", "assets/the-last-toy-store-3.jpg", "assets/the-last-toy-store-4.jpg", "assets/the-last-toy-store-5.jpg", "assets/the-last-toy-store-6.jpg"],
      credits: [
        { role: "Director", name: "Rachel Pettway" },
        { role: "Cinematographer", name: "Max McCabe" },
        { role: "Set Designer", name: "James Murphy" }
      ] },
    { slug: "my-best-friend-jay", title: "My Best Friend Jay", type: "Short film", year: "Sep 2024", releaseDate: "2025-07-07",
      image: "assets/my-best-friend-jay-card.jpg", videoUrl: "https://www.youtube.com/watch?v=tYo0jO_GrQo&t=29s",
      images: ["assets/my-best-friend-jay-1.jpg", "assets/my-best-friend-jay-2.jpg", "assets/my-best-friend-jay-3.jpg", "assets/my-best-friend-jay-4.jpg", "assets/my-best-friend-jay-5.jpg", "assets/my-best-friend-jay-6.jpg"],
      credits: [
        { role: "Director", name: "Max Miller" },
        { role: "Lead Actor", name: "James Murphy" }
      ] },
    { slug: "iron-dusk", title: "Iron Dusk", type: "Feature", year: "Jun-Aug 2024", releaseDate: "2024-12-13",
      image: "assets/iron-dusk-card.jpg", videoUrl: "https://www.youtube.com/watch?v=jMANytQTdPg&t=57s",
      images: ["assets/iron-dusk-1.jpg", "assets/iron-dusk-2.jpg", "assets/iron-dusk-3.jpg", "assets/iron-dusk-4.jpg", "assets/iron-dusk-5.jpg", "assets/iron-dusk-6.jpg"],
      credits: [
        { role: "Director", name: "Austin Parenti" },
        { role: "Cinematographer", name: "Phil King" },
        { role: "Visual Effects Supervisor", name: "James Murphy" }
      ] },
    { slug: "forging-iron-dusk", title: "Forging Iron Dusk", type: "Documentary", year: "Jun-Aug 2024", releaseDate: "2024-06-16",
      image: null, videoUrl: "https://www.youtube.com/watch?v=Xra6bpzmBhM&t=67s",
      images: [null, null, null, null, null, null],
      credits: [
        { role: "Director", name: "James Murphy" }
      ] }
  ],

  /* ---------- FILM PAGE ---------- */
  filmPage: {
    introVideo: "assets/hero.mp4", // plays behind the intro (the home hero video)
    introImage: null,           // e.g. "assets/onset.jpg" - full-screen photo behind the intro
    introText: "Every film I've made. All in one place.",
    overviewTitle: "Index"      // label of the full project list view
  },

  /* ---------- ABOUT PAGE ---------- */
  about: {
    portrait: null,             // e.g. "assets/portrait.jpg"
    note: null,                // handwritten note (white ink, transparent bg) - removed for now; data-URI version was assets/about-note-img.js
    headline: "Filmmaker.",
    statement: "It's kind of fun to do the impossible.",
    statementSig: "assets/disney-sig.webp",   // Walt Disney signature under the quote
    storySig: null,             // James's signature under the story text - data-URI version is assets/about-story-sig-img.js
    body: [
      "I'm James. I'm in high school in South Florida, and I make movies.",
      "I didn't wait for film school or permission. I started making films with my friends and we never stopped. One short became two, two became features, and somewhere along the way this stopped being a hobby.",
      "I've done just about every job on a set. Director, producer, camera operator, AD, VFX, actor. Not for the credits. The film needed it, and somebody had to do it. When you make movies with your friends, you learn every job fast.",
      "I make narrative films and documentaries. No music videos, no commercials. The process is the point.",
      "I split my life between New Jersey and South Florida, and I'm building a studio while I'm still in school. I'm not in a hurry. I just started early.",
      "This site is the work so far. The best of it hasn't been shot yet."
    ],
    facts: [
      { label: "Based in",  value: "Palm Beach, Florida & New Jersey" },
      { label: "Focus",     value: "Narrative shorts, narrative features, documentary" },
      { label: "Contact",   value: "jmurphy@appertfilms.com" }
    ],
    linkLabel: "Get in touch"   // opens the contact popup
  },

  /* ---------- FREELANCE PAGE ----------
     Services, approach and testimonials.
     NOTE: the testimonials below are PLACEHOLDERS - realistic
     filler quotes with no names, so the layout is finished. To
     swap in a real one, replace the text between the quotes and
     add  , name: "Real Name", role: "Project"  to its block. */
  freelance: {
    headline: "Freelance.",
    statement: "Everything I take on, I do with an artist's intentionality.",
    intro: [
      "I'm a director, cinematographer and producer with 15 film credits and over 1.1 million views on released work - and I take on select freelance projects.",
      "Music video, short film, commercial or live broadcast: I bring the same thing to every job. Nothing in the frame is an accident, and nothing leaves my hands until it says what it was meant to say."
    ],
    servicesTitle: "Services",
    services: [
      { name: "Directing",                 detail: "Concept through final cut - one clear vision, carried through every decision." },
      { name: "Cinematography",            detail: "Lighting, framing and color that put the story first." },
      { name: "Camera Operation",          detail: "Camera op, 1st AC and 2nd unit work on narrative and commercial sets." },
      { name: "Producing",                 detail: "Production management and executive producing, prep through delivery." },
      { name: "Live Broadcast",            detail: "Multi-camera live production with a cinematic eye." },
      { name: "Videography & Photography", detail: "Events, portraits and branded content." },
      { name: "Acting",                    detail: "Leads and supporting roles across student and indie productions." },
      { name: "Design & Marketing",        detail: "Graphic design, key art and release strategy for your project." }
    ],
    testimonialsTitle: "Kind Words",
    testimonials: [
      { quote: "Working with James felt like watching someone paint with a camera. Every choice had a reason behind it." },
      { quote: "He treated our small project like a feature film. The result speaks for itself." },
      { quote: "Prepared, calm and relentless about the details. Exactly who you want on set." }
    ],
    ctaLine: "Have a project in mind?",
    linkLabel: "Get in touch",   // opens the contact popup
    resumeLabel: "View resume"   // links to resume.html
  },

  /* ---------- RESUME PAGE ----------
     Placeholder for now - the resume PDF goes here later. */
  pages: {
    resume: {
      title: "Resume",
      headline: "Resume.",
      lines: ["The resume PDF drops right here, soon."]
    }
  },

  /* ---------- CONTACT POPUP ---------- */
  contact: {
    heading: "Contact",
    subline: "Tell me what you're making.",
    photo: null,                // e.g. "assets/me.jpg" - small round photo in the popup
    name: "James Murphy",
    email: "jmurphy@appertfilms.com",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/jamesmurphyfilms/" },
      { label: "YouTube",   url: "https://www.youtube.com/@Jamesmurphyfilms" },
      { label: "LinkedIn",  url: "https://www.linkedin.com/in/james-murphy-iv-4b8ab1300/" },
      { label: "IMDb",      url: "https://www.imdb.com/name/nm16805948/" }
    ],
    buttonLabel: "Send message",
    placeholders: {
      name: "Your name",
      email: "your@email.com",
      subject: "Project inquiry, collaboration...",
      message: "Tell me about your project..."
    }
  },

  /* ---------- FOOTER ---------- */
  footer: {
    wordmark: "James Murphy®",       // giant bottom wordmark
    location: "New York",         // shown next to the live clock
    timezone: "America/New_York",     // for the clock
    copyright: "James Murphy & The Appert Company",
    socials: [
      { label: "Freelance", url: "freelance.html" },
      { label: "Resume",    url: "resume.html"    },
      { label: "Instagram", url: "https://www.instagram.com/jamesmurphyfilms/" },
      { label: "YouTube",   url: "https://www.youtube.com/@Jamesmurphyfilms" },
      { label: "LinkedIn",  url: "https://www.linkedin.com/in/james-murphy-iv-4b8ab1300/" },
      { label: "IMDb",      url: "https://www.imdb.com/name/nm16805948/" },
      { label: "Email",     url: "mailto:jmurphy@appertfilms.com" }
    ]
  }
};
