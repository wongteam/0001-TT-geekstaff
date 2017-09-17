FROM mhart/alpine-node:latest

WORKDIR /app
ADD . .

RUN npm install

EXPOSE 3000
EXPOSE 3005

CMD ["npm", "run", "start:prod"]
