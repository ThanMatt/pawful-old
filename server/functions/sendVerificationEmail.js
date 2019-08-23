const sgMail = require('@sendgrid/mail');
require('dotenv').config({path: '../../.env'});
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sendVerificationEmail = (user, token) => {
  const API_URL = process.env.API_URL;
  msg = {
    to: user.email,
    from: 'no-reply@pawful.com',
    subject: `You've registered on Pawful`,
    text: 'testing testin',
    html: `You have registered on Pawful, ${user.username}.\nPlease click the verification link below to verify that is you\n${API_URL}/auth/verification?token=${token}&email=${user.email}`
  };
  sgMail.send(msg);
}