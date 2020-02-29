const mongoose = require('mongoose');

const bookroomsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        path: "myPerson",
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        path: "rooms",
    },
});

module.exports = mongoose.model('bookedrooms', bookroomsSchema);