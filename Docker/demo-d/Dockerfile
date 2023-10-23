# First step - build the react app
FROM node:16-alpine3.11 AS builder

RUN mkdir /usr/app

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY ./ ./

RUN npm run build

# Second step - serve the static files with nginx
FROM nginx

COPY --from=builder /usr/app/build /usr/share/nginx/html
