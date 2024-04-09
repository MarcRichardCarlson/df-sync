import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File, Fields } from 'formidable';
import nodemailer from 'nodemailer';
import util from 'util';
import { readFileSync, existsSync } from 'fs';
import { SentMessageInfo } from 'nodemailer';

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
      from: `"DF Sync Contact: Form <${fields.name}> | <${fields.email}>"`,
      to: 'marc.carlson117@gmail.com',
      subject: fields.subject as unknown as string,
      text: fields.message as unknown as string,
      html: `<b>${fields.message}</b>`,
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
