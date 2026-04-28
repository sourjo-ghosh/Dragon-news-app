# Dragon News App

A modern news portal built with Next.js App Router, featuring category-wise news browsing, article detail pages, social/email authentication, and protected routes for selected sections.

<img width="1436" height="780" alt="Screenshot From 2026-04-28 20-41-08" src="https://github.com/user-attachments/assets/55b413b2-cb74-4f2c-a0d3-01c216e54eb5" />


## Overview

Dragon News App fetches live news data from the Programming Hero news API and presents it in a clean, responsive interface with light/dark theme support.  
The project uses Better Auth with MongoDB for secure authentication and session handling.

## Key Features

- Category-based news feed with dynamic routing (`/category/[id]`)
- Detailed article page with dynamic metadata (`/news/[id]`)
- User authentication:
  - Email/password signup and login
  - Google OAuth login
  - GitHub OAuth login
- Session-aware navigation (shows user profile and logout when authenticated)
- Protected routes using `proxy.js` matcher:
  - `/career`
  - `/news/:path*`
- Light/dark theme toggle (`next-themes`)
- Toast notifications for auth actions and user feedback
- Responsive UI built with HeroUI and Tailwind CSS

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript / JSX
- **UI:** HeroUI, Tailwind CSS v4
- **Auth:** Better Auth (`better-auth`)
- **Database:** MongoDB (`mongodb`, `@better-auth/mongo-adapter`)
- **Theming:** `next-themes`
- **Notifications:** `react-hot-toast`

## Project Structure

```text
src/
  app/
    (auth)/
      login/page.jsx
      signup/page.jsx
    (main)/
      category/[id]/page.jsx
      news/[id]/page.jsx
      career/page.jsx
      about-us/page.jsx
    api/auth/[...all]/route.js
    components/
      homePage/
      shared/
    layout.js
    page.jsx
  lib/
    auth.js
    auth-client.js
    data.js
  proxy.js
```

## Environment Variables

Create a `.env.local` file in the project root:

```bash
MONGO_URI=your_mongodb_connection_string
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

> Keep these values private and never commit real credentials.

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/sourjo-ghosh/Dragon-news-app.git
cd dragon-news-app
```

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment

- Add your `.env.local` file using the variables listed above.
- Make sure MongoDB is reachable from your machine.

### 4) Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Authentication Notes

- Auth routes are exposed through `src/app/api/auth/[...all]/route.js`.
- Server-side auth configuration lives in `src/lib/auth.js`.
- Client helpers (`signIn`, `signUp`, `useSession`) are in `src/lib/auth-client.js`.
- Route protection logic is implemented in `src/proxy.js`.

## Deployment

You can deploy this app to Vercel or any Node.js-compatible platform.

Minimum deployment requirements:

- MongoDB connection string available in runtime environment
- OAuth callback URLs configured for Google and GitHub providers
- `BETTER_AUTH_URL` set to the deployed domain

## Future Improvements

- Save/bookmark news articles for logged-in users
- Add server-side caching for API responses
- Add unit/integration tests for auth and route protection
- Improve SEO with richer Open Graph metadata

## License

This project is for educational and portfolio use.  
