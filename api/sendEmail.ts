import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  message: string;
  info?: nodemailer.SentMessageInfo;
  error?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'marc.carlson117@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const { subject, message } = req.body;

    const mailOptions = {
      from: '"Your Name" <your-email@example.com>', // Sender address
      to: 'receiver-email@example.com', // List of receivers
      subject: subject,
      text: message,
      html: `<b>${message}</b>`, // HTML body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({
            success: false, error: error.message,
            message: ''
        });
      }
      res.status(200).json({ success: true, message: 'Email successfully sent!', info });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
