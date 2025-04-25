import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import EmailCopy from "./EmailCopy";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="flex flex-col items-center bg-base-100 m-4 p-8 rounded-3xl drop-shadow-xl"
      data-aos="fade-up"
    >
      {/* Título */}
      <div className="text-center mb-8">
        <p className="text-4xl font-bold italic text-primary">Contato 📨</p>
        <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Texto */}
      <p className="text-lg text-center max-w-2xl text-subtext mb-8">
        Será um prazer receber uma mensagem sua! Envie sua proposta, dúvidas ou ideias. Farei o meu melhor para respondê-lo(a) o quanto antes!
      </p>

      {/* Email */}
      <div className="flex items-center gap-2 text-subtext mb-6">
        <EmailCopy />
      </div>

      {/* Botões sociais */}
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/seu-usuario"
          target="_blank"
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Samukera"
          target="_blank"
          className="flex items-center gap-2 bg-neutral text-base-100 px-4 py-2 rounded-full hover:bg-neutral-800 transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
}
