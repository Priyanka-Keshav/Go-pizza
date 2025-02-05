const User = require("../Models/User");
const create_user = async (req, res) => {
  try {
    const { email_id, password, username } = req.body;
    const newUser = new User({ email_id, password, username });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.send({ message: error });
  }
};

const sign_in = async (req, res) => {
  try {
    const { email_id, password } = req.body;
    const user = await User.findOne({ email_id });
    if (user) {
      if (user.password != password) {
        return res.status(401).json({ message: "Invalid password" });
      } else {
        return res.status(201).json({
          email_id: user.email_id,
          username: user.username,
          _id: user._id,
        });
      }
    } else {
      return res.status(500).json({ message: "Sign in first" });
    }
  } catch (error) {
    res.send(401).json({ message: error.message });
  }
};
module.exports = { create_user, sign_in };
