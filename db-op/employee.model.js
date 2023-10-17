//to use drivers of db  by using mongoose package
const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 45 },
  id: Number,
  age: Number,
  salary: Number,
  city: String,
  dept: String,
  phone: { type: Number, unique: true, match: /[0-9]{10/, required: true },
  company: String,
  country: String,
});

// create Model: -
// MOdel isa constructor which is used to create the document

const Employee = mongoose.model("Employee", empSchema);
module.exports = Employee;
