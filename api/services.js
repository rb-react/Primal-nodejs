const createUser = (req, res) => {
  res.status(200).send("user created");
};

const sendEmail = (req, res) => {
  res.status(200).send("Email sent");
};

const generateReport = (req, res) => {
  res.status(200).send("report generated");
};

module.exports = { createUser, sendEmail, generateReport };
