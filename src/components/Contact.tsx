import React from 'react';
import { FaLinkedin, FaGithub, FaMailBulk, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com/Samukera",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://www.linkedin.com/in/samuel-rech-cassanego-668359189/",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Email",
      icon: <FaMailBulk className="text-2xl" />,
      link: "mailto:samuelcassanego@gmail.com",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Vamos Conversar</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Estou disponível para oportunidades, parcerias e projetos interessantes. 
            Sinta-se livre para entrar em contato!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {contact.icon}
              </div>
              <h3 className="text-white font-semibold">{contact.name}</h3>
              <p className="text-gray-500 text-sm mt-1">Clique para acessar</p>
            </a>
          ))}
        </div>

        <div className="glass-card p-8 text-center" data-aos="fade-up">
          <div className="w-20 h-20 mx-auto rounded-full gradient-bg flex items-center justify-center mb-6">
            <FaPaperPlane className="text-white text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Pronto para começar um projeto?</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Tenho interesse em novas oportunidades e desafios. Vamos discutir como posso contribuir para o seu projeto!
          </p>
          <a
            href="mailto:samuelcassanego@gmail.com"
            className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105"
          >
            <FaPaperPlane /> Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
