const express = require('express');
const router = express.Router();

// Load Models
const User = require('../db/models/User');
const Game = require('../db/models/Game');

// @route   POST /api/game
// @desc    Save game
// @access  Public
router.post('/game', async (req, res) => {
  const { name, score } = req.body;
  try {
    let user = await User.findOne({ name });

    if (!user) {
      const newUser = await User.create({ name });
      if (!newUser) throw 'Unable to create a user';
      user = newUser;
    }

    const newGame = await Game.create({ player: user._id, score });

    return res.status(200).json({ success: true, game: newGame });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
});

// @route   GET /api/game
// @desc    Return game
// @access  Public
router.get('/game', async (req, res) => {
  try {
    const games = await Game.find({}).sort({ createdAt: -1 }).populate('player', 'name');

    const improvedGames = games.map((game) => ({ _id: game._id, name: game.player.name, score: game.score }));

    return res.status(200).json({ success: true, games: improvedGames });
  } catch (error) {
    console.log('error', error);
    return res.status(400).json({ success: false, message: error });
  }
});

module.exports = router;
