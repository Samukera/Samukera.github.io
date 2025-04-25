import React from "react";
import Card from "./Card";

export default function Projects() {
  const projetos = [
    {
      titulo: "Task Manager",
      imagem: "/react.svg",
      descricao: "Projeto pessoal para gerenciamento de tarefas com foco em produtividade.",
      categoria: "Redes Neurais",
      tecnologias: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      titulo: "Prae - Livro Fora Estante",
      imagem: "/laravel.svg",
      descricao: "Sistema de biblioteca online para controle de acervo e trocas de livros entre estudantes, parte do projeto Livro Fora da Estante, da UFSM.",
      categoria: "Fullstack",
      tecnologias: ["Laravel", "PHP", "MySQL"],
      link: "https://github.com/Samukera/projeto-prae"
    },
    {
      titulo: "CFC System",
      imagem: "/nodejs.svg",
      descricao: "Sistema para agendamento e controle de aulas em escolas de habilitação, desenvolvido para a disciplina de Projeto de Software II.",
      categoria: "Backend",
      tecnologias: ["Node.js", "TypeScript", "Express", "MongoDB"],
      link: "https://github.com/Samukera/PS2-CFC-Backend-Bravo-Oficial"
    }
  ];

  return (
    <section
      id="Projects"
      className="flex flex-col items-center bg-base-100 m-4 p-8 rounded-3xl drop-shadow-xl"
      data-aos="fade-up"
    >
      {/* Título */}
      <div className="text-center mb-8">
        <p className="text-4xl font-bold italic text-primary">Projetos 🪤</p>
        <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projetos.map((proj) => (
          <a
            key={proj.titulo}
            href={proj.link}
            target="_blank"
            className="hover:scale-105 hover:shadow-primary/50 transition-transform duration-300 rounded-2xl block"
          >
            <Card
              titulo={proj.titulo}
              imagem={proj.imagem}
              descricao={proj.descricao}
              categoria={proj.categoria}
              tecnologias={proj.tecnologias}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
