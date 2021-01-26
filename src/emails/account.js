const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aryamans1997@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
    })
}

const sendGoodByeEmail = (email, name) => {
    console.log('sendGoodByeEmail')
    sgMail.send({
        to: email,
        from: 'aryamans1997@gmail.com',
        subject: 'Sad to know that you are leaving us!',
        text: `Hi, ${name}. Please us know if we could have done anything different to keep you with us.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}

