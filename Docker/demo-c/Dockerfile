FROM node:16-alpine3.11

RUN mkdir /usr/app

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY ./ ./

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/app/node_modules/.bin:$PATH

CMD ["npm", "start"]
