const fs = require("fs");
const fileName = "abc.txt";

// synchronously write content

try {
  fs.writeFileSync(fileName, "data to write");
} catch (err) {
  console.log("could not write");
}

// asynchorously write content

fs.writeFile(fileName, "async data to write", (err) => {
  if (err) console.log("could not written");
  else console.log("Writtern to the file");
});

fs.appendFile(fileName, "async appended datat to write", (err) => {
  if (err) console.log("could not appended");
  else console.log("Appended to the file");
});
