var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'amtp.gmail.com',
  port: 465,
  secure: false,
  service: 'gmail',
  auth: {
    user: 'mnh.officesystem@gmail.com',
    pass: '5/8LaSqqwwBa#Qv'
  },
  //logger: true
});

var mailOptions = {
  from: 'mnh.officesystem@gmail.com',
  to: 'inbarnaus1@gmail.com',
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