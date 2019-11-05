const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/categories", (req, res) => {
	res.json({
		categories: [
			{
				id: 1,
				title: "Продукты"
			},
			{
				id: 2,
				title: "Кино"
			},
			{
				id: 3,
				title: "Кафе\\рестораны"
			},
			{
				id: 4,
				title: "Машина"
			}
		]
	});
});

app.get("/api/cost", (req, res) => {
	res.json({
		costs: [
			{
				title: "Продукты",
				total: 1234,
				icon: "fas fa-shopping-basket",
				color: "rgba(255, 99, 132, 1)"
			},
			{
				title: "Кино",
				total: 8543,
				icon: "fas fa-film ",
				color: "rgba(54, 162, 235, 1)"
			}
		]
	});
});

app.get("/api/hello", (req, res) => {
	res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
	console.log(req.body);
	res.send(
		`I received your POST request. This is what you sent me: ${req.body.post}`
	);
});

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "client/build")));

	// Handle React routing, return all requests to React app
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
