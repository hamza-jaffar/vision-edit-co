"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactEmailTemplate } from "@/components/email/contact-email";
import * as React from "react";
import { COMPANY_INFO } from "@/lib/constants";

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!firstName || !lastName || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  try {
    console.log("Attempting to send email via Nodemailer for:", {
      firstName,
      lastName,
      email,
    });

    // Render React template to HTML
    const emailHtml = await render(
      React.createElement(ContactEmailTemplate, {
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    );

    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || COMPANY_INFO.name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || COMPANY_INFO.email,
      replyTo: process.env.SMTP_TO || COMPANY_INFO.email,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      html: emailHtml,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return { success: true };
  } catch (err: any) {
    console.error("Nodemailer Error:", err);
    return { error: `Email Error: ${err.message || "Unknown error"}` };
  }
}
