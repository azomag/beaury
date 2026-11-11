# Botanical Glow

## Router Type

This project uses the **App Router**.

## Getting Started

1. Install frontend dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── app/                # App Router pages
├── components/         # Reusable UI components
├── lib/
│   ├── utils/          # Utility functions
│   └── data/           # Static data and content
└── styles/             # CSS and style files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Django, PostgreSQL, and Docker

The API and PostgreSQL run in Docker. Product records, uploaded product photos, and Django admin files persist in Docker volumes. The optional pgAdmin service is preconfigured with a Botanical Glow database server.

```bash
cp compose.env.example .env
# Replace the example database password and Django secret in .env.
docker compose --profile tools up -d --build
docker compose exec api python manage.py createsuperuser
```

Services:

- Store API and Django admin: [http://localhost:8000](http://localhost:8000)
- pgAdmin: [http://localhost:5050](http://localhost:5050). Sign in with `PGADMIN_DEFAULT_EMAIL` and `PGADMIN_DEFAULT_PASSWORD` from `.env`; the “Botanical Glow Postgres” server is registered for you.
- PostgreSQL for local database clients: `localhost:5435` (credentials are in `.env`).

After signing in as the superuser, open `/dashboard/` or choose **Product dashboard** from the account avatar menu. Add products with drag-and-drop or image browsing; their photos are stored in the persistent `product_media` volume and appear across the home page, shop, product details, and cart. Regular accounts can browse and use the cart but cannot manage inventory. New registrations sign in automatically; the account avatar menu shows the account name/email and logout.

The seeded promo code is `BOTANICAL10` (10% off). API routes are under `/api/`: products at `/api/products/`, promo validation at `/api/promos/validate/`, registration at `/api/auth/register/`, and JWT login/refresh at `/api/auth/login/` and `/api/auth/refresh/`.

## Static export

`yarn build` exports the frontend to `out/` for manual deployment. The Django API must also be deployed because the storefront reads live products, validates promo codes, and uploads product photos through it. Before building for a deployed API, set `NEXT_PUBLIC_API_URL` to that API’s public `/api` URL; set matching `DJANGO_ALLOWED_HOSTS` and `CORS_ALLOWED_ORIGINS` in `.env`. The Docker `gateway` serves uploaded media and Django admin static files.
