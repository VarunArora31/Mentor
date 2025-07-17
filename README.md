# Mentor - Full Stack Application

A comprehensive mentorship platform built with React.js frontend and Node.js backend.

## Project Structure

```
Mentor/
├── frontend/          # React.js application
├── backend/           # Node.js API server
└── README.md         # This file
```

## Features

- User authentication (Login/Signup)
- Course management
- Event listings
- Trainer profiles
- Pricing plans
- Contact forms
- Responsive design

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- AOS (Animate On Scroll)
- Bootstrap
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VarunArora31/Mentor.git
   cd Mentor
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   # Create .env file with your environment variables
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

### Environment Variables

Create a `.env` file in the backend directory with the following variables:
```
PORT=3333
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## API Endpoints

### Authentication
- `POST /login` - User login
- `POST /signUp` - User registration

### Courses
- `GET /courses` - Get all courses
- `POST /courses` - Create new course
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user profile

## Development

### Running in Development Mode

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:3333`.

## Deployment

### Frontend Deployment
The frontend can be deployed to Netlify, Vercel, or any static hosting service.

### Backend Deployment
The backend can be deployed to Heroku, Railway, or any cloud platform supporting Node.js.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Varun Arora**
- GitHub: [@VarunArora31](https://github.com/VarunArora31)

## Acknowledgments

- Thanks to all contributors
- Built with love for the mentorship community
