//Import express as a dependency
const express = require('express');
const bodyParser = require('body-parser');

//Create a new instance of an express application. express is a function that returns a fully functional http server.
const app = express();

//Simulate DB
let dogs = [{name: "Fido", breed: "Poodle"}, {name: "Bethoven", breed:"St. Bernard"}, 
						{name: "AirBud", breed: "Golden Retriever"}];

//Set up middleware to serve static files on request.
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Set up request handler for GET request to /dogs ROUTE
app.get('/dogs', function(req, res) {
	res.send(dogs);
});

//Set up request handler for GET request to /dogs/:name ROUTE that extracts name from req.body, finds a dog with that name and returns it.
app.get('/dogs/:name', (req, res) => {
	let dog = dogs.find((el) => {
		if(el.name === req.params.name) {
			return el;
		}
	})
	res.send(dog);
})


//Make our server listen on a specific port. When running our server every http request made to port 5000 will be handled by this application.
app.listen(5000, () => console.log(`App running on port 5000`));