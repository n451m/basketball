
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const server = express();
const port = 3000;
server.listen(port, () => console.log(`express departing now from http://localhost:${port}`))
server.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




const players = [
    { id: 1, name: 'Lebron James', age: 37, height:"6 ft 8", position:"SF", },
    { id: 2, name: 'Steph Curry', age: 32, height:"6 ft 3",  position:"PG",},
    { id: 3, name: 'Kevin Durant', age: 32, height:"6 ft 11", position:"SF", },
];









