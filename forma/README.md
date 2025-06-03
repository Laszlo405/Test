# FORMA

FORMA is a minimalist, AI-assisted web platform for transforming written prompts into 3D-printable objects.
This directory holds the application source.

## Setup

1. Ensure [Node.js](https://nodejs.org/) is installed (v18 or later is recommended).
2. Install dependencies:

```bash
npm install
```

## Development Commands

Start the development server:

```bash
npm run dev
```

Generate a production build:

```bash
npm run build
```

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
STRIPE_PUBLISHABLE_KEY=<your-stripe-public-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

These variables configure Supabase and Stripe integrations used by the project.
