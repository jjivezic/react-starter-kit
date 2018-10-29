var nodemailer = require('nodemailer'),
  Q = require("q");

var bodyTypes = {
  "HTML": "html",
  "TEXT": "text"
};

module.exports.bodyTypes = bodyTypes;

var transporter = nodemailer.createTransport(
    {
        host: 'cp15.cpanelhosting.rs',
        // service: mail.hyperether.com,
        port: 465,
        secure: true,
        auth: {
          user: 'tradeit@hyperether.com',
          pass: 'TradeiT2018'
        }
      }
);

module.exports.sendContactMail = function (name,from,phone, message) {
  var deferred = Q.defer();
  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: '"' + name + '" <' + from + '>', // sender address
    to: "jj_ivezic@yahoo.com", // list of receivers
    subject:"Contact from webpage" // Subject line
  };

  mailOptions.html =  "<b>Name:</b>" + name + "<br><b>Phone number:</b>" + phone +"<br><b>Email:</b>" + from +  "<br><b>Message:</b>" + message;
  


  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      if (err.code === 'ETIMEDOUT') {
        console.log('SMTP session is timeouted');
      }
      deferred.reject(err);
    } else {
      console.log('Resolved sending',info)
      deferred.resolve(info);
    }
  });
  return deferred.promise;
};