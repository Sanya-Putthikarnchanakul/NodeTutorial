const express = require('express');

const router = express.Router();

const Message = require('../models/Message');
const User = require('../models/User');

router.post('/post-message', express.json(), async (req, res) => {
    try {
        const enteredSender = req.body.sender;
        const enteredReceiver = req.body.receiver;
        const enterdMessage = req.body.message;

        const t1 = User.findOne({ username: enteredSender }).exec();
        const t2 = User.findOne({ username: enteredReceiver }).exec();

        const [sender, receiver] = await Promise.all([t1, t2]);

        if (!sender || !receiver) throw new Error('No Sender or Receiver');

        const query = new Message({
            sender: sender._id,
            receiver: receiver._id,
            message: enterdMessage
        });

        const result = await query.save();

        res.json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/get-message', async (req, res) => {
    try {
        const receiverId = req.query.receiverId;

        const countIsRead = await Message.where({ 'receiver': receiverId, 'isRead': false }).count();

        const queryMessages = await Message.find({ receiver: receiverId })
            .sort({ updatedAt: 'desc' })
            .populate('sender', 'fullname')
            .populate('receiver', 'fullname')            
            .limit(4);

        res.json({
            count: countIsRead,
            messages: queryMessages
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;