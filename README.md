# Simple ToDo App

This is a simple todo app just to show my skills as a Fullstack React/Redux and NodeJs Developer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to have Node installed to run this project, 

````
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
$ sudo apt-get install nodejs
````

Check installation

````
$ node -v
````

````
Output
v8.0.0
````

### Installing

First, download the project, then cd into the project, install dependencies and start the application.

````
$ git glone https://github.com/rcabarreto/todoApp.git todoApp/
$ cd todoApp/
$ npm install
$ npm start
````

After the app starts, you can access it on your web browser.

````
http://localhost:3000
````

## Deployment

I created a Dockerfile to containerize this project making it easy to deploy to a production environment. In production the system uses a production grade database, in this case is MySQL. It also uses a NGINX as proxy server. See docker-compose for more details on the infrastructure.

If you want to try the Docker deployment, just add the following to your hosts file.
````
127.0.0.1    www.todoapp.com app.todoapp.com pma.todoapp.com
````

Then just cd into the project and run

````
$ docker-compose up
````

## Built With

### Front-end
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap 4](https://getbootstrap.com/docs/3.3/)
* [Babel](https://babeljs.io/)
* [WebPack](https://webpack.js.org/)

### Back-end
* [Node.js](https://nodejs.org/en/about/)
* [Express.js](http://expressjs.com/pt-br/starter/installing.html)
* [Docker](https://www.docker.com/docker-community/)

## Authors

* **Rodrigo Barreto** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
