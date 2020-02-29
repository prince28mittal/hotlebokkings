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
    const data = await bookrooms.find({ user: id }).populate('room');
    res.json(data);
});

router.post('/removebookedrooms', async (req, res) => {
    const { id, roomid } = req.body;
    await bookrooms.findOneAndRemove({ _id: id });
    await rooms.updateOne({ _id: roomid }, { 'fields.available': true })
    res.json({success: true, msg: 'done'});
});

module.exports = router;