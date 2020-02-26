const router = require('express').Router();
const rooms = require('../models/rooms');
const bookrooms = require('../models/bookedrooms');

router.get('/availablerooms', async (req, res) => {
    const room = await rooms.find({ 'fields.available': true });
    res.json(room);
});

router.post('/bookrooms', async (req, res) => {
    console.log(req.body)
    const { user, room } = req.body;
    await rooms.updateOne({ _id: room }, { 'fields.available': false });
    const bookroom = new bookrooms({ user, room });
    await bookroom.save();
    res.json({ success: true });
});

router.get('/bookedrooms/:id', async (req, res) => {
    console.log('fghjk')
    const { id } = req.params;
    console.log(id)
    const data = await bookrooms.find({ user: id }).populate({
        path: './room'
    })
    res.json(data);
})

module.exports = router;