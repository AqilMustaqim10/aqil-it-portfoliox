# Portfolio on GitHub Pages

This is a static React portfolio with a visual editor. Its content is stored in `src/data/portfolio.json` in GitHub. GitHub Actions builds the site after content is saved; visitors do not need a database connection.

## Local preview

Run `npm install` and `npm run dev`, then open the address shown by Vite. Open `/#admin` for the editor.

## Publish

Push this project to a GitHub repository whose default branch is `main`. In the repository, open Settings > Pages and choose **GitHub Actions** as the source. The included workflow builds and deploys on each push to `main`. For a project repository, the URL normally looks like `https://USERNAME.github.io/REPOSITORY/`. The workflow is configured for a project repository; for a `USERNAME.github.io` repository or a custom domain, set `GITHUB_PAGES_BASE` to `/` in the workflow.

## Edit content

Open the published site and add `#admin` to its URL. The editor connects to the repository and loads its latest content. Create a **fine-grained personal access token** in GitHub settings, limited to this repository with **Contents: Read and write** permission. Enter the repository name and token in the editor; do not share the token. The token is held only in the current page's memory and is sent to GitHub's API. Use the editor only on your trusted portfolio URL, as any script on a page can access credentials entered into it.

Make changes and select Save. The editor commits the content file to the default branch, and the Pages workflow publishes the update after the build completes. If the file changed after you connected, GitHub rejects the save; reconnect to load the current version before editing again. Branch protection may require a different publishing workflow.

Back up your content in GitHub. If you previously saved changes to `data/portfolio.json` using the old local server, that file is not automatically imported; copy those changes into the editor.

