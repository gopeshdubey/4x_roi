var express = require("express");
var app = express();
var http = require("http");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = require("./routes/users");

app.use("/api/v3/users", users);

// our server instance
const server = http.createServer(app);

server.listen(8080, () => console.log(`Listening on port :::::> 8080`));
