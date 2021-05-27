const router = require("express").Router();
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    //query the database table for all users
    const users = await User.findAll();
  } catch (error) {}
});

router.post("/", async (req, res) => {
  //create a new user in the database table
});

//route will insert bulk seed data
router.post("/seed", (req, res) => {
  User.bulkCreate([
    {
      username: "amendo",
      email: "a@gmail.com",
      password: "secret",
    },
    {
      username: "amendo",
      email: "a@gmail.com",
      password: "secret",
    },
    {
      username: "amendo",
      email: "a@gmail.com",
      password: "secret",
    },
    {
      username: "amendo",
      email: "a@gmail.com",
      password: "secret",
    },
  ]);
});

module.exports = router;
