FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app

ADD . /app

RUN npm install

ENTRYPOINT node index.js
