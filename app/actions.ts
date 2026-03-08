"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      error: "Please fill in all required fields.",
      success: false,
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["thisismasud1@gmail.com"], // Hardcoded for now as per user data
      subject: subject || `New message from ${name}`,
      reply_to: email,
      html: `
        <h2>New Message from your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        error: `Resend Error: ${error.message || JSON.stringify(error)}`,
        success: false,
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (err) {
    console.error("Server Action Error:", err);
    return {
      error: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }
}
