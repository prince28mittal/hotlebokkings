const mongoose = require('mongoose');

const bookroomsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model('bookedrooms', bookroomsSchema);