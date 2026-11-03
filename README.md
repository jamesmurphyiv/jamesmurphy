# James Murphy - portfolio site

A hand-coded one-page site. No build tools, no accounts needed to edit it.

## The files

| File | What it's for |
|---|---|
| `content.js` | **The only file you edit.** All text, links, and photo slots. |
| `assets/` | Drop your photos / video here. |
| `index.html` | Page structure. Don't touch. |
| `style.css` | Design. Don't touch unless you want design changes. |
| `script.js` | Fills the page from `content.js`. Don't touch. |

## How to change text

Open `content.js` in any text editor (or on github.com - see below).
Every line of site text is there in plain English with comments.
Change the words between the quotes, save, done.

## How to add photos or video

1. Drop the file into the `assets/` folder (e.g. `assets/mystill.jpg`).
2. In `content.js`, find the film slot and set:
   `image: "assets/mystill.jpg"`
3. Hero background: set `hero.image` (photo) or `hero.video` (mp4).
   Empty `null` fields show tasteful dark placeholders.

## How to publish your changes

- **Right now:** the site is a manual upload on Cloudflare. Ask me
  (Instinct) to re-upload after edits, or do it in the Cloudflare
  dashboard (Workers & Pages → jamesmurphy → upload new files).
- **Soon (the plan):** once your free GitHub account exists, the files
  live in a GitHub repo and every edit you make on github.com goes
  live automatically - no re-uploading, ever.

## Live address

https://jamesmurphy.pages.dev (once deployed)
