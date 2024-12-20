import { API_KEY_RESEND, FROM_EMAIL, TO_EMAIL } from "./process";
import { Resend } from "resend";
import { emailTemplate } from "../templates";
import { Email } from "../interfaces/email.interface";

const resend = new Resend(API_KEY_RESEND);

export const sendEmail = async ({ type, name, email, key }: Email) => {
  try {
    const { subject, html } = emailTemplate({
      type,
      name,
      email,
      key,
    });

    const { data, error } = await resend.emails.send({
      from: `no-reply ${FROM_EMAIL}`, // ! correo de origen y configurado en la plataforma de "Resend"
      to: [TO_EMAIL!], // ! correo de destino y colocar prop de "email"
      subject: subject,
      html: html,
    });

    if (error) {
      console.error("Error sending mail:", error);
      return;
    }

    console.log("Email send successfully:", data);
  } catch (err) {
    console.error("unexpected error:", err);
  }
};
