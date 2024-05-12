const mongoose = require("mongoose");
const User = require("../models/logindata.js");
async function con() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userdata");
}

async function Insert(name, password, mobilenumber) {
  await con();
  const user = new User();
  user.set(name, password, mobilenumber);
  const result = await user
    .save()
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return false;
    });
  mongoose.connection.close();

  return result;
}

module.exports = Insert;
