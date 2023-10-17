// connect your application to mongodb server

// There are two way to estrablish the connection with mongodb

const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/my-store";
mongoose.set("strictQuery", true);

// 1. by using connect()
// This is used to create single module level default connection

mongoose.connect(url, (err) => {
  if (err) console.log("Could not connected: ", err);
  else console.log("Connected to db");
});

mongoose.connect(url); //create default connection

// to access default connection

const conn = mongoose.connection;

// listen the events of the connection

// conn.on("connected", () => {
//   console.log("Connected to DB");
// });

// conn.on("disconnected", () => {
//   console.log("Discoonnected to DB");
// });

// conn.on("error", () => {
//   console.log("Could not connected to DB");
// });

// 2. By using CreateCollection()
// This is used to create multiple independent connections

// const url = "mongodb://127.0.0.1:27017/my-store";
// const url2 = "mongodb://127.0.0.1:27017/my-store2";

// const conn1 = mongoose.createConnection(url);
// const conn2 = mongoose.createConnection(url2);

// conn1.on("connected", () => {
//   console.log("Connected to DB-1");
// });

// conn1.on("disconnected", () => {
//   console.log("Discoonnected1 to DB-1");
// });

// conn1.on("error", () => {
//   console.log("Could not connected to DB-1");
// });

// conn2.on("connected", () => {
//   console.log("Connected to DB-2");
// });

// conn2.on("disconnected", () => {
//   console.log("Discoonnected to DB-2");
// });

// conn2.on("error", () => {
//   console.log("Could not connected to DB-2");
// });
