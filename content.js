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
    { label: "Film",    url: "film.html"  },
    { label: "About",   url: "about.html" },
    { label: "Contact", url: "#contact"   }
  ],

  /* ---------- HOME: HERO (full-screen opening) ---------- */
  hero: {
    image: null,                // e.g. "assets/hero.jpg" - full-screen background
    video: null,                // e.g. "assets/hero.mp4" - plays instead of the image
    eyebrow: "James Murphy",    // small bold line
    headline: "Film director.", // the big line
    tagline: "I shoot music videos, fiction and commercials.",
    linkLeft:  { label: "Watch the films", url: "film.html" },
    linkRight: { label: "Get in touch",    url: "#contact" },   // opens the popup
    scrollHint: "Scroll"
  },

  /* ---------- HOME: BRAND STRIP (logos scrolling under the hero) ----------
     Replace these with client names, festivals, whatever applies. */
  brandStrip: [
    "FESTIVAL ONE", "CLIENT NAME", "SHORT FILM '26", "MUSIC VIDEO",
    "FESTIVAL TWO", "PRODUCTION CO", "DOCUMENTARY", "COMMERCIAL"
  ],

  /* ---------- HOME: STATEMENT (lights up word by word as you scroll) ---------- */
  statement: "I shoot with what I have, but above all with what I feel. Directing, lighting and color are just how I pass that feeling on to you.",

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
    { slug: "my-best-friend-jay", title: "My Best Friend Jay", type: "Short film", year: "",
      image: "assets/my-best-friend-jay-card.jpg", videoUrl: "https://www.youtube.com/watch?v=tYo0jO_GrQo&t=29s",
      images: ["assets/my-best-friend-jay-1.jpg", "assets/my-best-friend-jay-2.jpg", "assets/my-best-friend-jay-3.jpg", "assets/my-best-friend-jay-4.jpg", "assets/my-best-friend-jay-5.jpg", "assets/my-best-friend-jay-6.jpg"],
      credits: [
        { role: "Director", name: "Max Miller" },
        { role: "Starring Actor", name: "James Murphy" }
      ] },
    { slug: "forging-iron-dusk", title: "Forging Iron Dusk", type: "Short film", year: "",
      image: null, videoUrl: "https://www.youtube.com/watch?v=Xra6bpzmBhM&t=67s",
      images: [null, null, null, null, null, null],
      credits: [
        { role: "Director", name: "James Murphy" }
      ] },
    { slug: "iron-dusk", title: "Iron Dusk", type: "Short film", year: "",
      image: "assets/iron-dusk-card.jpg", videoUrl: "https://www.youtube.com/watch?v=jMANytQTdPg&t=57s",
      images: ["assets/iron-dusk-1.jpg", "assets/iron-dusk-2.jpg", "assets/iron-dusk-3.jpg", "assets/iron-dusk-4.jpg", "assets/iron-dusk-5.jpg", "assets/iron-dusk-6.jpg"],
      credits: [
        { role: "Director", name: "Austin Parenti" },
        { role: "Cinematographer", name: "Phil King" },
        { role: "Visual Effects", name: "James Murphy" }
      ] },
    { slug: "kotor-escape-from-taris", title: "Knights of the Old Republic: Escape from Taris", type: "Short film", year: "",
      image: "assets/kotor-escape-from-taris-card.jpg", videoUrl: "https://www.youtube.com/watch?v=SWSa8dvaCSM",
      images: ["assets/kotor-escape-from-taris-1.jpg", "assets/kotor-escape-from-taris-2.jpg", "assets/kotor-escape-from-taris-3.jpg", "assets/kotor-escape-from-taris-4.jpg", "assets/kotor-escape-from-taris-5.jpg", "assets/kotor-escape-from-taris-6.jpg"],
      credits: [
        { role: "Director", name: "Austin Parenti" },
        { role: "Cinematographer", name: "Phil King" },
        { role: "2nd Unit Camera Operator", name: "James Murphy" }
      ] },
    { slug: "the-last-toy-store", title: "The Last Toy Store", type: "Short film", year: "",
      image: "assets/the-last-toy-store-card.jpg", videoUrl: "https://www.youtube.com/watch?v=why6EtoQpNQ",
      images: ["assets/the-last-toy-store-1.jpg", "assets/the-last-toy-store-2.jpg", "assets/the-last-toy-store-3.jpg", "assets/the-last-toy-store-4.jpg", "assets/the-last-toy-store-5.jpg", "assets/the-last-toy-store-6.jpg"],
      credits: [
        { role: "Director", name: "Rachel Pettway" },
        { role: "Cinematographer", name: "Max McCabe" },
        { role: "Scenic Designer", name: "James Murphy" }
      ] },
    { slug: "midnight-justice-dawn-of-night-wraith", title: "Midnight Justice: The Dawn of Night Wraith", type: "Short film", year: "",
      image: "assets/midnight-justice-dawn-of-night-wraith-card.jpg", videoUrl: "https://www.youtube.com/watch?v=9jMnqgMCKT4",
      images: ["assets/midnight-justice-dawn-of-night-wraith-1.jpg", "assets/midnight-justice-dawn-of-night-wraith-2.jpg", "assets/midnight-justice-dawn-of-night-wraith-3.jpg", "assets/midnight-justice-dawn-of-night-wraith-4.jpg", "assets/midnight-justice-dawn-of-night-wraith-5.jpg", "assets/midnight-justice-dawn-of-night-wraith-6.jpg"],
      credits: [
        { role: "Director", name: "Max Miller" },
        { role: "Cinematographer", name: "Constantine Morano" },
        { role: "Producer", name: "James Murphy" }
      ] },
    { slug: "sky-guys", title: "Sky Guys", type: "Short film", year: "",
      image: null, videoUrl: "https://www.youtube.com/watch?v=Sv-a5apauQI&t=281s",
      images: [null, null, null, null, null, null],
      credits: [
        { role: "Director", name: "Julianne Backherms" },
        { role: "Starring Actor", name: "James Murphy" }
      ] },
    { slug: "the-legend-of-skunk-ape", title: "The Legend of Skunk Ape", type: "Short film", year: "",
      image: "assets/the-legend-of-skunk-ape-card.jpg", videoUrl: "https://www.youtube.com/watch?v=3Ff5KQgyAmA&t=12s",
      images: ["assets/the-legend-of-skunk-ape-1.jpg", "assets/the-legend-of-skunk-ape-2.jpg", "assets/the-legend-of-skunk-ape-3.jpg", "assets/the-legend-of-skunk-ape-4.jpg", "assets/the-legend-of-skunk-ape-5.jpg", "assets/the-legend-of-skunk-ape-6.jpg"],
      credits: [
        { role: "Director", name: "Constantine Morano" },
        { role: "Cinematographer", name: "Max Miller" },
        { role: "Marty", name: "James Murphy" }
      ] },
    { slug: "tales-of-mission-and-zaalbar", title: "The Tales of Mission & Zaalbar", type: "Short film", year: "",
      image: "assets/tales-of-mission-and-zaalbar-card.jpg", videoUrl: "https://www.youtube.com/watch?v=_6kAz1IJx8Q&t=14s",
      images: ["assets/tales-of-mission-and-zaalbar-1.jpg", "assets/tales-of-mission-and-zaalbar-2.jpg", "assets/tales-of-mission-and-zaalbar-3.jpg", "assets/tales-of-mission-and-zaalbar-4.jpg", "assets/tales-of-mission-and-zaalbar-5.jpg", "assets/tales-of-mission-and-zaalbar-6.jpg"],
      credits: [
        { role: "Director", name: "Sophia Kerns & Myla Tumas" },
        { role: "Cinematographer", name: "Max McCabe" },
        { role: "Producer & Graphic Artist", name: "James Murphy" }
      ] },
    { slug: "above-the-fold", title: "Above the Fold", type: "Short film", year: "",
      image: "assets/above-the-fold-card.jpg", videoUrl: "https://www.youtube.com/watch?v=rF0aAd_4Dr8&t=140s",
      images: ["assets/above-the-fold-1.jpg", "assets/above-the-fold-2.jpg", "assets/above-the-fold-3.jpg", "assets/above-the-fold-4.jpg", "assets/above-the-fold-5.jpg", "assets/above-the-fold-6.jpg"],
      credits: [
        { role: "Director", name: "Rose Warren" },
        { role: "Cinematographer", name: "Dylan Yuan" },
        { role: "Camera Operator", name: "James Murphy" }
      ] },
    { slug: "future-presence-passed", title: "Future Presence Passed", type: "Short film", year: "",
      image: "assets/future-presence-passed-card.jpg", videoUrl: "https://www.youtube.com/watch?v=eVz5IkvKdgk&t=338s",
      images: ["assets/future-presence-passed-1.jpg", "assets/future-presence-passed-2.jpg", "assets/future-presence-passed-3.jpg", "assets/future-presence-passed-4.jpg", "assets/future-presence-passed-5.jpg", "assets/future-presence-passed-6.jpg"],
      credits: [
        { role: "Director", name: "Max Miller" },
        { role: "Producer & Starring Actor", name: "James Murphy" }
      ] },
    { slug: "kotor-ii-search-for-the-star-forge", title: "Knights of the Old Republic II: Search for the Star Forge", type: "Short film", year: "",
      image: null, videoUrl: null, unreleased: true,
      images: [null, null, null, null, null, null],
      credits: [
        { role: "Director", name: "Austin Parenti" },
        { role: "Cinematographer", name: "Phil King" },
        { role: "1st Assistant Camera Operator", name: "James Murphy" }
      ] },
    { slug: "ai-in-use", title: "AI in Use", type: "Short film", year: "",
      image: null, videoUrl: null, unreleased: true,
      images: [null, null, null, null, null, null],
      credits: [
        { role: "Director", name: "Max Miller" },
        { role: "Cinematographer & Producer", name: "James Murphy" }
      ] },
    { slug: "along-the-lines-of-love", title: "Along the Lines of Love", type: "Short film", year: "",
      image: null, videoUrl: null, unreleased: true,
      images: [null, null, null, null, null, null],
      credits: [
        { role: "Director", name: "Myla Tumas" },
        { role: "Cinematographer", name: "Austin Parenti" },
        { role: "Assistant Director & Producer", name: "James Murphy" }
      ] },
    { slug: "camp-rock-bottom", title: "Camp Rock Bottom", type: "Short film", year: "",
      image: null, videoUrl: null, unreleased: true,
      images: [null, null, null, null, null, null],
      credits: [
        { role: "Director", name: "Rose Warren" },
        { role: "Cinematographer", name: "Elliana Nabhan" },
        { role: "Assistant Director & Producer", name: "James Murphy" }
      ] }
  ],

  /* ---------- FILM PAGE ---------- */
  filmPage: {
    introImage: null,           // e.g. "assets/onset.jpg" - full-screen photo behind the intro
    introText: "A selection of my work, where light, frame and color serve one idea: staying close to people, and letting an image be felt before it is explained.",
    overviewTitle: "Index"      // label of the full project list view
  },

  /* ---------- ABOUT PAGE ---------- */
  about: {
    portrait: null,             // e.g. "assets/portrait.jpg"
    headline: "Film director.",
    statement: "I shoot with what I have, but above all with what I feel.",
    body: [
      "James Murphy is a filmmaker and director. He is building a body of work across music videos, fiction and commercials - and documenting the whole thing along the way.",
      "He is the founder of Appert Films, a production and distribution house built from scratch, and he shoots with whatever is in his hands."
    ],
    facts: [
      { label: "Based in",  value: "New York" },
      { label: "Focus",     value: "Music videos, fiction, commercials" },
      { label: "Studio",    value: "Appert Films" },
      { label: "Contact",   value: "jwizard.industries@gmail.com" }
    ],
    linkLabel: "Get in touch"   // opens the contact popup
  },

  /* ---------- CONTACT POPUP ---------- */
  contact: {
    heading: "Contact",
    subline: "Let's work together.",
    photo: null,                // e.g. "assets/me.jpg" - small round photo in the popup
    name: "James Murphy",
    email: "jwizard.industries@gmail.com",
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
    copyright: "James Murphy",
    socials: [
      { label: "Instagram", url: "#" },   // paste your Instagram URL between the quotes
      { label: "YouTube",   url: "#" },   // paste your YouTube URL between the quotes
      { label: "Email",     url: "mailto:jwizard.industries@gmail.com" }
    ]
  }
};
