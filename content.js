/* ============================================================
   JAMES MURPHY - PORTFOLIO CONTENT
   ============================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.

   - All text on the site lives here.
   - To swap a photo: drop your image into the /assets folder
     and put its file name in the "image" field, e.g.
     image: "assets/mystill.jpg"
   - Leave image as null to keep the dark placeholder.
   - Save the file, and if the site is connected to GitHub,
     your change goes live automatically. Otherwise re-upload
     to Cloudflare (see README.md).
   ============================================================ */

window.SITE = {

  /* ---------- YOUR NAME ---------- */
  name: "James Murphy",

  /* ---------- TOP NAV ---------- */
  monogram: "JM",               // tiny logo, top-left
  nav: [
    { label: "Films",   url: "#films"   },
    { label: "About",   url: "#about"   },
    { label: "Contact", url: "#contact" }
  ],

  /* ---------- HERO (full-screen opening) ---------- */
  hero: {
    image: null,                // e.g. "assets/hero.jpg" - full-screen background
    video: null,                // e.g. "assets/hero.mp4" - plays instead of the image
    eyebrow: "James Murphy",    // small bold line
    headline: "Film director.", // the big line
    tagline: "I shoot music videos, fiction and commercials.",
    linkLeft:  { label: "Watch the films", url: "#films"   },
    linkRight: { label: "Get in touch",    url: "#contact" },
    scrollHint: "Scroll"
  },

  /* ---------- BRAND STRIP (small logos scrolling under the hero) ----------
     Replace these with client names, festivals, whatever applies. */
  brandStrip: [
    "FESTIVAL ONE", "CLIENT NAME", "SHORT FILM '26", "MUSIC VIDEO",
    "FESTIVAL TWO", "PRODUCTION CO", "DOCUMENTARY", "COMMERCIAL"
  ],

  /* ---------- FILMS GRID ---------- */
  filmsSectionTitle: "Films",
  films: [
    { title: "FILM TITLE 01", category: "Short film",  year: "2026", image: null, url: null },
    { title: "FILM TITLE 02", category: "Music video", year: "2026", image: null, url: null },
    { title: "FILM TITLE 03", category: "Commercial",  year: "2025", image: null, url: null },
    { title: "FILM TITLE 04", category: "Documentary", year: "2025", image: null, url: null },
    { title: "FILM TITLE 05", category: "Short film",  year: "2024", image: null, url: null },
    { title: "FILM TITLE 06", category: "Music video", year: "2024", image: null, url: null }
  ],

  /* ---------- ABOUT ---------- */
  about: {
    statement: "I shoot with what I have, but above all with what I feel.",
    body: "James Murphy is a filmmaker and director. He is building a body of work across music videos, fiction and commercials - and documenting the whole thing along the way.",
    linkLabel: "Get in touch",
    linkUrl: "#contact"
  },

  /* ---------- CONTACT ---------- */
  contact: {
    heading: "Let's work together.",
    name: "James Murphy",
    email: "jwizard.industries@gmail.com",
    buttonLabel: "Send an email"
  },

  /* ---------- FOOTER ---------- */
  footer: {
    location: "Florida, USA",         // shown next to the live clock
    timezone: "America/New_York",     // for the clock
    copyright: "James Murphy",
    socials: [
      { label: "Instagram", url: "#" },   // paste your Instagram URL between the quotes
      { label: "YouTube",   url: "#" },   // paste your YouTube URL between the quotes
      { label: "Email",     url: "mailto:jwizard.industries@gmail.com" }
    ]
  }
};
