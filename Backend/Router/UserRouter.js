const { create_user, sign_in } = require("../Functions/UserFunc");
const express = require("express");
const userrouter = express.Router();
userrouter.post("/create", create_user);
userrouter.get("/", (req, res) => {
  res.send("Hello from the API");
});
userrouter.post("/login", sign_in);
module.exports = userrouter;
