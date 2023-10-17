const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/my-user-app";
mongoose.set("strictQuery", true);
mongoose.connect(url); //create default connection

// to access default connection
const conn = mongoose.connection;

// listen the events of the connectio

conn.on("connected", () => {
  console.log("Connected to DB");
});

conn.on("disconnected", () => {
  console.log("Disconnected from DB");
});

conn.on("error", () => {
  console.log("Could not Connected to DB");
});
