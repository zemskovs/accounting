const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("errorhandler");
require("./models/Users");

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === "production";

const app = express();
const port = process.env.PORT || 5000;

//App Config
app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	session({
		secret: "passport-tutorial",
		cookie: { maxAge: 60000 },
		resave: false,
		saveUninitialized: false
	})
);

if (!isProduction) {
	app.use(errorHandler());
}

mongoose.connect("mongodb://localhost/passport-tutorial"); //toDO: to universal
mongoose.set("debug", true);

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
