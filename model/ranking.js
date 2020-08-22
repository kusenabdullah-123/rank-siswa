const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RankSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    min_nilai: Number,
    max_nilai: Number,
    rank: String,
  },
  { timestamps: true }
);

const Rank = mongoose.model("Rank", RankSchema);
module.exports = Rank;
