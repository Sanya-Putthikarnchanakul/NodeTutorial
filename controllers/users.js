const { signupUser, loginUser } = require('../mock-db/db');

exports.getLogin = (req, res, next) => {
    try {
        res.render(
            'users/login',
            {
                title: 'Gentelella Alela! | '
            }
        );
    } catch (err) {
        console.log(err);
    }
}

exports.postLogin = (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = loginUser({ username, password });

        if (!user) return res.redirect('/errors/404');

        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}

exports.postSignup = (req, res, next) => {
    try {
        const fullname = req.body.fullname;
        const username = req.body.username;
        const password = req.body.password;

        signupUser({ fullname, username, password });

        res.redirect('/users/login');
    } catch (err) {
        console.log(err);
    }
}