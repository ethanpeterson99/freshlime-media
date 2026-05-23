import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailPayload {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, from, replyTo }: EmailPayload) {
  const { data, error } = await resend.emails.send({
    from: from ?? "Fresh Lime Media <hello@freshlimemedia.com>",
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    replyTo,
  });

  if (error) throw new Error(error.message);
  return data;
}
