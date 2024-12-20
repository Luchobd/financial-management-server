import { Request, Response } from "express";
import { register } from "../services/auth.services";
import { ErrorMessages } from "../errors/errorMessages";

export const registerController = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const user = await register(body);

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};
