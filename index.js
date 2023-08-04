const express = require("express");
const router = require("./routes/students.routes");

// const router = require("./routes/students.routes");
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views",__dirname+"/views");

app.use("/stud", router);
app.listen(8080, () => {
    console.log("listening on port 8080");
    
  });