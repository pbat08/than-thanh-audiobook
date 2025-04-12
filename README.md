# Thân Thanh Audiobook

A Vietnamese audiobook platform with voice cloning capabilities, designed for elderly users and Alzheimer's patients.

## Live Demo

- Frontend: https://than-thanh-audiobook.vercel.app
- Backend: https://than-thanh-audiobook-api.up.railway.app

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
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React source code
│       ├── components/    # React components
│       ├── pages/         # Page components
│       ├── store/         # State management
│       └── utils/         # Utility functions
├── server/                # Backend Node.js application
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   └── utils/            # Utility functions
└── docs/                 # Documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Google OAuth credentials

### Environment Variables

Create `.env` files in both client and server directories:

#### Server (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FRONTEND_URL=https://than-thanh-audiobook.vercel.app
```

#### Client (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/than-thanh-audiobook.git
cd than-thanh-audiobook
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Start development servers:
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd client
npm start
```

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Backend (Railway)
1. Push code to GitHub
2. Connect repository to Railway
3. Set environment variables
4. Deploy

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please open an issue in the repository. 