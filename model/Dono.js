const mongoose = require('../config/conexao');

const usuarioSchema = new mongoose.Schema({
    nome:  String,
    email: String,
    telefone: String,
    foto: String,
    casa:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:'casa'
    }
});

const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario
