FROM node:14.15.1
WORKDIR /usr/src/app

COPY . .
RUN npm install -g yarn
RUN yarn
