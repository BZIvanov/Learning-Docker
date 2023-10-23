## About

This demo shows how to build react app and serve the built version with nginx.

## Usage

1. Run the command the build the image

```
docker build .
```

2. Get the returned container id to use it on the next step. Or run the below command and find your image and it's id

```
docker images
```

3. Run the command to start the container

```
docker run -p 3000:80 image-id-here
```
