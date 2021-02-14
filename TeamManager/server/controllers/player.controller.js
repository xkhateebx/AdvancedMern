const { Player } = require('../models/player.model');


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

module.exports.createPlayer = (request, response) => {
    const { player , position } = request.body;
    Player.create({
        player,
        position
    })
        .then(player => response.json(player))
        .catch(err => response.json(err));
}

module.exports.getAllPlayer = (request, response) => {
    Player.find({})
        .then(players => response.json(players))
        .catch(err => response.json(err))
}

module.exports.getPlayer = (request, response) => {
    Player.findOne({_id: request.params.id})
        .then(player => response.json(player))
        .catch(err => response.json(err));
}
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
