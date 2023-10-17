// create
// update
// delete
// fetch One
// fetch all
const UserModel = require("../models/user.model");
const UserCtrl = {
  // create
  createUser(req, res) {
    const data = req.body;
    new UserModel(data)
      .save()
      .then((result) => {
        res.status(201).send({ data: result, message: "created the user" });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .send({ error: err, message: "Could not created the user" });
      });
  },
  // update
  updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;
    UserModel.updateOne({ _id: id }, data)
      .then((result) => {
        res.status(200).send({ data: null, message: "updated the user" });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ error: err, message: "Could not updated the user" });
      });
  },
  // delete
  deleteUser(req, res) {
    const { id } = req.params;
    UserModel.deleteOne({ _id: id })
      .then((result) => {
        res.status(200).send({ data: null, message: "deleted the user" });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(404)
          .send({ error: err, message: "Could not deleted the user" });
      });
  },
  // fetch One
  fetchOneUser(req, res) {
    const { id } = req.params;
    UserModel.findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ data: result, message: "The user details" });
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send({ error: err, message: "user not available" });
      });
  },
  // fetch all
  fetchAllUser(req, res) {
    UserModel.find()
      .then((result) => {
        res.status(200).send({ data: result, message: "the user details" });
      })
      .catch((err) => {
        console.error(err);
        res.status(404).send({ error: err, message: "user not available" });
      });
  },
};

module.exports = UserCtrl;
