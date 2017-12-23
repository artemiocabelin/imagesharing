require('dotenv').config()

const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./server/config/config')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

require('./server/config/mongoose.js');
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(config.port, function() {
 console.log("listening on port: ", config.port);
});