const mongoose = require('mongoose');

const bookroomsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "myPerson",
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rooms",
    },
});

module.exports = mongoose.model('bookedrooms', bookroomsSchema);