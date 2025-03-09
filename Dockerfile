# Use the latest LTS version of Node.js
FROM node:18-alpine

# Sets the working directory inside the container.
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application files
COPY . . 

# Expose the port the app runs on 
EXPOSE 3000

# Define commands to run the app
CMD ["npm", "start"]