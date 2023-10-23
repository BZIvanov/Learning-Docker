## About

This demo is about how to use volumes, which allow us to create reference from folder in the container to local folder so we don't have to rebuild the container after every file change.

## Usage

1. Navigate to the folder this project is placed in.
2. Run the below command

```
docker compose up
```

## Running react tests

You can use the below command to run the tests.

```
docker exec -it container-id-here npm run test
```
