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
- [Service Health Checks (Ansible)](#service-health-checks-ansible)
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
docker pull aditya7649/sweetspot-frontend:latest
docker pull aditya7649/sweetspot-backend:latest

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
cd SweetSpot
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
├── README.md
├── Sweetspot-Frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── ...
├── Sweetspot-Backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── index.js
│   └── api/
│       └── ...
└── ansible/
    ├── health-check.yml
    ├── inventory.ini
    └── roles/
        ├── backend_check/
        ├── frontend_check/
        ├── cloudinary_check/
        ├── mongodb_check/
        └── health_report/
```

## Docker Images

Our Docker images are available on Docker Hub:

- Frontend Image: `aditya7649/sweetspot-frontend`
  - Tags:
    - `latest`: Most recent stable version
    - `v1.0.0`: Initial release
    
- Backend Image: `aditya7649/sweetspot-backend`
  - Tags:
    - `latest`: Most recent stable version
    - `v1.0.0`: Initial release

## Service Health Checks (Ansible)

An Ansible playbook is included to verify that all external services powering SweetSpot are up and running. It checks four services in sequence and prints a consolidated report.

### Services Checked

| Service | What is verified | Method |
|---|---|---|
| **Backend (Render)** | API responds at `/api/items` | HTTP GET (60 s timeout for cold-start) |
| **Frontend (Netlify)** | Site returns HTTP 200 | HTTP GET |
| **Cloudinary** | Image API endpoint is reachable | HTTP GET |
| **MongoDB Atlas** | Cluster accepts connections and responds to `ping` | pymongo driver |

### Prerequisites

- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) (core >= 2.14)
- Python 3 with `pymongo` and `certifi`:
  ```bash
  pip install pymongo certifi
  ```

### Playbook Structure

The playbook follows the Ansible **roles** pattern for modularity and reusability:

```
ansible/
├── health-check.yml              # Main playbook (orchestrator)
├── inventory.ini                 # Localhost inventory
└── roles/
    ├── backend_check/            # Render backend API check
    │   ├── tasks/main.yml
    │   ├── defaults/main.yml     #   backend_url, timeout (overridable)
    │   ├── vars/main.yml
    │   ├── handlers/main.yml
    │   └── meta/main.yml
    ├── frontend_check/           # Netlify frontend check
    │   ├── tasks/main.yml
    │   ├── defaults/main.yml     #   frontend_url, timeout
    │   ├── vars/main.yml
    │   ├── handlers/main.yml
    │   └── meta/main.yml
    ├── cloudinary_check/         # Cloudinary API check
    │   ├── tasks/main.yml
    │   ├── defaults/main.yml     #   cloud_name, accepted status codes
    │   ├── vars/main.yml
    │   ├── handlers/main.yml
    │   └── meta/main.yml
    ├── mongodb_check/            # MongoDB Atlas connectivity check
    │   ├── tasks/main.yml
    │   ├── defaults/main.yml     #   .env file path, timeout
    │   ├── vars/main.yml
    │   ├── handlers/main.yml
    │   └── meta/main.yml
    └── health_report/            # Aggregated summary & failure gate
        ├── tasks/main.yml
        ├── defaults/main.yml     #   fail_on_unhealthy toggle
        ├── vars/main.yml
        ├── handlers/main.yml
        └── meta/main.yml
```

Each role's `defaults/main.yml` contains low-priority variables (URLs, timeouts) that you can override at the command line without editing any files.

### Running the Playbook

From the project root:

```bash
ansible-playbook ansible/health-check.yml -i ansible/inventory.ini
```

A successful run prints a report like this:

```
===================================================
   SweetSpot — Service Health Check Report
===================================================

 Backend (Render)      : UP
   URL      : https://sweetspot-p34g.onrender.com
   HTTP     : 200

 Frontend (Netlify)    : UP
   URL      : https://sweets-spot.netlify.app
   HTTP     : 200

 Cloudinary API        : REACHABLE
   Cloud    : dgv6havjj
   HTTP     : 404

 MongoDB Atlas         : CONNECTED
   Ping OK: {'ok': 1}  |  Databases: sweetspot, test, admin, local

===================================================
```

**Exit codes:** `0` = all healthy, `2` = one or more services are down.

### Useful Options

| What you want | Command |
|---|---|
| Verbose output | `ansible-playbook ansible/health-check.yml -i ansible/inventory.ini -v` |
| Monitor only (don't fail on errors) | `ansible-playbook ansible/health-check.yml -i ansible/inventory.ini -e "fail_on_unhealthy=false"` |
| Override a URL (e.g. staging backend) | `ansible-playbook ansible/health-check.yml -i ansible/inventory.ini -e "backend_url=https://staging.onrender.com"` |
| Override multiple variables | `ansible-playbook ansible/health-check.yml -i ansible/inventory.ini -e "backend_url=https://staging.onrender.com frontend_url=https://staging.netlify.app"` |

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
  docker pull aditya7649/sweetspot-frontend:latest
  docker pull aditya7649/sweetspot-backend:latest
  ```
  -https://roadmap.sh/projects/scalable-ecommerce-platform
