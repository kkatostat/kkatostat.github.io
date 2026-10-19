/* Optional search. All papers and links are present in the HTML without JavaScript. */
(() => {
  "use strict";
  const form = document.querySelector("#publication-search");
  const input = document.querySelector("#publication-query");
  const status = document.querySelector("#search-status");
  if (!form || !input || !status) return;

  // Preserve the original list numbers during a search without making editing harder.
  for (const list of document.querySelectorAll("ol.papers")) {
    Array.from(list.children).forEach((element, index) => {
      element.value = index + 1;
    });
  }

  const normalize = (text) => text.normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, " ").trim();
  const entries = Array.from(document.querySelectorAll("[data-paper]"), (element) => ({
    element,
    text: normalize(element.textContent + " " + Array.from(element.querySelectorAll("a[href]"),
      (anchor) => anchor.getAttribute("href")).join(" "))
  }));

  function filterPapers() {
    const query = normalize(input.value);
    const terms = query.split(" ").filter(Boolean);
    let visible = 0;
    for (const entry of entries) {
      const matches = terms.every((term) => entry.text.includes(term));
      entry.element.hidden = !matches;
      if (matches) visible += 1;
    }
    for (const section of document.querySelectorAll("[data-paper-section]")) {
      const emptyMessage = section.querySelector(".empty-message");
      if (emptyMessage) {
        emptyMessage.hidden = Array.from(section.querySelectorAll("[data-paper]"))
          .some((element) => !element.hidden);
      }
    }
    status.textContent = query
      ? `${visible} of ${entries.length} papers shown.`
      : `${entries.length} papers. Search by title, author, year, or arXiv number.`;
  }

  form.addEventListener("submit", (event) => event.preventDefault());
  form.addEventListener("reset", (event) => {
    event.preventDefault();
    input.value = "";
    filterPapers();
    input.focus();
  });
  input.addEventListener("input", filterPapers);
  filterPapers();
  form.hidden = false;
})();
