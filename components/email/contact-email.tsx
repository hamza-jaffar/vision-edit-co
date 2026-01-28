import * as React from "react";

interface ContactEmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ firstName, lastName, email, phone, message }) => (
  <div
    style={{
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "40px",
      borderRadius: "24px",
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid #333333",
    }}
  >
    <div style={{ marginBottom: "40px", textAlign: "center" }}>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "800",
          margin: "0",
          color: "#3b82f6",
        }}
      >
        New Project Inquiry
      </h1>
      <p style={{ color: "#888888", marginTop: "8px" }}>
        Vision Edit Co. | Visuals That Defy Gravity.
      </p>
    </div>

    <div
      style={{
        backgroundColor: "#111111",
        padding: "30px",
        borderRadius: "16px",
        border: "1px solid #222222",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            color: "#3b82f6",
            margin: "0 0 8px 0",
          }}
        >
          Client Details
        </p>
        <h2 style={{ fontSize: "20px", margin: "0" }}>
          {firstName} {lastName}
        </h2>
        <p style={{ margin: "4px 0 0 0", color: "#cccccc" }}>{email}</p>
        <p style={{ margin: "4px 0 0 0", color: "#cccccc" }}>{phone}</p>
      </div>

      <div
        style={{ height: "1px", backgroundColor: "#222222", margin: "24px 0" }}
      ></div>

      <div>
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            color: "#3b82f6",
            margin: "0 0 12px 0",
          }}
        >
          Client Message
        </p>
        <div
          style={{
            color: "#ffffff",
            lineHeight: "1.6",
            fontSize: "16px",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </div>
      </div>
    </div>

    <div
      style={{
        marginTop: "40px",
        textAlign: "center",
        fontSize: "12px",
        color: "#555555",
      }}
    >
      <p>
        © 2026 Vision Edit Co. This is an automated notification from your
        contact form.
      </p>
    </div>
  </div>
);
