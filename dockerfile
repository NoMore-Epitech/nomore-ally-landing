# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching npm install)
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install
RUN npm ci

# Copy the rest of the project files to the container
COPY . .

# Ensure proper permissions for all files
RUN chmod -R 755 /app

# Build the React app
RUN npm run build

# Expose the port that the server will listen on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "preview"]