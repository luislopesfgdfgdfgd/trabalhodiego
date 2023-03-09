const mongoose = require('../config/conexao');

const postSchema = new mongoose.Schema({
    texto: String,
    data: Date,
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dono'
    },
    casa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'casa'
    }
});

const post = mongoose.model('post', postSchema);

module.exports = post