# botanical_glow-beauty-biophilic_minimalism

## Router Type

This project uses the **App Router**.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
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

## Django backend

The backend is a separate Django REST API. The exported `out/` folder contains only the static storefront; deploy the Django app separately on a Python-capable host.

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Open `http://127.0.0.1:8000/admin/` to add products, update stock, and manage promo codes. The seeded demo code is `BOTANICAL10` (10% off). The API is available under `/api/`: public products at `/api/products/`, promo validation at `/api/promos/validate/`, account registration at `/api/auth/register/`, and JWT login/refresh at `/api/auth/login/` and `/api/auth/refresh/`. Product edits require a staff account.

The storefront promo field and catalog call `NEXT_PUBLIC_API_URL` (default `http://127.0.0.1:8000/api`). Set it to the deployed API URL before running `yarn build`. On the Django host, set a private `DJANGO_SECRET_KEY`, `DJANGO_DEBUG=0`, `DJANGO_ALLOWED_HOSTS`, and `CORS_ALLOWED_ORIGINS`. Run `python manage.py collectstatic` for production admin styles.
