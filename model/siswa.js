const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siswaSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    Name: String,
    Nilai: Number,
    Rank: String,
  },
  { timestamps: true }
);

const Siswa = mongoose.model("Siswa", siswaSchema);
module.exports = Siswa;
