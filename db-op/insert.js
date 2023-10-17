require("./conn");
const mongoose = require("mongoose");

// define aschema

const empSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 20 },
  age: Number,
  salary: Number,
  dept: String,
  phone: { type: String, unique: true, match: /[0-9]{10}/, required: true },
  company: String,
  country: String,
});

// create a model
// Model is a constructor which is used to create the documents

const Employee = mongoose.model("Employee", empSchema);
const SecretData = mongoose.model("SecretData", empSchema);

// save a document

const emp1 = {
  name: "Rahul",
  age: 20,
  salary: 9000,
  city: "Pune",
  phone: "9011114114",
};

const empDoc = new Employee(emp1);
empDoc
  .save()
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((err) => {
    console.log(err);
  });
