var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// For posting contacting email
router.post('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service: 	'Gmail',
		auth: {
			user: 'account@gmail.com',
			pass: 'account-password'  
		}
	});

	var mailOptions = {
		from: 	 'john@outlook.com',
		to: 	 'account@gmail.com',
		subject: 'Website Submission',
		text: 	 'You have a new submission with the details of name: ' +req.body.name+ 
				 'email: ' +req.body.email+ ' Message: ' +req.body.message,
		html: 	 '<p>You have a new submission with the following details</p> <ul><li>Name: ' +req.body.name+ 
				 '</li><li>email: ' +req.body.email+ '</li><li> Message: ' +req.body.message+ '</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if (error) { 
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent '+info.response);
			res.redirect('/');
		}
	});

});

module.exports = router;