const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sipandey6@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sipandey6@gmail.com',
        subject: 'Unfortunate that you are leaving!',
        text: `It is unfortunate that you are leaving ${name}. Do let us know if you have any feedback.`
    })
}

module.exports = {
    sendWelcomeEmail: sendWelcomeEmail,
    sendCancellationEmail: sendCancellationEmail
}

