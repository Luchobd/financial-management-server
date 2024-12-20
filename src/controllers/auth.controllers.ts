import { Request, Response } from "express";
import {
  forgotPassword,
  login,
  register,
  sendPassChangeEmail,
} from "../services/auth.services";
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

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await login({ email, password });

    res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};

export const sendChangeMailController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const forgotPass = await sendPassChangeEmail(body);
    res.status(200).json({
      message: "Email sent successfully",
      user: forgotPass,
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};

export const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const forgotPass = await forgotPassword(body);
    res.status(200).json({
      message: "Password changed successfully",
      user: forgotPass,
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};
