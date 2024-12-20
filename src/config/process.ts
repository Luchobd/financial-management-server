process.loadEnvFile();

export const {
  PORT = 3002,
  TYPE_DB,
  HOST_DB,
  USER_DB,
  PASSWORD_DB,
  PORT_DB = 5432,
  NAME_DB,
  JWT_SECRET,
  API_KEY_RESEND,
  TO_EMAIL,
  FROM_EMAIL,
} = process.env;
