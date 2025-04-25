import React, { useState } from "react";
import { FaEnvelope, FaRegCopy } from "react-icons/fa";

export default function EmailCopy() {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "samuelcassanego@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 1500);
    } catch (err) {
      console.error("Falha ao copiar o e-mail:", err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-3 bg-base-100 px-4 py-2 rounded-full border border-neutral">
        <FaEnvelope className="text-primary" />
        <a href={`mailto:${email}`} className="text-subtext hover:text-primary transition">
          {email}
        </a>
        <div className="relative">
          <button onClick={handleCopyEmail} className="flex items-center gap-1 text-sm text-primary hover:text-blue-700 transition">
            <FaRegCopy /> Copiar
          </button>
          {showTooltip && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-success text-white text-xs rounded px-2 py-1 whitespace-nowrap animate-fade-slide">
              Copiado!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
