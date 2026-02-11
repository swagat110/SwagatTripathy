# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/40188227-7daa-4aed-a038-40d93649fc72

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/40188227-7daa-4aed-a038-40d93649fc72) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Resume

Place your resume PDF in **`public/Swagat-Tripathy-Resume.pdf`** (or update the filename in `src/components/Resume.tsx` if you use a different name). It will be served from your GitHub Pages site and the Resume section will link to it (View / Download).

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

**Option 1: GitHub Pages (static site)**

This repo includes a workflow that builds and deploys the app to GitHub Pages on every push to `main` or `master`.

1. Push this repo to GitHub (if you haven’t already).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push a commit to `main` (or run the “Deploy to GitHub Pages” workflow from the **Actions** tab).
5. After the workflow runs, the site will be at `https://<username>.github.io/<repo-name>/`.
6. **Featured Projects (pinned repos):** To show your GitHub pinned repos on the live site, add a repo secret: **Settings → Secrets and variables → Actions** → **New repository secret** → name `PINNED_REPOS_TOKEN`, value = your GitHub personal access token (read-only is enough). The build will then fetch pinned repos and embed them in the site.

To run the deploy manually: **Actions** tab → click **Deploy to GitHub Pages** in the left sidebar → **Run workflow** (button on the right) → **Run workflow**.

**Option 2: Lovable**

Open [Lovable](https://lovable.dev/projects/40188227-7daa-4aed-a038-40d93649fc72) and click Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
