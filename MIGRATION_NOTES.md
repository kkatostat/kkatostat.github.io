# Migration notes

Prepared: October 19, 2026.

## Source pages

| Original page | New page |
| --- | --- |
| [Home](https://sites.google.com/site/kkatostat/home) | `index.html` |
| [Publications](https://sites.google.com/site/kkatostat/home/research) | `publications.html` |
| [Curriculum Vitae](https://sites.google.com/site/kkatostat/home/cv) | `cv.html` |

All publicly listed navigation pages were included. Published content includes
59 published or accepted articles, 15 working papers, four lecture notes, and 21
CV entries across five sections. The profile text, eight-name academic genealogy,
research funding statement, and original publication ordering are preserved.

This is a content migration as of the date above. Publication statuses, dates,
and the original spelling were not independently revised. For example, entries
that the old website labels “accepted” still use that label. A few original
arXiv labels use a colon instead of a period; the original displayed labels and
their underlying links are retained, and search also checks the link URLs.

## Downloaded files

All 11 PDFs linked from Google Drive were downloaded and are served from the new site.

| Source asset | Status | Website path or retained link |
| --- | --- | --- |
| kengo-kato.jpg | Included in ZIP | `assets/images/kengo-kato.jpg` |
| gaussian-approximation-comments.pdf | Included in ZIP | `assets/files/gaussian-approximation-comments.pdf` |
| quasi-bayesian-npiv-supplement.pdf | Included in ZIP | `assets/files/quasi-bayesian-npiv-supplement.pdf` |
| functional-linear-quantile-regression-corrections.pdf | Included in ZIP | `assets/files/functional-linear-quantile-regression-corrections.pdf` |
| functional-linear-quantile-regression-supplement.pdf | Included in ZIP | `assets/files/functional-linear-quantile-regression-supplement.pdf` |
| moment-convergence-bootstrap-m-estimators.pdf | Included in ZIP | `assets/files/moment-convergence-bootstrap-m-estimators.pdf` |
| 061_3_0531.pdf | Original external link retained | [Original link](http://www.ism.ac.jp/editsec/aism/pdf/061_3_0531.pdf) |
| measurability-bayesian-partially-identified-models.pdf | Included in ZIP | `assets/files/measurability-bayesian-partially-identified-models.pdf` |
| empirical-process-theory.pdf | Included in ZIP | `assets/files/empirical-process-theory.pdf` |
| advanced-probability-for-statisticians.pdf | Included in ZIP | `assets/files/advanced-probability-for-statisticians.pdf` |
| probability-theory-japanese.pdf | Included in ZIP | `assets/files/probability-theory-japanese.pdf` |
| mathematical-statistics-japanese.pdf | Included in ZIP | `assets/files/mathematical-statistics-japanese.pdf` |
| kengo-kato-cv.pdf | Included in ZIP | `assets/files/kengo-kato-cv.pdf` |

The publisher-hosted article PDF remains an external link, just as it was on
the original site. arXiv, journal, university, Google Scholar, Mathematics
Genealogy, and collaborators' software links are preserved as external links.
Their continued availability is controlled by those services.

Downloaded PDFs and the portrait were copied without altering their file
contents. Original URLs and SHA-256 checksums for included files are recorded
in `migration-source-map.json`.

## Website changes

- Consistent navigation between Home, Publications, and Curriculum Vitae.
- A responsive academic layout with readable typography and red accents.
- An optional browser-local publication search with a clear control and result
  counts. All entries remain available without JavaScript.
- Descriptive image text, a keyboard skip link, visible focus indicators,
  semantic headings, and print styles.
- Relative paths that work at either a personal GitHub Pages address or inside
  a project repository's URL prefix.

## Verification

The three pages were compared against the source extraction for complete text,
correct list order, and preserved links. Local paths, page anchors, HTML IDs,
and ARIA references were checked. Search was exercised against the real paper
texts and links, including author/year queries, canonical arXiv numbers,
ligatures, zero results, clearing results, and preserving list numbering.

Browser rendering was not tested in the preparation environment. The website
can be reviewed by opening the extracted `index.html`; no local server is
required.

## After publishing

The ZIP does not change the existing Google Site. Add a move notice there after
you have verified the new address. Instructions are in `README.md`.
