const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Siswa = require("./model/siswa");

mongoose
  .connect("mongodb://root:root@127.0.0.1:27017/sekolah?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("connected database");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  try {
    const sis = await Siswa.find();
    res.json({ sis }).end();
  } catch (error) {
    res.json({ error }).end();
  }
});

app.listen(5000, (req, res) => {
  console.log("http://localhost:5000");
});
