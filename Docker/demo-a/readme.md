# Dockerfile

For the base image _FROM_ you can go to the docker hub website and search for _node_. There you will also find a list of supported tags. In this example we use Node version 16 and alpine version 3. Of course the tags list on the website will change over time.

## Build workflow

Note that after the first time we build the image, all the steps are cached and every next time we use them from the cache. But for example if we have change in step 3 all steps after that are also rebuild and not used from the cache. Basically we use cache from start to the bottom of the Dockerfile until we see a change in any of the steps everything after that is recreated.

That is why we use the COPY trick with only package.json file and npm install, so if we don't change the package.json file, the npm install step and all steps before that will come from the cache and we will not install all the modules if we for example make a tiny change in the index.js file.

## Usage

Recommended to use Windows Powershell as a terminal for the below commands.

1. First build the image. Use the command in the directory, where is the Dockerfile. This command will create our image which we will use to run our container based on the image

```
docker build .
```

2. Run below command to get list of Images, find the one you just built

```
docker images
```

3. Run the image (don't forget the dot in the end for the current directory):

```
docker run -p 3000:3000 image-id-here
```

On this step we need to map the port of our computer to a port inside of the container. In our case, when we access port 3000 on the computer it will be redirected to port 3000 in the container and our app is listening on that port. The -p flag is for ports usage.

## Debugging

For debugging you can use the below command, which will open a terminal inside of the container. There is no need to stop the running container for this command, just open a new terminal.

1. Check running containers ids:

```
docker ps
```

2. Get the id for the container and run:

```
docker exec -it container-id-here sh
```

3. Type _exit_ and press enter if you want to exit and end the debugging.
