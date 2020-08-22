const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siswaSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    Name: String,
    Nilai: Number,
    kelas: { type: Schema.Types.ObjectId, ref: "kelas" },
    Rank: String,
  },
  { timestamps: true }
);

const Siswa = mongoose.model("Siswa", siswaSchema);
module.exports = Siswa;
