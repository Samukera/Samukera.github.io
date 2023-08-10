import React, { useRef, useState } from "react";

export default function EmailCopy() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleCopyEmail = async () => {
  if (emailRef.current) {
    try {
      await navigator.clipboard.writeText(emailRef.current.value);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar o e-mail:", err);
    }
  }
};

  return (
    <div className="flex items-center">
      <input
        type="text"
        value="samuelcassanego@gmail.com"
        readOnly
        ref={emailRef}
        className="input input-bordered bg-[#eef0f2] w-full max-w-xs m-4 p-8"
        // disabled
      />
      <button onClick={handleCopyEmail} className="btn btn-accent relative">
        Copiar
        {showAlert && (
          <span className="absolute top-0 right-0 -mt-4 -mr-4 rounded-full bg-green-500 text-white px-2 py-1 text-xs">
            Copiado!
          </span>
        )}
      </button>
    </div>
  );
}
