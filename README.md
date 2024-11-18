# SweetSpot: A Dockerized Full-Stack Application

SweetSpot is a full-stack e-commerce application built to manage products, orders, and shipping seamlessly. This project leverages React for the frontend, Node.js for the backend, and Docker for containerization to streamline the development and deployment processes.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
  - [Using Docker Hub Images](#using-docker-hub-images)
  - [Building Locally](#building-locally)
- [Project Directory Structure](#project-directory-structure)
- [Troubleshooting](#troubleshooting)
## Features

### Frontend
- User-friendly UI to browse and manage products
- Real-time product addition and cart functionality

### Backend
- RESTful APIs for product, order, and shipping management
- Securely handles user requests and database operations

### Dockerized Setup
- Simplified development and deployment using Docker
- Pre-built Docker images available on Docker Hub

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## Project Setup

### Using Docker Hub Images

The easiest way to get started is by using our pre-built Docker images:

```bash
# Pull the images
docker pull yourusername/sweetspot-frontend:latest
docker pull yourusername/sweetspot-backend:latest

# Create a docker-compose.yml file
version: "3.8"
services:
  backend:
    build:
      context: ./Sweetspot-Backend
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    volumes:
      - ./Sweetspot-Backend:/app
  frontend:
    build:
      context: ./Sweetspot-Frontend
    ports:
      - "5173:80"
    volumes:
      - ./Sweetspot-Frontend:/app

# Run the application
docker-compose up
```

### Building Locally

#### 1. Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone git@github.com:AdityaP7649/SweetSpot.git
cd <your-repo>
```

#### 2. Running the Application with Docker Compose

##### Step 1: Build and Start Containers

```bash
docker-compose up --build
```

##### Step 2: Stop the Containers

To stop the containers after running:

```bash
docker-compose down
```

### 3. Accessing the Application

Once the containers are running, you can access the application via the following URLs:
- **Frontend**: http://localhost:5137
- **Backend API**: http://localhost:3000

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

## Docker Images

Our Docker images are available on Docker Hub:

- Frontend Image: `yourusername/sweetspot-frontend`
  - Tags:
    - `latest`: Most recent stable version
    - `v1.0.0`: Initial release
    
- Backend Image: `yourusername/sweetspot-backend`
  - Tags:
    - `latest`: Most recent stable version
    - `v1.0.0`: Initial release

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
- If using Docker Hub images, ensure you have the latest versions:
  ```bash
  docker pull yourusername/sweetspot-frontend:latest
  docker pull yourusername/sweetspot-backend:latest
  ```
