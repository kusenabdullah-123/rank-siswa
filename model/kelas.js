const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kelasSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    kelas: String,
    jurusan: String,
  },
  { timestamps: true }
);

const Kelas = mongoose.model("Kelas", kelasSchema);
module.exports = Kelas;
