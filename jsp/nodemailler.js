const nodemailer = require('nodemailer')

let testEmailAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: valeriy.shestakov@inbox.ru,
    pass: Towelie23101992,
  },
  {
    from: 'mailertest <valeriy.shestakov@inbox.ru>',
  }
)

const mailer = message => {
  transporter.sendMail(message, {err, info} =>{
    if (err) return console.log(err)
      console.log('Email sent: ', info)
  })
}

module.exports = mailer;