FROM node:16.16.0-alpine3.16

WORKDIR /Imdb_clone
RUN npm install i npm@latest -g
COPY package*.json ./
RUN npm install  

USER node
COPY . .

EXPOSE 5000

CMD ["node", "/Imdb_clone/app.js"]