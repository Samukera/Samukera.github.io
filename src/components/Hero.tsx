import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  const specialties = [
    "Visão Computacional",
    "Data Engineering",
    "Backend",
  ];

  const [currentSpecialty, setCurrentSpecialty] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>

      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1" data-aos="fade-right">
          <div className="inline-block px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-tertiary text-sm font-medium">
              👋Olá, bem-vindo ao meu portfólio
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Olá, eu sou <br />
            <span className="gradient-text">Samuel Rech</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
            <span className="text-primary font-semibold">Engenheiro de Dados</span> &{" "}
            <span className="text-secondary font-semibold">Desenvolvedor Backend</span>
            <br />
            Transformando dados em soluções inteligentes
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="https://github.com/Samukera"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-rech-cassanego-668359189/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 glass-card text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:samuelcassanego@gmail.com"
              className="flex items-center gap-2 glass-card text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              <HiOutlineMail /> Email
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Disponível para oportunidades</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-40 blur-3xl animate-pulse"></div>

            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
              <img
                src="/perfil.png"
                alt="Samuel Rech Cassanego"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 glass-card px-6 py-4 rounded-2xl min-w-[240px]">
              <p className="text-sm text-gray-200 mb-1">Especialista em</p>

              <div className="relative h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={specialties[currentSpecialty]}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-primary font-bold absolute left-0 top-0"
                  >
                    {specialties[currentSpecialty]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-primary text-2xl" />
      </div>
    </section>
  );
}