# 🐼 Panda Auto Spa

A full-stack booking website for Panda Auto Spa, a premium car detailing business located in Allentown, PA. Built as a Springboard Capstone project.

## Live Features

- **Homepage** with hero, services, booking form, contact section
- **Services API** — lists all detailing packages and add-ons
- **Booking System** — customers can submit appointment requests saved to MongoDB
- **Contact Form** — sends messages to the business
- **Admin Dashboard** — view all bookings at `/admin`

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, CSS Modules
- **Backend**: Next.js API Routes
- **Database**: MongoDB + Mongoose
- **Deployment**: Ready for Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repo
git clone https://github.com/Dansanti24/panda-auto-spa-final.git
cd panda-auto-spa-final

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your MongoDB URI

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

```
MONGODB_URI=mongodb://localhost:27017
DB_NAME=panda-auto-spa
JWT_SECRET=your_secret_here
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | Get all services and add-ons |
| GET | `/api/bookings` | Get all bookings (admin) |
| POST | `/api/bookings` | Create a new booking |
| POST | `/api/contact` | Submit contact form |

## Project Structure

```
panda-auto-spa/
├── app/
│   ├── page.js          # Homepage
│   ├── layout.js        # Root layout
│   ├── globals.css      # Global styles
│   ├── admin/           # Admin dashboard
│   └── api/             # API routes
│       ├── services/
│       ├── bookings/
│       └── contact/
├── components/          # React components
├── lib/                 # DB connection
├── models/              # Mongoose models
└── .env.local           # Environment variables
```

## Business Info

- **Location**: 1040 S 4th St, Allentown, PA 18103
- **Phone**: 610-351-0215
- **Email**: pandaautospa@pandaautocenter.com
