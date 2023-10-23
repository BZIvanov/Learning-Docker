# Base image
FROM node:16-alpine3.11

# here we specify which will be working directory inside the container
# in the copy command now we use ./ which will be this working directory, because we don't want to move local files in the root folder of the container
WORKDIR /usr/app

# firstly we will copy only the package.json file to the container
# we do that because in the build process if we have changes on our files, they will trigger rebuild and not use the cache
# for example if we make change in the index.js file we want to copy it after npm install so we can use npm install step from the cache and not rerun it if we don't have changes in package.json file
COPY ./package.json ./
RUN npm install

# Here we will copy all the files(index.js, etc.) from the current folder to the container selected workdir, by default they are not included
COPY ./ ./

# Default command, when starting the image. Will result in 'npm start'
CMD ["npm", "start"]
