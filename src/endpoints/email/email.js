const nodemailer = require("nodemailer");

async function email(email, nome, mensagem) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, //SSL/TLS
    auth: {
      user: "controlfood@outlook.com",
      pass: "Duplofator123",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"ControlFood" <controlfood@outlook.com>', // sender address
    to: email, // list of receivers
    subject: nome, // Subject line
    text: mensagem, // plain text body
  });
  return "Message sent successfully as " + info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com
}

module.exports = { email };
