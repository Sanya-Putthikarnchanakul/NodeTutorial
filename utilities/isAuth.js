const isAuth = (req, res, next) => {
    try {
        if (!req.session.user) return res.redirect('/users/login');

        next();
    } catch (err) {        
        next(err);
    }
}

module.exports = isAuth;