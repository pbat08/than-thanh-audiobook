# Thân Thanh Audiobook

A Vietnamese-language voice cloning and audiobook platform designed for elderly users, including those with Alzheimer's.

## Features

- Voice cloning technology
- Audiobook generation
- Curated library of Vietnamese literature
- User progress tracking
- User-friendly interface for elderly users

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT, Google OAuth
- Deployment: Vercel (Frontend), Railway (Backend)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/than-thanh-audiobook.git
cd than-thanh-audiobook
```

2. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables:
- Create `.env` file in the root directory
- Add the following variables:
```
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=your_mongodb_uri

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Frontend Configuration
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development servers:
```bash
# Start backend server
cd server
npm run dev

# Start frontend server
cd ../client
npm start
```

## Deployment

The application is deployed on:
- Frontend: https://than-thanh-audiobook.vercel.app
- Backend: https://than-thanh-audiobook-api.up.railway.app

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 