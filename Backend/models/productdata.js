const mongoose = require("mongoose");

const schema = mongoose.Schema(
  { id: Number, name: String, image: String, category: String },
  { collection: "productdata" }
);
module.exports = mongoose.model("Prod", schema);
// module.exports = schema;
