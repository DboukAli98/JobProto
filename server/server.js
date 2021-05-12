
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const cors = require("cors");

const JobsRoutes = require("./routes/jobs");



var app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/jobs", JobsRoutes);

app.listen(3001);


