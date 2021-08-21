exports.get404 = (req, res, next) => {
    try {
        res.render(
            'errors/404',
            {
                title: 'Not Found'
            }
        );
    } catch (err) {
        console.log(err);
    }
}