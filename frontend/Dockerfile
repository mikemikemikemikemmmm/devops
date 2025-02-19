# Step 1: Build the React app using Vite
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app source code
COPY . ./

# Build the React app
RUN npm run build
