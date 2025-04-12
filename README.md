# Thân Thanh Audiobook

A platform for making Vietnamese literature accessible to elderly users and Alzheimer's patients through voice cloning technology.

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
- Authentication: Google OAuth
- Deployment: Vercel (Frontend), Railway (Backend)

## Live Demo

- Frontend: [https://than-thanh-audiobook.vercel.app](https://than-thanh-audiobook.vercel.app)
- Backend: [https://than-thanh-audiobook-api.up.railway.app](https://than-thanh-audiobook-api.up.railway.app)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/THY/than-thanh-audiobook.git
   cd than-thanh-audiobook
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   - Create `.env` files in both `server` and `client` directories
   - See `.env.example` for required variables

4. **Start development servers**
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd client
   npm start
   ```

## Deployment Guide

### Backend Deployment (Railway)

1. **Create Railway Account**
   - Sign up at [Railway](https://railway.app/)
   - Install Railway CLI: `npm i -g @railway/cli`

2. **Deploy Backend**
   ```bash
   # Login to Railway
   railway login

   # Initialize project
   railway init

   # Link to Railway project
   railway link

   # Deploy
   railway up
   ```

3. **Set Environment Variables in Railway**
   - Add all variables from `server/.env`
   - Update `FRONTEND_URL` to your Vercel URL

### Frontend Deployment (Vercel)

1. **Create Vercel Account**
   - Sign up at [Vercel](https://vercel.com/)
   - Connect your GitHub account

2. **Deploy Frontend**
   - Import your GitHub repository
   - Configure build settings:
     - Framework Preset: Create React App
     - Build Command: `cd client && npm install && npm run build`
     - Output Directory: `client/build`
   - Add environment variables:
     - `REACT_APP_API_URL`: Your Railway backend URL

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=production
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FRONTEND_URL=https://than-thanh-audiobook.vercel.app
```

### Frontend (.env)
```
REACT_APP_API_URL=https://than-thanh-audiobook-api.up.railway.app/api
```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Verify MongoDB URI is correct
   - Check network access in MongoDB Atlas
   - Ensure proper environment variables are set

2. **Authentication Issues**
   - Verify Google OAuth credentials
   - Check callback URLs in Google Cloud Console
   - Ensure CORS settings are correct

3. **Deployment Issues**
   - Check Railway logs for errors
   - Verify all environment variables are set
   - Ensure proper Node.js version is specified

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 