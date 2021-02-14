const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get('/api', PlayerController.index);
    app.post('/api/player', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayer);
    app.get('/api/player/:id', PlayerController.getPlayer);
    app.delete('/api/player/:id', PlayerController.deletePlayer);


}