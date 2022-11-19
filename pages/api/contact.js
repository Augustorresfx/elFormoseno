const nodemailer = require("nodemailer");

export default async (req, res) => {

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "agustorres633@gmail.com",
        pass: process.env.password,
    },
    secure: true,
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
           
            resolve(success);
        }
    });
});

const mailData = {
    from: {
        name: req.body.name,
        address: "agustorres633@gmail.com",
    },
    to: "webly.contact@gmail.com",
    subject: `Mensaje de formulario`,
    text: req.body.message + " | Enviado por: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Enviado por: ${req.body.email}</p><p>Teléfono: ${req.body.phone}<p>`,
};

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            // console.error(err);
            reject(err);
        } else {
            // console.log(info);
            resolve(info);
        }
    });
});

res.status(200).json({ status: "OK" });
};