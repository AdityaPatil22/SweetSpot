# SweetSpot: A Dockerized Full-Stack Application

SweetSpot is a full-stack e-commerce application built to manage products, orders, and shipping seamlessly. This project leverages React for the frontend, Node.js for the backend, and Docker for containerization to streamline the development and deployment processes.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Project Directory Structure](#project-directory-structure)
- [Troubleshooting](#troubleshooting)
- [Known Issues](#known-issues)

## Features

### Frontend
- User-friendly UI to browse and manage products
- Real-time product addition and cart functionality

### Backend
- RESTful APIs for product, order, and shipping management
- Securely handles user requests and database operations

### Dockerized Setup
- Simplified development and deployment using Docker

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose

## Prerequisites

Before you begin, ensure you have the following installed:
- Docker
- Docker Compose
- Git

## Project Setup

### 1. Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 2. Running the Application with Docker Compose

#### Step 1: Build and Start Containers

```bash
docker-compose up --build
```

#### Step 2: Stop the Containers

To stop the containers after running:

```bash
docker-compose down
```

### 3. Accessing the Application

Once the containers are running, you can access the application via the following URLs:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Project Directory Structure

```
.
├── docker-compose.yml
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── ...
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── ...
└── README.md
```

## Troubleshooting

### Backend Issues

- **Error: `ENOENT: no such file or directory, open '/app/package.json'`**: Ensure the `backend` directory contains a valid `package.json` file. If it's missing, recreate it and rebuild the containers.

- **Missing Dependencies**: If required dependencies are missing, update your `Dockerfile` to include them, rebuild the image, and restart the container:

```bash
docker-compose build
docker-compose up
```

### General Tips

- Use `docker-compose logs` to inspect logs for any container errors
- Ensure the ports specified in `docker-compose.yml` are available on your machine

## Known Issues

1. **Large Docker Image Sizes**: Consider using `.dockerignore` to exclude unnecessary files during the build process
2. **Frontend Caching Issues**: Clear your browser cache if changes to the frontend code aren't reflected after rebuilding
