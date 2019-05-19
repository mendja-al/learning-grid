'use strict';

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const bodyParser = require('body-parser')
const path = require("path");
const exphbs = require("express-handlebars");

const port = 8888;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(path.resolve(__dirname,"..",'public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/",(req,res) => {
	res.render("index");
});

app.get("/frame",(req,res) => {
	res.render("frame");
});

app.get("/teacher",(req,res) => {
	res.render("teacher", {
		layout: "teacher"
	});
});

app.set("x-powered-by",false);

server.listen(port);
console.log("started on " + port);