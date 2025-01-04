import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('production', 'development', 'test', 'staging')
    .default('development'),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().port().default(5432),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_SYNC: Joi.boolean().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_TOKEN_AUDIENCE: Joi.string().required(),
  JWT_TOKEN_ISSUER: Joi.string().required(),
  JWT_ACCESS_TOKEN_TIME_TO_LIVE: Joi.number().required(),
  JWT_REFRESH_TOKEN_TIME_TO_LIVE: Joi.number().required(),
  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_CLIENT_SECRET_KEY: Joi.string().required(),
  GOOGLE_REDIRECT_URI: Joi.string().required(),
  // S3_BUCKET: Joi.string().required(),
  // S3_REGION: Joi.string().required(),
  // S3_ACCESS_KEY_ID: Joi.string().required(),
  // S3_SECRET_ACCESS_KEY: Joi.string().required(),
});
