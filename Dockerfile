FROM node:6.11-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install --quiet

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm", "start" ]
