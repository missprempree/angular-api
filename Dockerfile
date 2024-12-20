# Use a base image with Node.js 22.12.0  
FROM node:22.12.0

# Set the working directory  
WORKDIR /app  

# Copy the package.json and package-lock.json files  
COPY package*.json ./  

# Install dependencies  
RUN npm install

# Copy the Angular project files  
COPY . .  

# Build the Angular application  
RUN npm run build

# Expose the port that Nginx will listen on  
EXPOSE 4200  

# Start the Node.js application
CMD ["npm", "start"]

# Labelize
LABEL org.opencontainers.image.source=https://github.com/missprempree/angular-api