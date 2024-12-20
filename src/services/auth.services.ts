import { Auth } from "../entities/Auth.entity";
import { encrypt, verified } from "../jwt/bcrypt.handle";
import { generateToken } from "../jwt/jwt.handle";
import { sendEmail } from "../config/email";
import { User, Login } from "../interfaces/auth.interface";
import { v4 as uuidv4 } from "uuid";

export const register = async (user: User) => {
  const { email, password, fullName } = user;

  // ! FALTA VALIDAR QUE EL CORREO SI SEA UN CORREO VALIDO.
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

export const login = async ({ email, password }: Login) => {
  const userFound = await Auth.findOneBy({ email });
  if (!userFound) return "User not found";

  const isCorrect = await verified(password, userFound.password);
  if (!isCorrect) return "Password is incorrect";

  const token = generateToken(userFound.email);

  const data = {
    token,
    user: userFound,
  };

  return data;
};

export const sendPassChangeEmail = async (user: User) => {
  const { email } = user;
  const userFound = await Auth.findOneBy({ email });
  if (!userFound) return "User not Exists!!";

  const temporaryVerificationKey: string | undefined = uuidv4()
    .split("-")
    .shift();
  const password = await encrypt(temporaryVerificationKey!);

  userFound.password = password;
  const updatedUser = await userFound.save();
  if (!updatedUser) return "Error in updating password";

  await sendEmail({ type: "forgotten", email, key: temporaryVerificationKey });

  return updatedUser;
};

export const forgotPassword = async (user: User) => {
  const { email, password, validationKey } = user;

  const userFound = await Auth.findOneBy({ email });

  if (!userFound) return "Email does not exist!";

  if (await verified(validationKey, userFound.password)) {
    const passHash = await encrypt(password);
    const newUser = Auth.update({ id: userFound.id }, { password: passHash });

    sendEmail({ type: "change", email });

    return newUser;
  } else {
    return "Verification code entered is incorrect!";
  }
};
