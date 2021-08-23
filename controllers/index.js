const Message = require('../models/Message');
const User = require('../models/User');

exports.getIndex = async (req, res, next) => {
    try {
        const message = await Message.getMessages(req.session.user._id);

        res.render(
            'index/index',
            {
                title: 'Dashboard 1',
                user: req.session.user,
                message: message
            }
        );
    } catch (err) {
        next(err);
    }
};

exports.getGeneralForm = async (req, res, next) => {
    try {
        const message = await Message.getMessages(req.session.user._id);

        res.render(
            'index/general-form',
            {
                title: 'General Form',
                user: req.session.user,
                message: message
            }
        );
    } catch (err) {
        next(err);
    }
};

exports.getFormValidation = async (req, res, next) => {
    try {
        const message = await Message.getMessages(req.session.user._id);

        res.render(
            'index/form-validation',
            {
                title: 'General Form',
                user: req.session.user,
                message: message
            }
        );
    } catch (err) {
        next(err);
    }
};