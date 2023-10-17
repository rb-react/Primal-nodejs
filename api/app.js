const express = require("express");
const bodyParser = require("body-parser");

// let users = [
//   {
//     id: 1,
//     name: "aaaa",
//     mobile: 11111,
//     age: 10,
//     city: "Pune",
//   },
//   {
//     id: 2,
//     name: "bbbb",
//     mobile: 22222,
//     age: 20,
//     city: "Pune",
//   },
//   {
//     id: 3,
//     name: "cccc",
//     mobile: 33333,
//     age: 30,
//     city: "Pune",
//   },
//   {
//     id: 4,
//     name: "dddd",
//     mobile: 44444,
//     age: 40,
//     city: "mumbai",
//   },
//   {
//     id: 5,
//     name: "eeee",
//     mobile: 55555,
//     age: 50,
//     city: "Pune",
//   },
//   {
//     id: 6,
//     name: "ffff",
//     mobile: 66666,
//     age: 60,
//     city: "mumbai",
//   },
// ];

const app = express();
const port = 9090;
app.use(bodyParser.json());

// // get request
// // http://localhost:9090/

// app.get("/", (req, res) => {
//   // HTTP response status codes
//   res.status(200).send("Welcome to express server");
// });

// // http://localhost:9090/users
// app.get("/users", (req, res) => {
//   res.status(200).send(users);
// });

// // http://localhost:9090/users/3
// app.get("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users?.find((u) => u.id == id);
//   res.status(200).send(user);
// });

// // http://localhost:9090/users/3
// app.post("/users", (req, res) => {
//   users.push(req.body);
//   res.status(200).send("created..");
// });

// app.put("/users/:id", (req, res) => {
//   const { id } = req.params;
//   // get the index
//   const index = users.findIndex((u) => u.id == id);

//   // update the fields
//   const updatedUser = { ...users[index], ...req.body };

//   //replace the object

//   users.splice(index, 1, updatedUser);
//   res.status(200).send("updated..");
// });

// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;
//   //get the index
//   const arr = users.filter((u) => u.id != id);
//   users = arr;
//   res.status(200).send("deleted user");
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

const { createUser, generateReport, sendEmail } = require("./services");

// http://localhost:9090/users
app.post("/users", createUser);

// http://localhost:9090/report
app.post("/report", generateReport);

// http://localhost:9090/email
app.post("/email", sendEmail);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
