# Stage 1 API

A simple personal API built with Node.js and Express, deployed on AWS EC2 with Nginx as a reverse proxy and systemd for process management.

## How to Run Locally

Clone the repository:

git clone https://github.com/Godson-7/stage1-api.git
cd stage1-api
npm install
node index.js

API will be available at http://localhost:5000

## Endpoints

### GET /
Returns API status.

Response:
{"message": "API is running"}

### GET /health
Returns health status.

Response:
{"message": "healthy"}

### GET /me
Returns my personal details.

Response:
{"name": "Godson Tutu", "email": "godsontutu275@gmail.com", "github": "https://github.com/Godson-7"}

## Live Deployment

http://godsondevops.tech

## Deployment Stack

- AWS EC2 (Ubuntu 22.04)
- Node.js + Express
- Nginx reverse proxy (port 80 → 5000)
- systemd for persistent process management
