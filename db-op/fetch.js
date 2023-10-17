require("./conn");
const Employee = require("./employee.model");

// fetch all documents

// Employee.find().then(console.log).catch(console.erroe);

// fetch single document
Employee.findOne({ id: 4 }).then(console.log).catch(console.error);

// fetch total number of document (count)
Employee.countDocuments({ city: /pune/i })
  .then((result) => {
    console.log("Total emps from Pune : ", result);
  })
  .catch((err) => {
    console.error(err);
  });
