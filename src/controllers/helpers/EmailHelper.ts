// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.

import nodemailer from "nodemailer";

const transporter = process.env.SMTP_HOST && nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const EmailHelper = {
  send: async (from, to, subject, text, html) => {
    return await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html
    });
  }
};

export {EmailHelper};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.