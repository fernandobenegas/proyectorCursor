import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "5493416609115"; 
  const message = "Hola! Quiero más información sobre Refrigeración Rosario.";
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
        backgroundColor: "#39ff14", // verde neón
        color: "white",
        padding: "14px",
        borderRadius: "50%",
        textDecoration: "none",
        fontSize: "28px",
        boxShadow: "0 0 15px #39ff14", // efecto glow
        zIndex: 9999
      }}
    >
      <FaWhatsapp />
    </a>
  );
}
