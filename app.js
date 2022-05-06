
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const server = express();
const port = 3000;
server.listen(port, () => console.log(`express departing now from http://localhost:${port}`))
server.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());














