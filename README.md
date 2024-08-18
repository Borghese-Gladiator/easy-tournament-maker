# Easy Tournament Maker
Create tournaments in a FREE and SIMPLE manner via open source software instead of existing solutions that all seem to cost money per tournament.

# Notes
## Tech Stack
- Next.js 14 (page router)
- Supabase - open source authentication
- HappyKit - feature flags for Next.js

## Resources
<details>
<summary>Links</summary>

Supabase
- https://supabase.com/docs/guides/auth/server-side/nextjs - click Pages Router tab

HappyKit
- https://frontend-digest.com/using-feature-flags-in-next-js-c5c8d0795a2
</details>
### Thoughts
Next.js App Router vs Page Router - I have reservations about using App Router as I had quite a number of client-server issues in the past when spinning up App Router projects, even after it had reached "stable" status (particularly with Material UI I think?)

### Steps
- `yarn create next-app`
	```
	√ Would you like to use TypeScript? ... Yes
	√ Would you like to use ESLint? ... Yes
	√ Would you like to use Tailwind CSS? ... No
	√ Would you like to use `src/` directory? ... Yes
	√ Would you like to use App Router? (recommended) ... No
	√ Would you like to customize the default import alias (@/*)? ... No / Yes
	```
- implement Supabase
  - `yarn add @supabase/supabase-js @supabase/ssr`
  - create [Supabase project](https://supabase.com/)
  - create `.env.local`
  - write utility functions to create Supabase clients
    - getServerSideProps client - To access Supabase from getServerSideProps.
      - getServerSideProps - Runs on the server. Reads cookies from the request, which is passed through from GetServerSidePropsContext.
    - getStaticProps client - To access Supabase from getStaticProps.
      - getStaticProps - Runs at build time, where there is no user, session, or cookies.
    - Component client - To access Supabase from within components.
      - Component - Runs on the client. Reads cookies from browser storage. Behind the scenes, createBrowserClient reuses the same client instance if called multiple times, so don't worry about deduplicating the client yourself.
    - API route client - To access Supabase from API route handlers.
      - API route - Runs on the server. Reads cookies from the request, which is passed through from NextApiRequest.
  - create `login.tsx` page
  - Change the Auth confirmation path
    - In each email template, change `{{ .ConfirmationURL }}` to `{{ .SiteURL }}/api/auth/confirm?token_hash={{ .TokenHash }}&type=signup`
  - Create a route handler for Auth confirmation
  - Make an authenticated-only page using `getServerSideProps` - `private.tsx`
    - NOTE: Server gets user session from cookies which can be spoofed by anyone. Therefore always use `supabase.auth.getUser()` to protect pages and user data. Never trust `supabase.auth.getSession()` inside server code. The `getUser()` is safe because it sends a request to the Supabase Auth server every time to revalidate the Auth token
- seed Supabase with data
  
## TO DO
- [ ] set up Supabase auth
- [ ] set up Stripe test payments
- [ ] set up HappyKit feature flags
- [X] wireframe frontend => copy Tournament Software
- [ ] implement pages
  - tournament/:tournament_id - Tournament List
    - search - filter, sort on results
  - user
    - login
    - register
    - /:user_id - profile
  - tournament
    - create - left stepper
      - tournament info
        - generate based on organizer info
      - events
      - registration fee
    - /:tournament_id - tournament about
      - delete modal (user who created or other invited)
    - draws - show brackets 
    - players - show list of event names and tables
    - enter - page after clicking enter
- [ ] API endpoints
  - ask ChatGPT to create tables for me given tournament and player modelsq
  - Player CRUD
  - Tournament CRUD
    - id, location, name, dateStart, dateEnd
  - TournamentUser
    - get organizer
    - get players
    - get results
- [ ] deploy to Vercel

User Model
- id
- role
- email
- password

Directory Structure
- components
  - layouts - Header, Footer, Sidebar
- config - seo.ts, navigation.ts
- features
- hooks
- lib - constants.ts, utils.ts
- pages
  - auth - login, register
  - api
- styles
- types

<details>
<summary>Next.js README</summary>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

</details>