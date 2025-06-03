# FORMA

**Thought to Matter.** A minimalist, AI-assisted platform for turning natural language prompts into 3D printable forms.

This repository contains the MVP implementation built with React, Vite and Tailwind CSS. STL generation uses a simple inline placeholder when no Meshy.ai API key is provided.

## Features

- Prompt submission form
- 3D preview using `<model-viewer>`
- Prompt categories
- Supabase storage for prompts and orders
- Stripe test checkout for print-on-demand
- Public gallery and per-model view
- Gallery search and category filter

## Getting Started

```bash
cd forma
npm install
npm run dev
```

Create a `.env` file based on `.env.example` with your Supabase and Stripe keys.
Optionally set `VITE_MESHY_API_KEY` for real model generation if you have access
to Meshy.ai.

## Database Schema

```
Table prompt_queue:
  id uuid PK
  prompt text
  stl_url text
  preview_url text
  category text
  is_public boolean default true
  created_at timestamptz default now()

Table orders:
  id uuid PK
  model_id uuid FK
  email text
  stripe_session text
  created_at timestamptz
```

## License

See [LICENSE](LICENSE) for details.
