const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    sys: {
        id: {
            type: Number,
        }
    },
    fields: {
        name : {
            type: String,
        },
        slug : {
            type: String,
        },
        type: {
            type: String
        },
        price: {
            type: Number,
        },
        size: {
            type: Number
        },
        capacity: {
            type: Number
        },
        pets: {
            type: Boolean
        },
        breakfast: {
            type: Boolean
        },
        featured: {
            type: Boolean
        },
        description: {
            type: String
        },
        extras: {
            type: [String]
        },
        available: {
            type: Boolean,
            default: true,
        },
        images: [{
            fields: {
                file: {
                    url: {
                        type: String
                    }
                }
            }
        }]
    }
});

module.exports = Person = mongoose.model("rooms", RoomSchema);