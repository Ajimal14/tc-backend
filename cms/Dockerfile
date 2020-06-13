FROM node:14

ENV NODE_ENV=production
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

RUN NODE_ENV=production npm run build

# Copy app source code
COPY . .

RUN echo "DATABASE_HOST=mongo DATABASE_PORT=12707" > .env

#Expose port and start application
EXPOSE 3000
CMD ["npm","start"]