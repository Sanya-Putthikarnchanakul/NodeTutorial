const User = require('../models/User');

exports.getLogin = (req, res, next) => {
    try {
        res.render(
            'users/login',
            {
                title: 'Login'
            }
        );
    } catch (err) {
        next(err);
    }
}

exports.postLogin = async (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({ username: username, password: password }).exec();

        if (!user) {
            let error = new Error('User not Found.');
            error.statusCode = 404;
            return next(error);
        }

        req.session.user = user;
        req.session.save(err => {
            if (err) {
                throw err;
            }

            res.redirect('/');
        });       
    } catch (err) {
        next(err);
    }
}

exports.postSignup = async (req, res, next) => {
    try {
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = req.body.password;

        const user = new User({
            fullname: fullname,
            username: username,
            password: password
        });

        await user.save();       

        res.redirect('/users/login');
    } catch (err) {
        next(err);
    }
}

exports.getLogout = async (req, res, next) => {
    try {
        req.session.destroy(err => {		
            if (err) throw err;
    
            res.redirect('/users/login');
        });
    } catch (err) {
        next(err);
    }
}