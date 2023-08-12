import nodemailer from 'nodemailer';

export const sendEmail = async (req, res, next) => {
  try {
    const { recipientEmail, subject, message } = req.body;

    if (!recipientEmail || !subject || !message) {
      res.status(400).json({ error: 'Missing email details.' });
      return;
    }

 
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (err) {
    next(err);
  }
};
