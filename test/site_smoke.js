const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve("_site");
const origin = "https://wuxiyang1996.github.io";
const pages = ["index.html", "publications/index.html", "cv/index.html", "news/index.html"];

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  assert.match(html, /Xiyang Wu/, `${page}: personal content is missing`);
  assert.doesNotMatch(html, /Albert Einstein|\{%|\{\{/, `${page}: template content was not rendered`);

  // Validate local navigation, scripts, styles, images, and the embedded CV.
  for (const match of html.matchAll(/\b(?:href|src|data)=["']([^"']+)["']/g)) {
    // Absolute links can point to project sites deployed from separate repositories.
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(match[1])) continue;
    const url = new URL(match[1].replaceAll("&amp;", "&"), `${origin}/${page}`);
    if (url.origin !== origin) continue;
    const target = path.join(root, decodeURIComponent(url.pathname));
    assert.ok(fs.existsSync(target), `${page}: missing local resource ${url.pathname}`);
    if (fs.statSync(target).isDirectory()) {
      assert.ok(fs.existsSync(path.join(target, "index.html")), `${page}: missing index for ${url.pathname}`);
    }
  }
}

const pdf = fs.readFileSync(path.join(root, "assets/pdf/CV_XiyangWu.pdf"));
assert.equal(pdf.subarray(0, 5).toString(), "%PDF-", "CV download is not a PDF");
assert.ok(pdf.includes(Buffer.from("%%EOF")), "CV PDF is incomplete");
console.log("Personal site pages, local resources, and CV PDF passed.");
