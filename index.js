const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Siswa = require("./model/siswa");
const Rank = require("./model/ranking");
const mongoDbAtlas =
  "mongodb+srv://dbKusen:kusenDB@cluster0.vkzjd.mongodb.net/<dbname>?retryWrites=true&w=majority";
const mongoDbLocal =
  "mongodb://root:root@127.0.0.1:27017/sekolah?authSource=admin";
mongoose
  .connect(mongoDbAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected database");
  })
  .catch((err) => {
    console.log(err);
  });
const getRank = async (nilai) => {
  const kondisi = [
    { min_nilai: { $lte: nilai } },
    { max_nilai: { $gte: nilai } },
  ];
  const { rank } = await Rank.findOne({ $and: kondisi });
  return rank;
};
app.get("/siswa-insert", async (req, res) => {
  try {
    const Nilai = 30;
    const Rank = await getRank(Nilai);
    const sis = new Siswa({
      _id: mongoose.Types.ObjectId(),
      Name: "one",
      Nilai,
      Rank,
    });
    const result = await sis.save();
    res.status(200).json({ result }).end();
  } catch (error) {
    res.json({ error }).end();
  }
});
app.get("/rank-insert", async (req, res) => {
  try {
    const data = [
      {
        _id: new mongoose.Types.ObjectId(),
        min_nilai: 0,
        max_nilai: 10,
        rank: "very low",
      },
      {
        _id: new mongoose.Types.ObjectId(),
        min_nilai: 10,
        max_nilai: 20,
        rank: "low",
      },
      {
        _id: new mongoose.Types.ObjectId(),
        min_nilai: 20,
        max_nilai: 30,
        rank: "medium",
      },
    ];
    const result = await Rank.insertMany(data);
    res.status(200).json({ result }).end();
  } catch (error) {
    res.json({ error }).end();
  }
});
app.get("/nilai-insert", async (req, res) => {});
app.get("/", async (req, res) => {
  try {
    const sis = await Siswa.find();
    res.json({ sis }).end();
  } catch (error) {
    res.json({ error }).end();
  }
});
app.get("/rank", async (req, res) => {
  try {
    const rank = await Rank.find();
    res.json({ rank }).end();
  } catch (error) {
    res.json({ error }).end();
  }
});

app.listen(5000, (req, res) => {
  console.log("http://localhost:5000");
});
