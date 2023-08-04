const express = require("express");
const connect = require("./config/db");
const router = require("./routes/students.routes");
const app = express();
app.use(express.json());
app.use("stud", router);
app.set("view", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/view");

app.listen(8080, () => {
    console.log("listening on port 8080");
    connect();
  });