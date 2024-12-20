import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const generateToken = (payload: string) => {
  const jwt = sign({ payload }, JWT_SECRET, {
    expiresIn: "10d",
  });
  return jwt;
};

export const verifyToken = (token: string) => {
  const isOk = verify(token, JWT_SECRET);
  return isOk;
};