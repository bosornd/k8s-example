FROM node:latest
COPY server.js .
EXPOSE 8080
CMD node server.js