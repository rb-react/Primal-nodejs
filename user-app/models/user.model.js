const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  mobile: { type: String, match: /[0-9]{10}/, unique: true },
  email: String,
  password: String,
  status: String,
  age: Number,
});

module.exports = mongoose.model("User", userSchema);
