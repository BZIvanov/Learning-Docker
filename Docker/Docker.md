# Installing Docker for Ubuntu 19.10 eoan

## Installing Client and the Server

Open terminal and type _docker_. If you don't have it you will be suggested to install it by typing command:

```bash
sudo apt install docker.io
```

After the installation type in the terminal:

```bash
sudo docker version
```

You should be able to see version for the Client and version for the Server.

## Installing Docker machine

Additionally we need to install Docker machine. Go to the github repo **https://github.com/docker/machine/releases** to see the releases.
Search for the On Linux install, it should look like something like the following command:

```bash
curl -L https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine &&
chmod +x /tmp/docker-machine &&
sudo cp /tmp/docker-machine /usr/local/bin/docker-machine
```

Copy the command from there, not from here in order to get the latest tag version.

Wait for the process to finish and check if done correctly by typing:

```bash
docker-machine version
```

You should see the version of the docker-machine.

## Installing Docker compose

Additionally we need to install Docker compose. Go to the github repo **https://github.com/docker/compose/releases**.
Search for the On Linux install, it should look like something like the following command:

```bash
sudo curl -L https://github.com/docker/compose/releases/download/1.25.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

If you get permission denied error use **sudo**
Copy the command from there, not from here in order to get the latest tag version.

Wait for the process to finish and check if done correctly by typing:

```bash
docker-compose --version
```

You should see the version of the docker compose.

---

## Docker commands

### General

- **docker** - will display list of commands we can use on docker.

- **docker info** - will provide some info.

### Containers

- **docker container run --publish 80:80 nginx** - this command will create new container based on some Image. The first keyword _docker_ is to access the docker itself and the commands it provides. The keywords _container run_ is to create new container. The keywords _–publish 80:80_ will start the process on port 80. The keyword _nginx_ is the name of the Image, which will be used.

- **docker container run -–publish 80:80 --detach nginx** - this command is very similar to the above but here we added _--detach_ which will run the process in the background, because if we have many processes we don't want to constantly see their windows open. When we create a container if we don't specify its name, the name will be automatically generated for us and it also have to be unique.

- **docker container run –-publish 80:80 --detach _somename_ nginx** - this way we can give a name to our container. In this example we name it 'somename', we choose what name we want so it could be something else. Shorthand syntax for _-–detach_ is to use _-d_

- **docker container ls** - will list all the containers we have running.

- **docker container stop _id_** - it will stop container from running, we select a container by its id. We can see the id's of all containers if we list them. Stopping the container will make it just not running, not destroying it. If we press tab before specifying id we will get autocomplete with the available id's.

- **docker container ls -a** - will list all the containers, including the stopped ones.

- **docker container logs _webhost_** - will display all of the logs for specific container. We select which container by providing its name, in this example 'webhost'.

- **docker container --help** - will display a list of commands, which we can use on a container.

- **docker container rm _id1_ _id2_** - will remove all the containers selected by their ids. We can remove multiple at ones by separating them with a space, but we can't remove already running containers only the ones we have stopped.

- **docker container rm -f _id_** - will force remove a container selected by its id, even if the container is still running it will be removed.

- **ps aux** - will list all running processes on our computer.

- **docker top containername** - will list all the processes running in the container specified by it's name

- **docker start _mongo_** - will start already existing process which was stopped.

- **docker container run -d -p 3306:3306 –name _db_ -e MYSQL_RND_PASS=yes mysql** - similarly to the commands above this will start new container and here we use some shorthand syntaxes. -d stands for –detach, --name is how we will name the container -e will set environment variable as key=value pair. The Image in this case is mysql. In the publish the first number is the host's port which is our computer and the second is the port on the container.

- **docker image ls** - will list all of the Images.

- **docker container top _mysql_** - will list all of the processes running in a container.

- **docker container inspect _mysql_** - will list in a form of json the configuration for the container.

- **docker container stats** - will list all of the containers and the usage of our cpu they have and some more performance data.

- **docker container run -it --name somename nginx bash** - this way we can create container and work with it from inside. _bash_ will allow us to write from the terminal, when using the container. This container is usable like that because the options _-it_, where i and t are important. While we are inside the container we can type _exit_ and we will exit the container and it will be stopped.

- **docker container start -ai somename** - if we were in a container and exited, this way we can enter in it again

- **docker container exec -it somename bash** - this way we can enter in a container, which we exited before, bash will give us the terminal to type commands. But with the exec command if we exit the container again it will not be stopped.

### Network

- **docker network ls** - will list all of the networks

- **docker network create my_app_net** - will create a new network
