FROM node:latest

WORKDIR /src
RUN npm install redis

COPY server.js .
EXPOSE 8081
CMD node server.js
