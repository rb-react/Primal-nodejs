const path = require("path");

const fs = require("fs");

const path = "../";

fs.readdir(path, (err, files) => {
  if (err) console.log(err.message);
  else {
    for (const file of files) {
      console.log(file);
    }
  }
});
