module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("index");
	});
	// post route for adding a data from a survey
	app.post('/result', function(req, res) {
		const submittedInfo = {
			name: req.body.name,
			dojoLocation: req.body.dojoLocation,
			favoriteLanguage: req.body.favoriteLanguage,
			comment: req.body.comment
    };

	 	res.render("result", { userData: submittedInfo });
	});
};