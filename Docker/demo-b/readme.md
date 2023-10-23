## About

This is a demo of how we can work with multiple containers.

## Docker compose

Docker compose will put our containers in the same network, so they can easy communicate with each other.

## Usage

While in the same directory, run the below command

```
docker compose up -d
```

To stop the containers run:

```
docker compose down
```

Open the browser on _http://localhost:3000/_ and you will see the count of 0. Refresh the browser and the value will increment.
