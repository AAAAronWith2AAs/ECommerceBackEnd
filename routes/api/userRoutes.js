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
      username: "test123",
      email: "a@gmail.com",
      password: "secret",
    },
    {
      username: "seed1",
      email: "seed@gmail.com",
      password: "secret1",
    },
    {
      username: "productBuyer",
      email: "buyer@gmail.com",
      password: "secret12",
    },
    {
      username: "amendo",
      email: "a@gmail.com",
      password: "secret123",
    },
  ]);
});

module.exports = router;
