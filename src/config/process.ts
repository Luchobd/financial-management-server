process.loadEnvFile();

export const {
  PORT = 3002,
  TYPE_DB,
  HOST_DB,
  USER_DB,
  PASSWORD_DB,
  PORT_DB = 5432,
  NAME_DB,
} = process.env;
