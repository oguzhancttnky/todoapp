const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.register = async function (
  name,
  email,
  password1,
  password2
) {
  // validation
  if (!name || !email || !password1 || !password2) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  if (password1 !== password2) {
    throw Error("Passwords don't match");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password1, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("User not found");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("User not found");
  }

  return user;
};

// find by id and return
userSchema.statics.findByID = async function (id) {
  const user = await this.findOne({ _id: id });
  if (!user) {
    throw Error("User not found");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
