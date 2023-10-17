// npm init -y
// npm i express body-parser mongoose

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //npm i cors
require("./models/db");
// const userRouter = require("./routes/user.route");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 9090;
app.use(cors());
//http://localhost:9090/api/users
app.use("/api/users", require("./routes/user.route"));
app.listen(port, () => console.log(`Server is listening on port ${port}`));
