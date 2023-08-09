const mongoose = require("mongoose");
const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://nrsonani13:movie@cluster0.f7cakpc.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("connect to mongoose server");
};
module.exports = connect;