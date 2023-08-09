const express = require("express");
const connect =require("./config/db")
const router = require("./routes/students.routes");

// const router = require("./routes/students.routes");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views",__dirname+"/views");

app.use(router);
app.listen(8085, () => {
    console.log("listening on port 8085")
    connect()
  });