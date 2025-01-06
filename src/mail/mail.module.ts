import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import emailConfig from 'src/config/email.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';

@Global() // i don't have to import directly(via module imports) i can use it anywhere
@Module({
  imports: [
    ConfigModule.forFeature(emailConfig),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        console.log({ configService });
        console.log(configService.get('emailConfig.mailHost'))
        console.log(configService.get('emailConfig.mailPort'))
        console.log(configService.get('emailConfig.mailSecure'))
        console.log(configService.get('emailConfig.smtpUsername'))
        console.log(configService.get('emailConfig.smtpPassword'))
        return {
          transport: {
            // host: configService.get('MAIL_HOST'),
            host: configService.get('emailConfig.mailHost'),
            port: configService.get('emailConfig.mailPort'),
            secure: configService.get('emailConfig.mailSecure'),
            auth: {
              user: configService.get('emailConfig.smtpUsername'),
              pass: configService.get('emailConfig.smtpPassword'),
            },
          },
          defaults: {
            from: '"NoReply" <noreply@yourdomain.com>',
          },
          template: {
            dir: join(__dirname, 'templates'),
            ext: '.ejs',
            adapter: new EjsAdapter(),
            options: {
              strict: false,
            },
          },
        };
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService], // make it available for other modules to use it
  controllers: [], // no controllers here as this is just a service module
})
export class MailModule {}
