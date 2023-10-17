require("./conn");
const Employee = require("./employee.model");

// delete Employee "jjj"
// Employee.deleteOne({ name: "jjj" })
Employee.deleteMany({ name: "jjj" });
// Employee.remove({ name: "lll" });
// Employee.findByIdAndRemove({ name: "lll" });
// Employee.findByIdAndDelete('kuyuiyiuyiuyuk98789');


Employee.findOneAndDelete({ name: "lll" }) //it's written deleted document
  .then((result) => {
    console.log("Deleted: ", result);
  })
  .catch((err) => {
    console.log(err);
  });
