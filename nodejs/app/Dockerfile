# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

RUN chown -R node /usr/src/app

# Expose the port that your Express application is listening on
EXPOSE 3000

# Switch to the non-root user
USER node

# Start the application
CMD ["node", "app.js"]
