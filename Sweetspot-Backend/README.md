# SweetSpot Backend

## Overview
SweetSpot Backend is a robust Node.js/Express.js server application that provides RESTful API services with MongoDB integration, authentication, and security features.

## Prerequisites
- Node.js (Latest LTS version recommended)
- MongoDB installed and running locally
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd sweetspot-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## Technology Stack

### Core Framework & Runtime
- **Express.js (v4.21.1)**: Fast, unopinionated web framework for Node.js
- **Node.js**: JavaScript runtime (through nodemon v3.1.7)

### Database
- **MongoDB (v6.9.0)**: NoSQL database
- **Mongoose (v8.7.1)**: MongoDB object modeling tool

### Authentication & Security
- **bcrypt (v5.1.1)**: Password hashing
- **jsonwebtoken (v9.0.2)**: JWT implementation
- **jwt-decode (v4.0.0)**: JWT token decoder
- **joi (v17.13.3)**: Object schema validation

### Middleware & Utilities
- **body-parser (v1.20.3)**: Request body parsing middleware
- **cors (v2.8.5)**: Cross-Origin Resource Sharing
- **dotenv (v16.4.5)**: Environment variable management

### Development Tools
- **Babel**
  - @babel/cli (v7.25.9)
  - @babel/core (v7.26.0)
  - @babel/preset-env (v7.26.0)
  - @babel/plugin-proposal-private-property-in-object (v7.21.11)
- **nodemon (v3.1.7)**: Development server with auto-reload

## Available Scripts

```bash
# Start development server with nodemon
npm run dev

# Start the server with nodemon
npm start

# Remove node_modules and reinstall dependencies
npm run clean

# Compile with Babel to dist directory
npm run build

# Run tests (currently not configured)
npm test
```

## Project Structure
```
sweetspot-backend/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── utils/          # Utility functions
├── .env
├── index.js
├── package.json
├── .babelrc
└── README.md
```

## API Documentation

### Base URL
```
Development: http://localhost:3000
Production: https://sweetspot-p34g.onrender.com
```

### CORS Configuration
The API allows requests from the following origins:
- `http://localhost:5173`
- `https://sweets-spot.netlify.app`

### Authentication Endpoints

#### Register New User
```http
POST /api/signup
```
Creates a new user account.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:** JWT token and user details

#### Login
```http
POST /api/login
```
Authenticates a user and returns a token.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:** JWT token and user details

#### Logout
```http
POST /api/logout
```
Logs out the current user.
- **Headers Required:** Authorization token
- **Response:** Logout confirmation

### Product Management

#### Add New Product
```http
POST /api/products
```
Adds a new product to the database.
- **Headers Required:** Authorization token
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number",
    "category": "string"
  }
  ```
- **Response:** Created product details

#### Get All Products
```http
GET /api/items
```
Retrieves all available products.
- **Response:** Array of product objects

### Shipping Management

#### Add Shipping Details
```http
POST /api/shipping
```
Adds shipping information for an order.
- **Headers Required:** Authorization token
- **Request Body:**
  ```json
  {
    "address": "string",
    "city": "string",
    "postalCode": "string",
    "country": "string"
  }
  ```
- **Response:** Created shipping details

#### Get Shipping Details
```http
GET /api/shippingdetails
```
Retrieves shipping information.
- **Headers Required:** Authorization token
- **Response:** Shipping details object


### Request Headers
```
Content-Type: application/json
Authorization: Bearer <jwt_token>  // For protected routes
```

### API Rate Limiting
- Rate limiting may be applied to prevent abuse
- Specific limits should be defined based on requirements

## Security Features
- Password hashing using bcrypt
- JWT-based authentication
- Request validation using Joi
- CORS enabled
- Environment variables for sensitive data
