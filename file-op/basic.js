// commonjs module loader

const fs = require("fs");

const filename = "abc.txt";

// fs.writeFileSync(filename, ''); //to create and write the content

if (fs.existsSync(filename)) {
  console.log(`${filename} is available`);
} else {
  console.log(`${filename} is not available`);
}

// check whether the givne path is file or directory

fs.stat(filename, (err, stat) => {
  if (err) console.log("error message");
  else {
    if (stat.isDirectory()) console.log(`${filename} is a directory`);
    if (stat.isFile()) console.log(`${filename} is a file`);

    console.log(`created: ${stat.birthtime}`);
    console.log(`changed: ${stat.ctime}`);
    console.log(`modified: ${stat.mtime}`);
    console.log(`accessed: ${stat.atime}`);
  }
});
