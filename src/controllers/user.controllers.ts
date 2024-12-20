import { Request, Response } from "express";
import {
  createUserService,
  getUsersService,
  getUserService,
  updateUserService,
  deleteUserService,
} from "../services/user.services";
import { ErrorMessages } from "../errors/errorMessages";

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { firstName, lastName, email } = req.body;

    const response = await createUserService({
      firstName,
      lastName,
      email,
    });

    return res.status(201).json({
      message: "information saved successfully",
      user: response,
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await getUsersService();

    return res.status(200).json({
      message: "Information displayed correctly",
      users: response,
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};

export const getUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const response = await getUserService({ id });

    if (!response)
      return res.status(404).json({ message: "User does not exists" });

    return res.status(200).json({
      message: "Information displayed correctly",
      user: response,
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { firstName, lastName, email, active } = req.body;
    const { id } = req.params;

    const response = await updateUserService({
      firstName,
      lastName,
      email,
      active,
      id,
    });

    if (!response)
      return res.status(404).json({ message: "User does not exists" });

    return res.status(200).json({
      user: response,
      message: "User update successfully",
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const response = await deleteUserService({ id });

    if (!response.affected)
      return res.status(404).json({ message: "User does not exists" });

    return res.status(200).json({
      items: response,
      message: "User deleted successfully",
    });
  } catch (error) {
    ErrorMessages(error, res);
  }
};
