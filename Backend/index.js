const { Collt } = require("./algos/collt.js");
const CrO = require("./business/createorder.js");
var mongoose = require("mongoose");
var cors = require("cors");
var Prod = require("./models/productdata.js");
const Authn = require("./business/authn.js");
const Insert = require("./business/insertUser.js");
const express = require("express");
const app = express();
async function con() {
  await mongoose.connect("mongodb://127.0.0.1:27017/productdata");
}

app.use(cors());

app.listen(8080, () => {
  console.log("server started");
});

app.get("/", async (req, res) => {
  await con();
  const prods = await Prod.find();
  mongoose.connection.close();
  res.send(prods);
});

app.post("/order", async (req, res) => {
  console.log(req.query.value);
  const r = await CrO(req.query.value);

  res.send(r);
});

app.get("/fe", async (req, res) => {
  await con();
  const prod = await Prod.find();
  const result = await Collt(req.query.value, prod);
  //   mongoose.connection.close();
  res.send(result);
});

app.get("/login", async (req, res) => {
  const r = await Authn(req.query.name, req.query.password);
  console.log(r);
  res.send(r);
});

app.get("/signup", async (req, res) => {
  const r = await Insert(
    req.query.name,
    req.query.password,
    req.query.mobilenumber
  );

  res.send(r);
});
