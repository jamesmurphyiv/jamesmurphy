# James Murphy - portfolio site

A hand-coded site. No build tools, no accounts needed to edit it.

**Live:** https://jamesmurphy.pages.dev
**Edit on github.com, commit, and the site updates itself in about a minute.**

## The files

| File | What it's for |
|---|---|
| `content.js` | **The only file you edit.** All text, links, credits, and photo slots. |
| `assets/` | Drop your photos / video here. |
| `index.html` | Home page. Don't touch. |
| `film.html` | Film page (all projects). Don't touch. |
| `about.html` | About page. Don't touch. |
| `project.html` | Template for every project page. Don't touch. |
| `style.css` | Design. Don't touch unless you want design changes. |
| `script.js` | Fills the pages from `content.js`. Don't touch. |

## The pages

- **Home** - full-screen hero, brand strip, statement, featured projects.
- **Film** - intro, then a scroll-through player of every project,
  plus an Index view (top-right) listing everything in a table.
- **About** - portrait, bio, quick facts.
- **Project pages** - one per project, generated automatically.
  A project's page lives at `project.html?p=its-slug`.
- **Contact** - a popup (not a page). It opens from the nav,
  the hero button, and the About page.

## How to change text

Open `content.js` (on github.com: tap it, then the pencil).
Every line of site text is there in plain English with comments.
Change the words between the quotes, Commit changes, done.

## How to add, edit, or remove a project

Everything is one block in the `projects` list in `content.js`:

```js
{ slug: "my-film", title: "My Film", type: "Short film", year: "2026",
  image: null,
  videoUrl: "https://www.youtube.com/watch?v=XXXX&t=12s",
  images: [null, null, null, null, null, null],
  credits: [
    { role: "Director", name: "James Murphy" }
  ] },
```

- Copy a block, change it, commit. It appears on the home grid,
  the Film page, and gets its own page automatically.
- `slug` is the short id in its page link. Lowercase, dashes,
  no spaces. Never reuse one.
- `videoUrl` keeps the YouTube start time (`&t=`) - the project
  page player starts there. Cards use the YouTube thumbnail.
- Not out yet? Set `videoUrl: null` and add `unreleased: true`.
- To remove a project, delete its block.

## How to add photos or video

1. Drop the file into the `assets/` folder (e.g. `assets/mystill.jpg`).
2. In `content.js`, set the matching slot: `image: "assets/mystill.jpg"`.
3. Hero background: set `hero.image` (photo) or `hero.video` (mp4).
4. Project page stills: fill the `images` list of that project.
   Empty `null` slots show tasteful dark placeholders.

## The contact form

Messages land in James's Gmail via a free relay (FormSubmit).
No account, no cost. If the relay ever fails, the popup offers
a plain email fallback instead.
