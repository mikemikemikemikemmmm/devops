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

# Step 2: Serve the app with a lightweight web server
FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
# Copy the build artifacts from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start nginx server to serve the built app
CMD ["nginx", "-g", "daemon off;"]