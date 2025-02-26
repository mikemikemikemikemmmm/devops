# Step 1: Build the React app using Vite
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app source code
COPY . ./

ARG VITE_BACKEND_URL

# Set environment variables during the build process
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Build the React app
RUN npm run build
