import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

type Experience = {
  empresa: string;
  funcao: string;
  duracao: string;
  atividades: string[];
  cor: string; // Cor para o card
  atual?: boolean; // Indica se é a experiência atual
};

export default function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <section
      id="Experiences"
      className="flex flex-col items-center bg-base-100 m-4 p-8 rounded-3xl drop-shadow-xl"
      data-aos="fade-up"
    >
      {/* Título */}
      <div className="text-center mb-8">
        <p className="text-4xl font-bold italic text-primary">Experiências 🎯</p>
        <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Cards de experiências */}
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {experiences.map((exp) => (
          <div
            key={exp.empresa}
            className={`p-6 rounded-2xl shadow-lg bg-base-100 border-t-4 ${exp.atual ? 'border-primary shadow-darkBlue-900/80' : 'border-neutral'}`}
            data-aos="fade-up"
          >
            <p className={`flex items-center gap-2 text-xl font-bold ${exp.atual ? 'text-primary' : 'text-neutral'}`}>
              <FaBriefcase /> {exp.empresa}
            </p>
            <p className="flex items-center gap-2 text-subtext">
              <FaCalendarAlt /> {exp.funcao} - {exp.duracao}
            </p>
            <ul className="list-disc list-inside mt-4 text-subtext space-y-2">
              {exp.atividades.map((atividade, index) => (
                <li key={index}>{atividade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
