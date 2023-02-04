# fetch container template
FROM node:16.15.1-bullseye

ARG HOST
ARG PORT

# Install Nginx
RUN apt-get update && apt-get install -y nginx

# Create app directory
WORKDIR /usr/src/app

# copy packages
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# copy project files
COPY ./ ./

# run npm install
RUN npm run build

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["/bin/bash", "-c", "nginx && npm run start:prod"]