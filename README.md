# I Need Food

## Application to see all the food places arround your current geolocation.

### How Can I start?

There is two way to start working with the project, the first one using Docker, and why Docker? Well, one of the reasons I like to work with Docker is the freedom to run the app on any platform without having all the tools that I need to start working on my computer.

How can I start with docker? The only thing that you need to make sure that you have docker installed. [If not just download docker clicking here](https://docs.docker.com/docker-for-mac/install/) after that just follow the next instruction.

##### Clone the repository

```
git clone git@github.com:OliverArthur/I-need-food.git
```

##### Go to the project root.

```
cd I-need-food
```

##### Build the image and install all dependencies needed.

```
docker-compose build
```

##### Start the container and the server.

```
docker-compose up
```


And the second option to start working on your local env, only thing is that you need make sure that you have nodejs installed.
and then just follow the next instruction.

make sure that your are in the root of the folder and then run:

##### Install all dependencies needed.

```
npm install
```

##### Compiles and hot-reloads for development

```
npm run serve
```

#### Technology used

. Vuejs
. Google Map API
. Foursquare API
. NPM
