const mongoose = require("mongoose");
const User = require("../models/logindata.js");
async function con() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userdata");
}

async function Authn(name, password) {
  await con();
  var e = {};

  const r = await User.find();
  for (var i = 0; i < r.length; i++) {
    if (r[i].name == name && r[i].password == password) {
      e = r[i];

      break;
    }
  }
  mongoose.connection.close();
  return e;
}

module.exports = Authn;
