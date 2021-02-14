const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    player: String,
    position: String
}, {timestamps: true} );
module.exports.Player = mongoose.model('Player', PlayerSchema);