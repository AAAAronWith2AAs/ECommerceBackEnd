const router = require("express");
const User = require("../../models/User");

router.get("/", async (req, res) => {
  //query the database table for all users
});

router.post("/", async (req, res) => {
  try {
    //create a new user in the database table
    const users = await User.findAll();
  } catch (error) {}
});

module.exports = "router";
