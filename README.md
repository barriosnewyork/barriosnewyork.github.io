# daniel b. barrios — Literary Website (Preview 5)

A static, responsive website designed for GitHub Pages.

## Preview
Open `index.html` in a browser. Select **enter**. Navigate through the seven sections. For best behavior, use a local web server (`python3 -m http.server 8000`) and open http://localhost:8000.

## IMPORTANT before launch

1. **Rooster photograph installed:** `assets/rooster-hero.jpg` contains the user’s original rooster photograph, with the screenshot borders removed.
2. **Author and Puerto Rico photographs installed:** the homepage now includes a portrait, and the About page now includes the selected author and Caribbean photo gallery.
3. **Contact form inactive:** Form is displayed but the send button is disabled. GitHub Pages cannot receive messages. Connect a service such as Formspree (or equivalent) and configure a private destination email before enabling submission.
4. **Content verification:** Verify exact prize names, publishing imprint wording, dates, media titles, and publication links before publishing. Forthcoming pieces link to venues, not to unpublished texts.
5. **Publication graphics:** Four supplied website screenshots have been used as publication thumbnails. Confirm any necessary permission or attribution for publication logos/artwork before public deployment.

## Install on GitHub Pages (after approval)

Your repository is `barriosnewyork/barriosnewyork.github.io`, publishing from `main` at `/ (root)`. **Back up current contents first**. Upload the **contents** of this folder (not the containing folder) to the repository root. Keep your current `CNAME` file with `danielbbarrios.com` in it. Don’t change DNS again. Wait for GitHub Pages and HTTPS verification.

## Editing
- `index.html`: navigation + outer structure
- `styles.css`: colors, type, spacing and responsive design
- `script.js`: publications, featured items, bio, teaching, news, awards, links
- `assets/`: image files

No build process or dependencies required. Google Fonts require network access; system fallbacks are provided.

## Version 5 revisions
- Added the close-up portrait to the homepage.
- Added a black-and-white author portrait to the About page.
- Added a photo gallery with the Poet’s Passage reading image, macaw, coquí, and market photographs.
- Preserved the rooster entrance, lowercase name styling, and News & Updates revisions from version 4.
