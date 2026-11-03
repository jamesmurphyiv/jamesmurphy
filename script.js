/* ============================================================
   ENGINE - renders the pages from content.js and runs the
   animations. (No need to edit this file. Edit content.js.)
   ============================================================ */
(function () {
  "use strict";
  const S = window.SITE;
  const PAGE = document.body.dataset.page || "home";
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.title = S.name + ({ film: " - Film", about: " - About", project: " - Film", freelance: " - Freelance", resume: " - Resume" }[PAGE] || "");

  /* ============ YOUTUBE HELPERS ============ */
  function ytId(url) {
    if (!url) return null;
    const m = String(url).match(/(?:youtube\.com\/watch\?[^#]*v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  }
  function ytStart(url) {
    const m = String(url || "").match(/[?&]t=(\d+)s?/);
    return m ? +m[1] : 0;
  }
  function ytThumb(url) {
    const id = ytId(url);
    return id ? "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg" : null;
  }
  function ytEmbed(url) {
    const id = ytId(url);
    if (!id) return null;
    const start = ytStart(url);
    return "https://www.youtube-nocookie.com/embed/" + id + "?rel=0&playsinline=1" + (start ? "&start=" + start : "");
  }
  function projectUrl(p) { return "project.html?p=" + encodeURIComponent(p.slug); }

  /* ============ MEDIA HELPERS ============ */
  function mediaHTML(item, cls, label) {
    if (item && item.video)
      return `<div class="${cls}"><video src="${esc(item.video)}" autoplay muted loop playsinline></video></div>`;
    if (item && item.image)
      return `<div class="${cls}"><img src="${esc(item.image)}" alt="${esc(label || "")}"></div>`;
    const thumb = item && ytThumb(item.videoUrl);
    if (thumb)
      return `<div class="${cls}"><img src="${thumb}" alt="${esc(label || "")}" loading="lazy"></div>`;
    return `<div class="${cls} placeholder"><span class="ph-label">${esc(label || "Still coming")}</span></div>`;
  }

  /* ============ HEADER ============ */
  (function () {
    [["icon","assets/favicon.png","image/png"],["apple-touch-icon","assets/apple-touch-icon.png",""]].forEach(function (d) {
      var l = document.createElement("link"); l.rel = d[0]; l.href = d[1]; if (d[2]) l.type = d[2]; document.head.appendChild(l);
    });
  })();

  function renderHeader() {
    const h = $("#siteHeader");
    if (!h) return;
    const pageFile = PAGE === "home" ? "index" : PAGE;
    h.innerHTML = `
      <a class="monogram" href="index.html" aria-label="${esc(S.name)}"><img src="assets/crest.png" alt="${esc(S.name)}"></a>
      <nav class="main-nav">
        ${S.nav.map((n) => n.url === "#contact"
          ? `<a href="#contact" data-open-contact>${esc(n.label)}</a>`
          : `<a href="${esc(n.url)}" class="${pageFile && n.url.indexOf(pageFile) === 0 ? "active" : ""}">${esc(n.label)}</a>`).join("")}
      </nav>`;
  }

  /* ============ FOOTER ============ */
  function renderFooter() {
    const f = $("#siteFooter");
    if (!f) return;
    f.innerHTML = `
      <div class="footer-wordmark" aria-hidden="true">${esc(S.footer.wordmark || S.name)}</div>
      <div class="footer-row">
        <span>© ${new Date().getFullYear()} ${esc(S.footer.copyright)} · All rights reserved</span>
        <span id="footerClock"></span>
        <span class="footer-socials">
          ${S.footer.socials.map((s) => `<a href="${esc(s.url)}"${/^https?:/.test(s.url) ? ' target="_blank" rel="noopener"' : ""}>${esc(s.label)}</a>`).join("")}
        </span>
      </div>`;
    const wm = $(".footer-wordmark");
    function fitWordmark() {
      if (!wm) return;
      wm.style.fontSize = "100px";
      const w = wm.scrollWidth || 1;
      wm.style.fontSize = Math.floor((99 * window.innerWidth) / w) + "px";
      const r = wm.getBoundingClientRect();
      if (r.width > 0) {
        const cur = parseFloat(wm.style.fontSize);
        wm.style.fontSize = Math.floor((cur * 0.998 * window.innerWidth) / r.width) + "px";
      }
    }
    fitWordmark();
    window.addEventListener("resize", fitWordmark);
    const clock = $("#footerClock");
    function tick() {
      let t;
      try {
        t = new Date().toLocaleTimeString("en-US", { hour12: false, timeZone: S.footer.timezone || undefined, timeZoneName: "short" });
      } catch (e) {
        t = new Date().toLocaleTimeString("en-US", { hour12: false });
      }
      clock.textContent = (S.footer.location ? S.footer.location + " " : "") + t;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ============ CONTACT MODAL ============ */
  function renderModal() {
    const c = S.contact;
    const wrap = document.createElement("div");
    wrap.className = "modal-backdrop";
    wrap.id = "contactModal";
    wrap.setAttribute("aria-hidden", "true");
    const photo = c.photo
      ? `<img class="modal-avatar" src="${esc(c.photo)}" alt="${esc(c.name)}">`
      : `<span class="modal-avatar modal-avatar-ph">${esc((c.name || "J")[0])}</span>`;
    wrap.innerHTML = `
      <div class="modal-card" role="dialog" aria-modal="true" aria-label="Contact">
        <button class="modal-close" data-close-contact aria-label="Close">&times;</button>
        <h2 class="modal-title">${esc(c.heading)}</h2>
        <p class="modal-sub">${esc(c.subline)}</p>
        <div class="modal-person">${photo}
          <div><strong>${esc(c.name)}</strong><span>${esc(c.email)}</span></div>
        </div>
        ${(c.socials && c.socials.length) ? `<p class="modal-socials">${c.socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("")}</p>` : ""}
        <hr class="modal-rule">
        <form id="contactForm" novalidate>
          <label>Name<input type="text" name="name" placeholder="${esc(c.placeholders.name)}" required></label>
          <label>Email<input type="email" name="email" placeholder="${esc(c.placeholders.email)}" required></label>
          <label>Subject<input type="text" name="subject" placeholder="${esc(c.placeholders.subject)}"></label>
          <label>Message<textarea name="message" rows="4" placeholder="${esc(c.placeholders.message)}" required></textarea></label>
          <button type="submit" class="modal-send"><span class="send-icon">&#10148;</span> ${esc(c.buttonLabel)}</button>
          <p class="modal-status" id="contactStatus" role="status"></p>
        </form>
      </div>`;
    document.body.appendChild(wrap);

    let lastFocus = null;
    function open() {
      lastFocus = document.activeElement;
      wrap.classList.add("open");
      wrap.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      const first = $("input", wrap);
      if (first) setTimeout(() => first.focus(), 250);
    }
    function close() {
      wrap.classList.remove("open");
      wrap.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    window.__openContact = open;
    document.addEventListener("click", (e) => {
      const opener = e.target.closest("[data-open-contact]");
      if (opener) { e.preventDefault(); open(); return; }
      if (e.target.closest("[data-close-contact]") || e.target === wrap) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && wrap.classList.contains("open")) close();
    });

    const form = $("#contactForm", wrap);
    const status = $("#contactStatus", wrap);
    const btn = $(".modal-send", wrap);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      btn.disabled = true;
      status.textContent = "Sending...";
      status.className = "modal-status";
      try {
        const res = await fetch("https://formsubmit.co/ajax/" + encodeURIComponent(c.email), {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: data.name, email: data.email, subject: data.subject || "Website inquiry",
            message: data.message, _subject: "New message from " + (data.name || "your site"),
            _replyto: data.email, _captcha: "false", _template: "table"
          })
        });
        const out = await res.json().catch(() => ({}));
        if (res.ok && String(out.success) !== "false") {
          status.textContent = "Sent. I'll get back to you soon.";
          status.classList.add("ok");
          form.reset();
        } else {
          throw new Error(out.message || "send failed");
        }
      } catch (err) {
        status.innerHTML = 'Could not send automatically - <a href="mailto:' + esc(c.email) +
          "?subject=" + encodeURIComponent(data.subject || "Website inquiry") +
          "&body=" + encodeURIComponent(data.message + "\n\n- " + data.name + " (" + data.email + ")") +
          '">tap to email instead</a>.';
        status.classList.add("err");
      } finally {
        btn.disabled = false;
      }
    });
  }

  /* ============ SHARED ANIMATIONS ============ */
  function pageTransitions() {
    document.body.classList.add("page-in");
    requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add("page-in-done")));
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a[href$='.html'], a[href^='project.html'], a[href^='film.html'], a[href^='about.html'], a[href='index.html']");
      if (!a || a.target === "_blank" || e.metaKey || e.ctrlKey || reduced) return;
      const url = a.getAttribute("href");
      if (!url || url.startsWith("http")) return;
      e.preventDefault();
      document.body.classList.remove("page-in-done");
      setTimeout(() => { location.href = url; }, 180);
    });
  }

  function reveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  function wordReveal() {
    $$(".word-reveal").forEach((el) => {
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w) => `<span class="w">${esc(w)}</span>`).join(" ");
      const spans = $$(".w", el);
      function update() {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85, end = vh * 0.35;
        const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * 0.5)));
        const lit = Math.round(p * spans.length);
        spans.forEach((s, i) => s.classList.toggle("lit", i < lit));
      }
      update();
      document.addEventListener("scroll", update, { passive: true });
    });
  }

  function marquee() {
    $$(".marquee-track").forEach((t) => { t.innerHTML += t.innerHTML; });
  }

  function scrollCue() {
    $$("[data-scroll-to]").forEach((b) => b.addEventListener("click", () => {
      const t = $(b.dataset.scrollTo);
      if (t) t.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    }));
  }

  /* ============ HOME ============ */
  function renderHome() {
    const root = $("#page");
    const h = S.hero;
    root.innerHTML = `
      <section class="hero">
        ${mediaHTML(h, "hero-media", S.name + " - hero still")}
        <div class="hero-grain"></div>
        <div class="hero-wm" aria-hidden="true"></div>
        <div class="hero-crest" aria-hidden="true"><img src="assets/crest.png" alt=""></div>
        <div class="hero-bottom">
          <div class="hero-text">
            <h1 class="hero-headline rise" style="--d:.05s"><span>${esc(h.eyebrow)}</span><br>${esc(h.headline)}</h1>
            <p class="hero-tagline rise" style="--d:.2s">${esc(h.tagline)}</p>
          </div>
          <div class="hero-links rise" style="--d:.35s">
            <a href="${esc(h.linkLeft.url)}">${esc(h.linkLeft.label)}</a>
            ${h.linkRight.url === "#contact"
              ? `<a href="#contact" data-open-contact>${esc(h.linkRight.label)}</a>`
              : `<a href="${esc(h.linkRight.url)}">${esc(h.linkRight.label)}</a>`}
          </div>
        </div>
        <div class="hero-marquee rise" style="--d:.5s">
          <div class="marquee-track">${S.brandStrip.map((b) => `<span>${esc(b)}</span>`).join("")}</div>
        </div>
      </section>

      <section class="statement">
        <p class="statement-text word-reveal">${esc(S.statement)}</p>
        <button class="scroll-cue" data-scroll-to="#featured">${esc(h.scrollHint)}<span class="cue-arrows"><i></i><i></i></span></button>
      </section>

      <section class="stats" id="viewsStat">
        <div class="stat-number" id="viewsCount">&nbsp;</div>
        <div class="stat-label">Total views across all projects</div>
      </section>

      <section class="featured" id="featured">
        <div class="section-head reveal">
          <h2 class="section-title">${esc(S.featuredTitle)}</h2>
          <a class="text-link" href="film.html">${esc(S.featuredLinkLabel)} &rarr;</a>
        </div>
        <div class="films-grid">
          ${S.projects.slice(0, S.featuredCount || 4).map((p, i) => `
            <a class="film-card reveal" style="--d:${i * 0.08}s" href="${projectUrl(p)}">
              ${mediaHTML(p, "film-thumb", p.title + " - still")}
              <div class="film-meta">
                <span class="film-title">${esc(p.title)}</span>
                <span class="film-cat">${esc([p.type, p.year].filter(Boolean).join(" · "))}${p.unreleased ? " · unreleased" : ""}</span>
              </div>
            </a>`).join("")}
        </div>
      </section>`;
  }

  /* ============ FILM PAGE ============ */
  function renderFilm() {
    const root = $("#page");
    const F = S.filmPage;
    root.innerHTML = `
      <section class="film-intro" id="filmIntro">
        ${mediaHTML({ image: F.introImage }, "film-intro-media", "On set")}
        <div class="film-intro-text">
          <h1 class="film-intro-headline rise" style="--d:.05s">${esc(F.introText)}</h1>
        </div>
        <button class="scroll-cue rise" style="--d:.3s" data-scroll-to="#viewer">&darr; ${esc(S.hero.scrollHint)}</button>
      </section>

      <section class="viewer" id="viewer">
        <div class="viewer-stage" id="viewerStage">
          <div class="viewer-bgs" id="viewerBgs"></div>
          <div class="viewer-top">
            <button class="viewer-navbtn" id="toIntro">&uarr; Intro</button>
            <button class="viewer-navbtn" id="toOverview">${esc(F.overviewTitle)}</button>
          </div>
          <div class="viewer-list-wrap"><ul class="viewer-list" id="viewerList"></ul></div>
          <div class="viewer-credits" id="viewerCredits"></div>
          <div class="viewer-cue" id="viewerCue">Scroll for more projects<span class="cue-arrows"><i></i><i></i></span></div>
          <div class="viewer-bottom">
            <span class="viewer-year" id="viewerYear"></span>
            <span class="viewer-filters" id="viewerFilters"></span>
            <span class="viewer-count" id="viewerCount"></span>
          </div>
        </div>
      </section>

      <div class="overview" id="overview" aria-hidden="true">
        <button class="viewer-navbtn overview-back" id="overviewBack">&larr; Back</button>
        <div class="overview-table-wrap">
          <div class="overview-head"><span>Year</span><span>Title</span><span></span></div>
          <ul class="overview-list" id="overviewList"></ul>
        </div>
        <div class="overview-preview" id="overviewPreview"></div>
      </div>`;

    const state = { filter: "All", projects: [], active: 0 };

    function types() {
      const t = ["All"];
      S.projects.forEach((p) => { if (p.type && t.indexOf(p.type) < 0) t.push(p.type); });
      return t;
    }
    const filmOrder = S.projects.slice().sort((a, b) => (b.year || "0").localeCompare(a.year || "0"));
    const fppIdx = filmOrder.findIndex((p) => p.slug === "future-presence-passed");
    if (fppIdx > 0) filmOrder.unshift(filmOrder.splice(fppIdx, 1)[0]);
    function filtered() {
      return filmOrder.filter((p) => state.filter === "All" || p.type === state.filter);
    }
    function pad(n) { return String(n).padStart(2, "0"); }

    function buildFilters() {
      $("#viewerFilters").innerHTML = types().map((t) =>
        `<button class="filter-pill ${t === state.filter ? "on" : ""}" data-type="${esc(t)}">${esc(t)}</button>`).join("");
      $$("#viewerFilters .filter-pill").forEach((b) => b.addEventListener("click", () => {
        state.filter = b.dataset.type;
        state.active = 0;
        buildAll();
        jump(0, true);
      }));
    }

    function buildAll() {
      state.projects = filtered();
      const n = state.projects.length;
      $("#viewer").style.height = (n + 1) * 100 + "vh";
      $("#viewerBgs").innerHTML = state.projects.map((p, i) =>
        `<div class="viewer-bg" data-i="${i}"><a class="viewer-bg-link" href="${projectUrl(p)}" aria-label="Open ${esc(p.title)}">${mediaHTML(p, "viewer-bg-media", p.title)}<div class="viewer-bg-shade"></div></a></div>`).join("");
      $("#viewerList").innerHTML = state.projects.map((p, i) =>
        `<li data-i="${i}"><button aria-label="Select ${esc(p.title)}"><strong>${esc(p.title)}</strong></button></li>`).join("");
      $$("#viewerList li button").forEach((b, i) => b.addEventListener("click", () => jump(i)));
      buildFilters();
      buildOverview();
      update(true);
    }

    function update(force) {
      const v = $("#viewer");
      const rect = v.getBoundingClientRect();
      const total = v.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / (total || 1)));
      const idx = Math.min(state.projects.length - 1, Math.floor(p * state.projects.length));
      if (idx !== state.active || force) {
        state.active = idx;
        const proj = state.projects[idx];
        $$("#viewerBgs .viewer-bg").forEach((bg) => bg.classList.toggle("on", +bg.dataset.i === idx));
        $$("#viewerList li").forEach((li) => {
          const active = +li.dataset.i === idx;
          li.classList.toggle("on", active);
          li.querySelector("button").setAttribute("aria-current", active ? "true" : "false");
        });
        const list = $("#viewerList");
        const row = list.children[idx];
        const wrapH = $(".viewer-list-wrap").offsetHeight;
        const rowCenter = row ? row.offsetTop + row.offsetHeight / 2 : 0;
        list.style.transform = "translateY(" + (wrapH / 2 - rowCenter) + "px)";
        $("#viewerCredits").innerHTML = (proj.credits || []).filter((c) => c.role === "Director").slice(0, 1).map((c) =>
          `<div class="credit-row"><span>${esc(c.role)}</span><strong>${esc(c.name)}</strong></div>`).join("") +
          `<a class="viewer-open text-link" href="${projectUrl(proj)}">View project &rarr;</a>`;
        $("#viewerYear").textContent = proj.year || (proj.unreleased ? "Unreleased" : "");
        $("#viewerCount").textContent = pad(idx + 1) + " / " + pad(state.projects.length);
        $("#viewerCue").classList.toggle("hidden", idx >= state.projects.length - 1);
      }
    }

    function jump(i, instant) {
      const v = $("#viewer");
      const top = v.offsetTop;
      window.scrollTo({ top: top + (i + 0.01) * window.innerHeight, behavior: instant || reduced ? "auto" : "smooth" });
    }

    function buildOverview() {
      $("#overviewList").innerHTML = state.projects.map((p, i) => `
        <li data-i="${i}">
          <button class="overview-row ${i === state.active ? "on" : ""}">
            <span class="ov-year">${esc(p.year || (p.unreleased ? "TBA" : ""))}</span>
            <span class="ov-title">${esc(p.title)}</span>
            <span class="ov-type">${esc(p.type || "")}</span>
          </button>
        </li>`).join("");
      const preview = $("#overviewPreview");
      function showPreview(i) {
        const p = state.projects[i];
        preview.innerHTML = mediaHTML(p, "ov-thumb", p.title) +
          `<div class="ov-cap"><span>${esc(p.title)}</span><span>${esc([p.type, p.year].filter(Boolean).join(", "))}</span></div>`;
        $$("#overviewList .overview-row").forEach((r) => r.classList.toggle("on", +r.parentElement.dataset.i === i));
      }
      $$("#overviewList li").forEach((li) => {
        const i = +li.dataset.i;
        li.addEventListener("mouseenter", () => showPreview(i));
        li.addEventListener("focusin", () => showPreview(i));
        li.addEventListener("click", () => { location.href = projectUrl(state.projects[i]); });
      });
      if (state.projects.length) showPreview(state.active);
    }

    function openOverview() { $("#overview").classList.add("open"); $("#overview").setAttribute("aria-hidden", "false"); }
    function closeOverview() { $("#overview").classList.remove("open"); $("#overview").setAttribute("aria-hidden", "true"); }

    $("#toIntro").addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }));
    $("#toOverview").addEventListener("click", openOverview);
    $("#overviewBack").addEventListener("click", closeOverview);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeOverview(); });
    document.addEventListener("scroll", () => update(false), { passive: true });
    window.addEventListener("resize", () => update(true));

    buildAll();
  }

  /* ============ PROJECT PAGE ============ */
  function renderProject() {
    const root = $("#page");
    const slug = new URLSearchParams(location.search).get("p");
    const idx = S.projects.findIndex((p) => p.slug === slug);
    if (idx < 0) {
      root.innerHTML = `<section class="project-missing"><h1>Project not found.</h1><p><a class="text-link" href="film.html">&larr; Back to films</a></p></section>`;
      return;
    }
    const p = S.projects[idx];
    const prev = S.projects[(idx - 1 + S.projects.length) % S.projects.length];
    const next = S.projects[(idx + 1) % S.projects.length];
    document.title = S.name + " - " + p.title;

    const embed = ytEmbed(p.videoUrl);
    const player = embed
      ? `<div class="project-cinema rise" style="--d:.15s">
          <div class="project-player" id="projectPlayer">
            <button class="cinema-poster" id="cinemaPlay" aria-label="Play ${esc(p.title)}">
              <img src="${esc(p.image || ytThumb(p.videoUrl))}" alt="" fetchpriority="high">
              <span class="cinema-play-mark" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>
              <span class="cinema-poster-caption">Watch film</span>
            </button>
          </div>
          <div class="cinema-caption"><span>${esc(p.title)}</span><a href="${esc(p.videoUrl)}" target="_blank" rel="noopener">YouTube &nearr;</a></div>
        </div>`
      : `<div class="project-player project-player-unreleased rise" style="--d:.15s"><div class="placeholder"><span class="ph-label">Unreleased - coming soon</span></div></div>`;

    const metaRows = [
      p.type ? { role: "Type", name: p.type } : null,
      p.year ? { role: "Year", name: p.year } : null,
      p.unreleased ? { role: "Status", name: "Unreleased" } : null
    ].filter(Boolean);
    const rows = metaRows.concat(p.credits || []);

    root.innerHTML = `
      <button class="project-close" id="projectClose" aria-label="Back to films">&times;</button>
      <section class="project-hero">
        <h1 class="project-title rise" style="--d:.05s">${esc(p.title)}</h1>
        <p class="project-meta rise" style="--d:.15s">${esc([p.type, p.year].filter(Boolean).join(", "))}${p.unreleased ? (p.type || p.year ? ", " : "") + "Unreleased" : ""}</p>
        <div class="project-main">
          <div class="project-left">
            ${player}
            ${p.url ? `<p class="project-source rise" style="--d:.25s"><a class="text-link" href="${esc(p.url)}" target="_blank" rel="noopener">View source &nearr;</a></p>` : ""}
          </div>
          <aside class="project-credits rise" style="--d:.25s">
            <h2>Credits</h2>
            ${rows.map((c) => `<div class="pc-row"><span>${esc(c.role)}</span><strong>${esc(c.name)}</strong></div>`).join("")}
          </aside>
        </div>
      </section>
      <section class="project-images">
        <h2 class="reveal">Images</h2>
        <div class="project-images-grid">
          ${(p.images || []).map((img, i) => img
            ? `<div class="pi-cell reveal" style="--d:${i * 0.06}s"><img src="${esc(img)}" alt="${esc(p.title)} still ${i + 1}" loading="lazy"></div>`
            : `<div class="pi-cell reveal" style="--d:${i * 0.06}s"><div class="placeholder"><span class="ph-label">${esc(p.title)} - still ${i + 1}</span></div></div>`).join("")}
        </div>
      </section>
      <nav class="project-pn reveal">
        <a class="pn-prev" href="${projectUrl(prev)}"><span>Previous project</span><strong>${esc(prev.title)}</strong></a>
        <a class="pn-next" href="${projectUrl(next)}"><span>Next project</span><strong>${esc(next.title)}</strong></a>
      </nav>`;

    const play = $("#cinemaPlay");
    if (play) play.addEventListener("click", () => {
      // Load the official player only after a visitor chooses to watch.
      // No overlays, cropping or attribution hiding during playback.
      const iframe = document.createElement("iframe");
      iframe.src = embed + "&autoplay=1";
      iframe.title = p.title;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      $("#projectPlayer").replaceChildren(iframe);
      iframe.focus();
    });
    $("#projectClose").addEventListener("click", () => { location.href = "film.html"; });
  }

  /* ============ ABOUT PAGE ============ */
  function renderAbout() {
    const root = $("#page");
    const A = S.about;
    root.innerHTML = `
      <section class="about-hero">
        <div class="about-portrait rise" style="--d:.1s">
          ${(A.portrait || (window.ABOUT_IMAGES && window.ABOUT_IMAGES.portrait)) ? `<img src="${esc((window.ABOUT_IMAGES && window.ABOUT_IMAGES.portrait) || A.portrait)}" alt="${esc(S.name)}">` : `<div class="placeholder portrait-ph"><span class="ph-label">${esc(S.name)} - portrait</span></div>`}
        </div>
        <div class="about-hero-text">
          <p class="hero-eyebrow rise" style="--d:.05s">${esc(S.name)}</p>
          <h1 class="hero-headline rise" style="--d:.15s">${esc(A.headline)}</h1>
        </div>
      </section>
      <section class="statement">
        <p class="statement-text word-reveal">${esc(A.statement)}</p>
        ${(A.statementSig || (window.ABOUT_IMAGES && window.ABOUT_IMAGES.sig)) ? `<img class="statement-sig reveal" style="--d:.2s" src="${esc((window.ABOUT_IMAGES && window.ABOUT_IMAGES.sig) || A.statementSig)}" alt="Walt Disney signature">` : (A.statementBy ? `<p class="statement-by reveal" style="--d:.2s">- ${esc(A.statementBy)}</p>` : "")}
      </section>
      ${A.note ? `<section class="about-note reveal" style="--d:.1s"><img src="${esc(A.note)}" alt="Handwritten note from James: Hey, my name is Jimmy, or whatever you wanna call me. Ever since I was ten I have been obsessed with one thing: making movies, and now I have that opportunity. But as much as I like making my own projects, I love other people doing what I love most - filmmaking. So if you have any questions or want to work together, reach out!" loading="lazy"></section>` : ""}
      <section class="about-body">
        ${A.body.map((p, i) => `<p class="reveal" style="--d:${i * 0.1}s">${esc(p)}</p>`).join("")}
        <dl class="about-facts reveal" style="--d:.2s">
          ${A.facts.map((f) => `<div class="fact-row"><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("")}
        </dl>
        <p class="reveal" style="--d:.3s"><a class="text-link" href="#contact" data-open-contact>${esc(A.linkLabel)} &rarr;</a></p>
      </section>`;
  }

  /* ============ FREELANCE PAGE ============ */
  function renderFreelance() {
    const root = $("#page");
    const F = S.freelance || {};
    root.innerHTML = `
      <section class="freelance-hero">
        <p class="hero-eyebrow rise" style="--d:.05s">${esc(S.name)}</p>
        <h1 class="hero-headline rise" style="--d:.15s">${esc(F.headline || "Freelance.")}</h1>
      </section>
      <section class="statement">
        <p class="statement-text word-reveal">${esc(F.statement || "")}</p>
      </section>
      <section class="freelance-intro">
        ${(F.intro || []).map((p, i) => `<p class="reveal" style="--d:${(i * 0.1).toFixed(2)}s">${esc(p)}</p>`).join("")}
      </section>
      <section class="freelance-services">
        <div class="section-head reveal"><h2 class="section-title">${esc(F.servicesTitle || "Services")}</h2></div>
        <dl class="svc-list">
          ${(F.services || []).map((sv, i) => `<div class="svc-row reveal" style="--d:${(i * 0.05).toFixed(2)}s"><dt>${esc(sv.name)}</dt><dd>${esc(sv.detail)}</dd></div>`).join("")}
        </dl>
      </section>
      <section class="freelance-testimonials">
        <div class="section-head reveal"><h2 class="section-title">${esc(F.testimonialsTitle || "Testimonials")}</h2></div>
        <div class="quote-grid">
          ${(F.testimonials || []).map((t, i) => `
            <figure class="quote-card reveal" style="--d:${(i * 0.1).toFixed(2)}s">
              <blockquote>&ldquo;${esc(t.quote)}&rdquo;</blockquote>
              ${t.name ? `<figcaption><strong>${esc(t.name)}</strong>${t.role ? `<span>${esc(t.role)}</span>` : ""}</figcaption>` : ""}
            </figure>`).join("")}
        </div>
      </section>
      <section class="freelance-cta">
        <p class="freelance-cta-line reveal">${esc(F.ctaLine || "")}</p>
        <div class="cta-row reveal" style="--d:.15s">
          <a class="btn-solid" href="#contact" data-open-contact>${esc(F.linkLabel || "Get in touch")} &rarr;</a>
          <a class="btn-outline" href="resume.html">${esc(F.resumeLabel || "View resume")}</a>
        </div>
      </section>`;
  }

  /* ============ SIMPLE PLACEHOLDER PAGES (resume) ============ */
  function renderSimplePage(key) {
    const root = $("#page");
    const P = (S.pages && S.pages[key]) || { headline: key, lines: [] };
    root.innerHTML = `
      <section class="simple-page">
        <p class="hero-eyebrow rise" style="--d:.05s">${esc(S.name)}</p>
        <h1 class="hero-headline rise" style="--d:.15s">${esc(P.headline)}</h1>
        <div class="simple-body">
          ${(P.lines || []).map((l, i) => `<p class="reveal" style="--d:${(0.25 + i * 0.1).toFixed(2)}s">${esc(l)}</p>`).join("")}
          <p class="reveal" style="--d:.5s"><a class="text-link" href="#contact" data-open-contact>Get in touch &rarr;</a></p>
        </div>
      </section>`;
  }

  /* ============ VIEWS COUNTER ============ */
  function initViewsCounter() {
    const sec = $("#viewsStat");
    if (!sec) return;
    const el = $("#viewsCount");
    const FALLBACK = 1096868; // manual tally baseline, Nov 2 2026
    const fmt = (n) => Math.round(n).toLocaleString("en-US");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = (total) => {
      if (reduced) { el.textContent = fmt(total); return; }
      const start = performance.now(), dur = 2200;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(total * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    fetch("/api/views")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("bad"))))
      .then((d) => (d && d.total) || FALLBACK)
      .catch(() => FALLBACK)
      .then((total) => {
        let played = false;
        const io = new IntersectionObserver((entries) => {
          if (!entries[0].isIntersecting || played) return;
          played = true;
          io.disconnect();
          show(total);
        }, { threshold: 0.4 });
        io.observe(sec);
      });
  }

  /* ============ BOOT ============ */
  renderHeader();
  renderFooter();
  renderModal();
  if (PAGE === "film") renderFilm();
  else if (PAGE === "about") renderAbout();
  else if (PAGE === "project") renderProject();
  else if (PAGE === "freelance") renderFreelance();
  else if (PAGE === "resume") renderSimplePage(PAGE);
  else renderHome();
  initViewsCounter();
  pageTransitions();
  reveals();
  wordReveal();
  marquee();
  scrollCue();
})();
