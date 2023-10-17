(function (obj, require, module, _filename, _dirname) {
  const fs = require("fs");

  const fileName = "abc.txt";

  // sync

  try {
    // const data = fs.readFileSync(fileName)
    // console.log(data.toString())

    const data = fs.readFileSync(fileName, "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
});

// async

fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Data:", data);
  }
});

// console.log(arguments);

fs.watchFile(fileName, (curr, prev) => {
  console.log("prev change :", prev.ctime);
  console.log("current change :", curr.ctime);
});
