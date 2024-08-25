# Step 1: Build the React app with Node.js
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app for production using Yarn
RUN yarn build

# Step 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the built React app from the previous step
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]