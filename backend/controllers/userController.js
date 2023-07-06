const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "3d",
    });
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 3);

    res
      .cookie("access-token", token, {
        expires: expirationDate,
      })
      .status(200)
      .json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// register a user
const registerUser = async (req, res) => {
  const { name, email, password1, password2 } = req.body;

  try {
    const user = await User.register(name, email, password1, password2);

    // create a token
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "3d",
    });

    res.cookie("access-token", token).status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// logout a user
const logoutUser = async (req, res) => {
  try {
    // delete the token
    res
      .status(200)
      .clearCookie("access-token")
      .json({ message: "Token deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// find the user by id
const getById = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get user by token
const getUser = async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decoded.id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, registerUser, logoutUser, getById, getUser };
