# Thân Thanh Audiobook

A Vietnamese audiobook platform with voice cloning capabilities, designed for elderly users and Alzheimer's patients.

## Features

- Voice cloning technology
- Vietnamese audiobook library
- User-friendly interface
- Reading progress tracking
- Google authentication
- Favorites system

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT, Google OAuth
- Deployment: Vercel (Frontend), Railway (Backend)

## Project Structure

```
than-thanh-audiobook/
├── server/                # Backend Node.js application
│   ├── index.js          # Main server file
│   ├── package.json      # Server dependencies
│   ├── railway.toml      # Railway configuration
│   └── routes/           # API routes
│       ├── auth.js       # Authentication routes
│       ├── books.js      # Book routes
│       └── users.js      # User routes
└── .env                  # Environment variables
```

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/than-thanh-audiobook.git
cd than-thanh-audiobook
```

2. Install dependencies:
```bash
cd server
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the values with your actual credentials

4. Start the server:
```bash
npm run dev
```

## Deployment

### Backend (Railway)
1. Push code to GitHub
2. Connect repository to Railway
3. Set environment variables
4. Deploy

## License

This project is licensed under the MIT License. 