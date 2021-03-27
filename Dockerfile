# FROM node:12 

# WORKDIR /app 

# COPY package*.json ./ 

# RUN npm i 

# COPY . .



# ENV PORT=3000

# RUN npm run build

# EXPOSE 3000

# CMD npm run start

# Dockerfile

# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start