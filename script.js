/* ============================================================
   RENDERER - fills index.html from content.js.
   (No need to edit this file. Edit content.js instead.)
   ============================================================ */
(function () {
  const el = (id) => document.getElementById(id);
  const S = window.SITE;

  document.title = S.name;

  /* header */
  el("monogram").textContent = S.monogram || S.name;
  el("mainNav").innerHTML = S.nav
    .map((n) => `<a href="${n.url}">${n.label}</a>`)
    .join("");

  /* hero */
  const media = el("heroMedia");
  if (S.hero.video) {
    media.innerHTML = `<video src="${S.hero.video}" autoplay muted loop playsinline></video>`;
  } else if (S.hero.image) {
    media.innerHTML = `<img src="${S.hero.image}" alt="">`;
  } else {
    media.classList.add("placeholder");
    media.innerHTML = `<span class="placeholder-label">${S.name} - hero still</span>`;
  }
  el("heroEyebrow").textContent = S.hero.eyebrow;
  el("heroHeadline").textContent = S.hero.headline;
  const tag = document.createElement("p");
  tag.className = "hero-tagline";
  tag.textContent = S.hero.tagline;
  el("heroHeadline").after(tag);
  document.querySelector(".hero-bottom").insertAdjacentHTML(
    "beforeend",
    `<div class="hero-links">
       <a href="${S.hero.linkLeft.url}">${S.hero.linkLeft.label}</a>
       <a href="${S.hero.linkRight.url}">${S.hero.linkRight.label}</a>
     </div>`
  );
  const scroll = document.createElement("div");
  scroll.className = "hero-scroll";
  scroll.innerHTML = `${S.hero.scrollHint}<span></span>`;
  document.querySelector(".hero").appendChild(scroll);

  /* brand strip - duplicated track for a seamless marquee */
  const items = S.brandStrip.map((b) => `<span>${b}</span>`).join("");
  el("brandTrack").innerHTML = items + items;

  /* films */
  el("filmsTitle").textContent = S.filmsSectionTitle;
  el("filmsGrid").innerHTML = S.films
    .map((f) => {
      const thumb = f.image
        ? `<div class="film-thumb"><img src="${f.image}" alt="${f.title}"></div>`
        : `<div class="film-thumb placeholder"><span class="ph-label">${f.title} - still</span></div>`;
      const inner = `${thumb}
        <div class="film-meta">
          <span class="film-title">${f.title}</span>
          <span class="film-cat">${f.category} · ${f.year}</span>
        </div>`;
      return f.url
        ? `<a class="film-card" href="${f.url}">${inner}</a>`
        : `<div class="film-card">${inner}</div>`;
    })
    .join("");

  /* about */
  el("aboutStatement").textContent = S.about.statement;
  el("aboutBody").textContent = S.about.body;
  const al = el("aboutLink");
  al.textContent = S.about.linkLabel;
  al.href = S.about.linkUrl;

  /* contact */
  el("contactHeading").textContent = S.contact.heading;
  el("contactName").textContent = S.contact.name;
  const ce = el("contactEmail");
  ce.textContent = S.contact.email;
  ce.href = "mailto:" + S.contact.email;

  /* footer */
  el("footerWordmark").textContent = S.name;
  el("footerCopy").textContent = "© " + new Date().getFullYear() + " " + S.footer.copyright + " · All rights reserved";
  el("footerSocials").innerHTML = S.footer.socials
    .map((s) => `<a href="${s.url}">${s.label}</a>`)
    .join("");
  const clock = el("footerClock");
  function tick() {
    let t;
    try {
      t = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        timeZone: S.footer.timezone || undefined,
        timeZoneName: "short"
      });
    } catch (e) {
      t = new Date().toLocaleTimeString("en-US", { hour12: false });
    }
    clock.textContent = S.footer.location + " " + t;
  }
  tick();
  setInterval(tick, 1000);
})();
