const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mom870522@gmail.com',
    pass: 'Geniune9'
  }
});

var mailOptions = {
  from: 'mom870522@gmail.com',
  to: 'moeodah@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

