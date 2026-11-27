# Ugly but Organic

A mobile-first web application that connects sellers of surplus
and imperfect organic produce with buyers, helping reduce food
waste and make organic food more affordable.

Developed as part of the Go Green frontend specialisation
project at Business Academy Aarhus.

## Tech Stack

- React
- React Router (Framework Mode, SPA)
- JavaScript
- Tailwind CSS v4
- Supabase
- Vite
- Netlify

## Getting Started

### Installation

Install project dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root and add your
Supabase credentials:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

The `.env` file should not be committed to GitHub.

### Development

Start the development server:

```bash
npm run dev
```

The application is available at http://localhost:5173.

### Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Data Fetching

Data is fetched from Supabase using React Router's
`clientLoader`. Database access is managed through
Supabase permissions and Row Level Security (RLS).

## Deployment

The application will be deployed on Netlify.

- Build command: `npm run build`
- Publish directory: `build/client`

Supabase environment variables must also be configured
in Netlify.

## Project Principles

- Mobile-first and responsive development
- Accessibility and inclusive design
- Sustainable and ethical design
- Simple, readable and maintainable code

## Project Status

In development.