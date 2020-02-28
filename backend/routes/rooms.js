const router = require('express').Router();
const rooms = require('../models/rooms');
const bookrooms = require('../models/bookedrooms');

router.get('/availablerooms', async (req, res) => {
    const room = await rooms.find({ 'fields.available': true });
    res.json(room);
});

router.post('/bookrooms', async (req, res) => {
    // if
    const { user, room } = req.body;
    await rooms.updateOne({ _id: room }, { 'fields.available': false });
    const bookroom = new bookrooms({ user, room });
    await bookroom.save();
    res.json({ success: true });
});

router.get('/bookedrooms', async (req, res) => {
    const { id } = req.query;
    console.log(id)
    const data = await bookrooms.find({ user: id }).populate({
        path: 'rooms'
    });
    res.json(data);
})

module.exports = router;