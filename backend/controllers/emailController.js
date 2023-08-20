import nodemailer from 'nodemailer';

export const sendEmailToAuthor = async (req, res) => {
  const { to, subject, text } = req.body;


  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
  port: 465,
  secure: true,
      auth: {
        user: process.env.Email,
        pass: process.env.Password,
      },
    });

    const mailOptions = {
      from: process.env.Email,
      to, 
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
};
