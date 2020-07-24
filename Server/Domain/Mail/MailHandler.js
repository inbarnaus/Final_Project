var nodemailer = require('nodemailer');
var CronJob = require('cron').CronJob;

var transporter = nodemailer.createTransport({
  host: 'amtp.gmail.com',
  port: 80,
  secure: false,
  service: 'gmail',
  auth: {
    user: 'mnh.officesystem@gmail.com',
    pass: '5/8LaSqqwwBa#Qv'
  },
  //logger: true
});

// var mailOptions = {
//   from: 'mnh.officesystem@gmail.com',
//   to: 'inbarnaus1@gmail.com',
//   subject: 'עדכון יומי- דיווחים שטרם דווחו',
//   text: 'That was easy!'
// };

//TODO: only at a specific hour
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

//TODO
function mail_confirmation(email, password){
  var confOptions = {
    from: 'mnh.officesystem@gmail.com',
    to: email,
    subject: 'מערכות מומחה - וידוא סיסמא',
    text: password
  };
  transporter.sendMail(confOptions, function(err, info){
    if(err)
      return {succeed: false, res: err};
    else
      return {succeed: true, res: 'נשלח אימייל וידוא בהצלחה'};
  })
  return {succeed: true, res: "confirmation sent"};
};


function mail_registration(email, password){
  
  transporter.sendMail({
    from: 'mnh.officesystem@gmail.com',
    to: email,
    subject: 'מערכות מומחה - נרשמת למערכת בהצלחה',
    text: password
  });
}


// function mail_registration(email, password){
//   var confOptions = {
//     from: 'mnh.officesystem@gmail.com',
//     to: email,
//     subject: 'מערכות מומחה - נרשמת למערכת בהצלחה',
//     text: password
//   };
//   transporter.sendMail(confOptions, function(err, info){
//     if(err)
//       return {succeed: false, res: err};
//     else
//       return {succeed: true, res: 'נשלח אימייל וידוא בהצלחה'};
//   })
//   return {succeed: true, res: "confirmation sent"};
// };

module.exports = {mail_confirmation, mail_registration}