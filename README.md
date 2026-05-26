# 🐼 Panda Auto Spa 2

Premium car detailing booking website for Panda Auto Spa, Allentown PA.

## Setup

```bash
git clone https://github.com/Dansanti24/panda-auto-spa-final.git
cd panda-auto-spa-final
git checkout dev
npm install
cp .env.local.example .env.local
# Edit .env.local with your MongoDB URI
npm run dev
```

## Environment Variables
Copy `.env.local.example` to `.env.local` and fill in:
- `MONGODB_URI` — your MongoDB connection string
- `DB_NAME` — database name
- `JWT_SECRET` — any secret string

## API Routes
- `GET /api/services` — list services
- `POST /api/bookings` — create booking
- `GET /api/bookings` — get all bookings
- `POST /api/auth/register` — register user
- `POST /api/auth/login` — login
- `POST /api/contact` — contact form
