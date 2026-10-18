# Portfolio site

A plain static site: `index.html` + `content.json` + `assets/` + `resume.pdf`. No build step and nothing to install.

## Put it online (pick one)
**GitHub Pages (simplest):** create a repo, upload every file in this folder (drag and drop on github.com), then Settings > Pages > Deploy from branch > `main` / root.
**Netlify:** New site > Import from GitHub, build command `npm run build`, publish directory `.` (a broken `content.json` then fails the build and the live site stays on its last good version).

## Update it later (all from github.com in the browser)
| To change | Do this |
|---|---|
| Resume | Upload a new PDF named `resume.pdf` to the repo root, replacing the old one. The link never changes. |
| Currently exploring | Open `content.json`, click the pencil, edit the `exploring` list, commit. |
| New project | Add an entry to `projects` (copy an existing one). Needs only `title` and `line`. Newest first. |
| Replace or hide a project | Set `"featured": false` (stays in the list), or delete the entry. |
| Repo count | Edit `stats.repos`. |
| LinkedIn, GitHub, email | Edit the `links` section of `content.json`. The email icon stays hidden until you add an address. |
| Photo / stickers | Replace the files in `assets/` with the same names. |

The desktop shows up to 5 featured projects; extras go into a "More projects" folder. The three-line cards in the focus panels are the `chapters` entries, so edit those by hand.
After you commit, the site refreshes in about a minute. A missing comma breaks JSON: the validate check will tell you.

## Preview on your computer
Opening `index.html` directly can't load `content.json`. Run `python3 -m http.server` in this folder and open http://localhost:8000.

## Credits
Layout and interaction ideas inspired by Elena Gonci's portfolio (https://elenagonci.com/). Sticker artwork belongs to its respective owners.
