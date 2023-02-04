# fetch container template
FROM node:16.15.1-bullseye

ARG HOST
ARG PORT


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

# expose ports
EXPOSE ${PORT}

# run app
CMD ["npm","run", "start:prod"]