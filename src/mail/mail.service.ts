import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/schema/user.schema';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  public async sendWelcomeMail({ user }: { user: User }): Promise<void> {
    const { email, firstName, lastName } = user;

    await this.mailerService.sendMail({
      to: email,
      from: '"NoReply" <noreply@yourdomain.com>',
      subject: 'Welcome to our platform!',
      template: 'welcome',
      context: {
        firstName,
        lastName,
        email,
        loginUrl: 'http://localhost:7321/auth/login',
      },
    });
  }
}
