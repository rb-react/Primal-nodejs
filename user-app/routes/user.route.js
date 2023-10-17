const router = require("express").Router();

const {
  createUser,
  deleteUser,
  fetchOneUser,
  fetchAllUser,
  updateUser,
} = require("../controllers/user.controllers");

//localhost:9090/api/users

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", fetchOneUser);
router.get("/", fetchAllUser);

module.exports = router;
