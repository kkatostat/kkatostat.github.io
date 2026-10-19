# Kengo Kato — GitHub Pages website

A complete static version of the public Google Site, prepared on October 19, 2026.
The website is ready to upload. It requires no installation, terminal commands,
site generator, package manager, or custom build workflow.

## Publish the website

1. **Unzip the download on your computer.** Open the extracted folder. You should
   see `index.html`, `publications.html`, `cv.html`, and an `assets` folder.
   Double-click `index.html` to review the website locally.

2. **Open your GitHub Pages repository.** If you are starting a new personal site,
   create a **public** repository named `YOUR-USERNAME.github.io`, replacing
   `YOUR-USERNAME` with your actual GitHub username in lowercase. You can enable
   “Add README” when creating it. Use your existing Pages repository if you
   already have one.

3. **Upload the extracted contents.** On the repository's Code tab, choose
   **Add file → Upload files**. Drag in the files and folders from inside the
   extracted folder, preserving the folder structure, then commit them to `main`.
   The website's `index.html` must appear directly at the top level of the
   repository alongside `assets`, `publications.html`, and `cv.html`.

   **Upload the extracted files, not the ZIP itself, and do not put everything
   inside an extra enclosing folder.**

   An empty `.nojekyll` file is included to disable Jekyll processing. Your file
   manager may hide files whose names start with a dot. If `.nojekyll` is absent
   after upload, use **Add file → Create new file** in GitHub to create a file
   named `.nojekyll` at the repository root, then commit it.

4. **Enable GitHub Pages.** In the repository, go to **Settings → Pages**.
   Under **Build and deployment**, choose the following settings and click **Save**:

   | Setting | Value |
   | --- | --- |
   | Source | Deploy from a branch |
   | Branch | main |
   | Folder | /(root) |

   If your existing repository uses another branch, select the branch where you
   uploaded the website instead.

5. **Open the published site.** The **Visit site** link appears in Settings → Pages
   after publication. For a personal repository named `YOUR-USERNAME.github.io`,
   the address is `https://YOUR-USERNAME.github.io/`. GitHub says changes can take
   up to 10 minutes to publish. The repository's Actions tab shows deployment
   progress and errors.

A repository with an ordinary name, such as `personal-webpage`, also works: its
default address is `https://YOUR-USERNAME.github.io/personal-webpage/`. All site
assets and navigation use relative paths, so no username or repository name needs
to be inserted into the website files.

GitHub Free supports Pages from public repositories. The recommended setup above
uses a public repository. GitHub performs its normal Pages deployment; you do not
need to create an Actions workflow file for this package.

Official guidance:

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## What is included

| File or folder | Purpose |
| --- | --- |
| `index.html` | Homepage, portrait, affiliations, contact, research interests, academic profiles, and genealogy |
| `publications.html` | All 59 published or accepted articles, 15 working papers, and four lecture-note links |
| `cv.html` | Education, employment, visiting appointment, honors, editorial service, and link to the full CV |
| `assets/css/style.css` | Shared desktop, mobile, and print styles |
| `assets/js/publications.js` | Optional publication search; every paper is still visible when JavaScript is disabled |
| `assets/images/` | Downloaded portrait |
| `assets/files/` | Downloaded PDFs, including the CV, lecture notes, and supplements where recoverable |
| `home/` and `research.html` | Convenience redirects for similar paths on the new site |
| `.nojekyll` | Tells GitHub Pages to serve the prepared static files |
| `migration-source-map.json` | Original page and asset URLs, local file mappings, and file checksums |
| `MIGRATION_NOTES.md` | Exact asset inventory and migration notes |

The original text, publication order, dates, and publication statuses were
preserved. Navigation, typography, spacing, and responsive layout were rebuilt.
The site uses local CSS and JavaScript and system fonts. Publisher pages, arXiv,
Google Scholar, journal sites, and collaborators' software sites remain external
links. See `MIGRATION_NOTES.md` for the status of the source attachments.

## Update the site later

Edit the relevant HTML file directly on GitHub using its pencil icon, then commit
the change. A commit to the selected publishing branch republishes the website.

- Change your profile and contact details in `index.html`.
- Update CV entries in `cv.html`. To update a locally hosted CV PDF, replace the
  existing PDF in `assets/files/` using the same filename.
- Edit papers inside the marked lists in `publications.html`. To add a paper,
  copy an existing `<li data-paper>` entry and replace its text and links. Remove
  its copied `id` or give it a unique one. List numbering and the search total
  are calculated automatically, so neither needs to be edited manually.
- Add new PDF files to `assets/files/`, then link to them from the relevant HTML
  page with a path such as `assets/files/new-paper.pdf`.
- Replace the portrait with an image using the same filename and adjust the
  image's width and height attributes in `index.html` if its proportions change.
- Change the colors and spacing in `assets/css/style.css` if desired.

## Direct visitors from the old site

After checking the live GitHub Pages site, add a visible move notice on the old
Google Site with a link to the new address. In Google Sites, use **Settings →
Announcement banner**, turn on **Show banner**, add the message and linked button,
choose **All pages**, then **Publish**.

For example: “My webpage has moved. Please visit my new website and update your
bookmarks.” Link the button to your actual new GitHub Pages URL.

The files in this ZIP cannot change or redirect the old `sites.google.com`
address. The `home/` convenience redirects operate only on the new website.
Keep the old site available with the move notice while visitors update their
bookmarks. Update links from your university profile and other profiles you
control when convenient.

[Official Google Sites announcement-banner instructions](https://support.google.com/sites/answer/9826219?hl=en)

## If something looks wrong

- **404:** confirm `index.html` is at the root of the selected publishing branch,
  confirm Settings → Pages uses that branch and `/(root)`, and check Actions.
- **Missing photo, styles, or PDFs:** confirm the whole `assets` folder was
  uploaded with its subfolders and original filenames. Paths are case-sensitive.
- **Seeing repository files instead of the website:** use **Visit site** from
  Settings → Pages; the repository's `github.com` address is a different page.
- **An external research link fails:** the original link is recorded in
  `migration-source-map.json`. External services remain responsible for their
  own availability.

The migration was checked for content completeness and local file references.
Live browser rendering was not tested in the preparation environment. Review
the extracted site locally and the published site on your preferred devices.
