import React from "react";

export default function WhatsAppButton() {
  const phone = "549346609115"; // tu número
  const message = "Hola! Quiero más información sobre Refrigeración Rosario";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px 16px",
            borderRadius: "50%",
            textDecoration: "none",
            fontSize: "24px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
        }}
        >
        💬
        </a>

  );
}
