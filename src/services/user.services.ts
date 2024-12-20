import { User } from "../entities/User.entity";
import { CreateUser, UpdateUser } from "../interfaces/user.interface";

export const createUserService = async ({
  firstName,
  lastName,
  email,
}: CreateUser) => {
  const existingUser = await User.findOne({
    where: { firstName, lastName, email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;

  return await user.save();
};

export const getUsersService = async () => {
  const users = await User.find({});

  return users;
};

export const getUserService = async ({ id }: { id: string }) => {
  const user = await User.findOneBy({ id: Number(id) });

  return user;
};

export const updateUserService = async ({
  firstName,
  lastName,
  email,
  active,
  id,
}: UpdateUser) => {
  const user = await User.findOneBy({ id: Number(id) });

  await User.update({ id: Number(id) }, { firstName, lastName, email, active });

  return user;
};

export const deleteUserService = async ({ id }: { id: string | number }) => {
  const user = await User.delete({ id: Number(id) });

  return user;
};
