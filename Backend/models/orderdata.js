const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: String,
    password: String,
    MobileNumber: String,
  },
  {
    methods: {
      set(name, password, MobileNumber) {
        this.name = name;
        this.password = password;
        this.MobileNumber = MobileNumber;
      },
    },
  }
);

module.exports = mongoose.model("User", schema);
