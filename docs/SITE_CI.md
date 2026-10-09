# Personal site deployment and checks

`master` contains the source. `Deploy site` builds with the pinned Jekyll gems and publishes `_site` to `gh-pages`. In GitHub Settings → Pages, use **Deploy from a branch**, **gh-pages**, **/ (root)**. Building `master` with GitHub's built-in Jekyll cannot load the al-folio gems.

The deployment adds `.nojekyll` to the generated branch so Pages serves the built files without another Jekyll pass.

For this personal site, `Integration tests` builds the site, audits acknowledged layout overrides, and checks the main pages, local resources, and CV PDF. The upstream starter contract tests apply only to `al-org-dev/al-folio`: they prohibit the local layouts that are supported in personal sites.

`Lighthouse report` audits the published website after a successful Pages build or a manual run. Reports are saved as Actions artifacts; no dedicated token or repository-writing badge job is needed.

The CV page embeds `assets/pdf/CV_XiyangWu.pdf`; it does not use RenderCV.
