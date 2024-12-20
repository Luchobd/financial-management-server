import { Response } from "express";

export const ErrorMessages = (error: unknown, res: Response) => {
  if (error instanceof Error) {
    return res.status(500).json({ message: error.message });
  }
  return res.status(500).json({ message: "An unknown error occurred" });
};
