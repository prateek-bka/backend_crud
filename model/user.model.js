const mongoose = require("mongoose");

//User Schema
const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  age: { type: Number, required: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
