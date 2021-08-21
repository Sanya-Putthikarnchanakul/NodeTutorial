exports.getIndex = (req, res, next) => {
    try {
        res.render(
            'index/index'
        );
    } catch (err) {
        console.log(err);
    }
}