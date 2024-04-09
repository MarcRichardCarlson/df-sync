import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File, Fields } from 'formidable';
import nodemailer from 'nodemailer';
import util from 'util';
import { readFileSync, existsSync } from 'fs';
import { SentMessageInfo } from 'nodemailer';
import backgroundImage from "../../public/assets/Background.jpg"

interface Files {
    [key: string]: File | File[] | undefined;
}

type Data = {
  success: boolean,
  message: string,
  info?: SentMessageInfo,
  error?: string,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  try {
    const data = await new Promise<{ fields: Fields; files: Files }>((resolve, reject) => {
      const form = new IncomingForm();
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { fields, files } = data;

    let attachments: Array<{ filename: string; content: Buffer }> = [];
    if (files.file) {
      const fileArray = Array.isArray(files.file) ? files.file : [files.file];
      attachments = fileArray.filter(file => existsSync(file.filepath)).map((file: File) => {
        return {
          filename: file.originalFilename || 'default_filename.txt',
          content: readFileSync(file.filepath),
        };
      });
    }

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'marc.carlson116@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: fields.subject as unknown as string,
      to: 'marc.carlson117@gmail.com',
      subject: "DF Sync Contact Form",
      text: `You have received a new message from ${fields.name} (${fields.email}):\n\n${fields.subject}\n\n${fields.message}\n\nThis message was sent via the DF Sync Contact Form. Please be aware that DF Sync is not liable for any spam or unauthorized usage of this email service. Legal actions may be taken against misuse.`,
      html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px;">
        <p>You have received a new message via the <strong>DF Sync Contact Form</strong>:</p>
        <p><strong>Sender:</strong> ${fields.name} | ${fields.email}</p>
        <p><strong>Subject:</strong> ${fields.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${fields.message}</p>
      </div>
      
      <p style="font-size: 12px">Please be aware that DF Sync is not liable for any spam or unauthorized usage of this email service. Legal actions may be taken against misuse.</p>
      `,
      // Attachments are added only if they exist
      ...(attachments.length > 0 && { attachments }),
    };

    const sendMail = util.promisify(transporter.sendMail).bind(transporter);
    const info = await sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email successfully sent!', info });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message || 'An error occurred',
      message: 'Failed to send email',
    });
  }
}
