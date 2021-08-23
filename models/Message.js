const mongoose = require('mongoose');

const { getDisplayTime } = require('../utilities/dateTime');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	message: {
		type: String,
		required: true
	},
    isRead: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });

messageSchema.statics.getMessages = async function (receiveId) {
    try {
        const t1 = this.where({ 'receiver': receiveId, 'isRead': false }).countDocuments();
        const t2 = this.find({ receiver: receiveId })
            .sort({ updatedAt: 'desc' })
            .populate('sender', 'fullname')
            .populate('receiver', 'fullname')
            .limit(4);

        const [countIsRead, queryMessages] = await Promise.all([t1, t2]);

        const mapMessages = queryMessages.map(m => {
            return {
                _id: m._id,
                from: m.sender.fullname,
                to: m.receiver.fullname,
                message: m.message,
                timeDisplay: getDisplayTime(m.updatedAt)
            };
        });

        return {
            count: countIsRead,
            messages: mapMessages
        };
    } catch (err) {
        throw err;
    }
};

module.exports = mongoose.model('Message', messageSchema);