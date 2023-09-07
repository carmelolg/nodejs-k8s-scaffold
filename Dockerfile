FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy all
COPY . .

# Run config
EXPOSE 8080
CMD [ "node", "index.js" ]
