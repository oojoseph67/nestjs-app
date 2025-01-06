import { registerAs } from '@nestjs/config';

export default registerAs('emailConfig', () => {
  return {
    mailHost: process.env.MAIL_HOST,
    mailPort: parseInt(process.env.MAIL_PORT, 10) || 465,
    mailSecure: process.env.MAIL_SECURE === 'true' ? true : false,
    smtpUsername: process.env.SMTP_USERNAME,
    smtpPassword: process.env.SMTP_PASSWORD,
  };
});
