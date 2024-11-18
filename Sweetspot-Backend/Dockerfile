FROM node:18

WORKDIR /app

# install dependencies
COPY package.json ./
RUN npm install

# Copy the backend code
COPY . .

EXPOSE 3000

# Start the backend server
CMD ["npm", "start"]
