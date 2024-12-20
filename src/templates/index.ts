import { Email } from "../interfaces/email.interface";
import { getRegisterTemplate } from "./register.template";
import { getForgottenTemplate } from "./forgotten.template";
import { getChangeTemplate } from "./change.template";

export const emailTemplate = ({ type, name, email, key }: Email) => {
  switch (type) {
    case "register":
      return getRegisterTemplate(name!, email!);

    case "forgotten":
      return getForgottenTemplate(key!, name!, email!);

    case "change":
      return getChangeTemplate();

    default:
      return { subject: "", html: "" };
  }
};
