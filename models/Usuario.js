const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    name: { 
        type: String,
        requireq: true
    },
    email: {
        type: String,
        requireq: true,
        unique: true
    },
    password: {
        type: String,
        requireq: true
    }

});

module.exports = model('Usuario', UsuarioSchema);
