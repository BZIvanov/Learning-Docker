FROM node:16-alpine3.11

RUN mkdir /usr/app

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY ./ ./

# for dev setup it would be ["npm", "run", "dev"]
CMD ["npm", "start"]
