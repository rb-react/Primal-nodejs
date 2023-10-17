require("./conn");

const Employee = require("./employee.model");

// update the age to 75 of 'qqq'

Employee.findOneAndUpdate({ name: "qqq" }, { age: 75 }, { new: true })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//   add country to all employees

Employee.updateMany({}, { country: "India" })
  .then((result) => {
    console.log("Updated : ", result);
  })
  .catch((err) => {
    console.log(err);
  });
