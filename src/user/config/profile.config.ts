import { registerAs } from '@nestjs/config';

export default registerAs('profileConfig', () => ({
  profile: process.env.PROFILE || 'default',
  secret: process.env.SECRET || 'secretKey',
  expiresIn: process.env.EXPIRES_IN || '3600s', // 1 hour
}));
