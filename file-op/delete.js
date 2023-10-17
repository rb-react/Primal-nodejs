// const fs = require("fs");

// const fileName = "abc.txt";

// try {
//   fs.unlinkSync(fileName);
// } catch (err) {
//   console.log(err.message);
// }

// fs.unlink(fileName, (err) => {
//   if (err) console.log(`Could not deleted: ${err.message}`);
//   else console.log("Deleted the file" + fileName);
// });

const fs = require("fs/promises");

const fileName = "write.js";

fs.unlink(fileName)
  .then(() => {
    console.log("deleted: ");
  })
  .catch((err) => {
    console.log("not deleted", err.message);
  });
