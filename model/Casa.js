const mongoose = require('../config/conexao');

const casaSchema = new mongoose.Schema({
    preco_noite:  String,
    endereco: String,
    foto: String,
});

const casa = mongoose.model('casa', casaSchema);

module.exports = casa
