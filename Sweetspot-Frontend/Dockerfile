FROM node:18

WORKDIR /app

# install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the frontend code
COPY . .

# Build the Vite app for production
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
