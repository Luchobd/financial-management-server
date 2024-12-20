import { Auth } from "../entities/Auth.entity";
import { encrypt } from "../jwt/bcrypt.handle";
import { sendEmail } from "../config/email";
import { Register } from "../interfaces/auth.interface";

export const register = async (user: Register) => {
  const { email, password, fullName } = user;

  const userFound = await Auth.findOneBy({ email });
  if (userFound) return { error: "User already exists" };

  await sendEmail({
    type: "register",
    name: fullName,
    email,
  });

  const passHash = await encrypt(password);
  const newUser = Auth.create({ ...user, password: passHash });
  const savedUser = await newUser.save();
  return savedUser;
};
