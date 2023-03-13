const router = require("express");
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  //create a new user in the database table
});

//route will insert bulk seed data
router.post("/seed", (req, res) => {
  User.bulkCreate([
    {
      username: "amendoza",
      email: "amendoza@gmail.com",
      password: "secret",
    },
    {
      username: "awelch",
      email: "awelch@gmail.com",
      password: "secret",
    },
    {
      username: "blevy",
      email: "blevy@gmail.com",
      password: "secret",
    },
    {
      username: "askercambria",
      email: "askercambria@gmail.com",
      password: "secret",
    },
  ]).then(() => {
    res.send("Table has been seeded!");
  });
});

module.exports = router;
