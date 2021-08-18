exports.getIndex = (req, res, next) => {
	try {
		res.render('shop/index');
	} catch (err) {
		console.log(err);
	}
};