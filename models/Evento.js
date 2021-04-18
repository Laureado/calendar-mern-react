const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    title: {
        type: String,
        requireq: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        requireq: true
    },
    end: {
        type: Date,
        requireq: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        requireq: true
    }

});

EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('Evento', EventoSchema);