const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema(
  {
    player: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Game = mongoose.model('game', GameSchema);
