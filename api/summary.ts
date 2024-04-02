import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // This is where you'd fetch and process your data
  const summaryData = "This is the summary based on the questionnaire responses.";

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Disposition', 'attachment; filename="DfSyncSummary.pdf"');
  res.write(summaryData);
  res.end();
}