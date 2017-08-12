FROM node:8.3

WORKDIR /showrunner

ADD . /showrunner

EXPOSE 3000

CMD ["node", "server.js"]