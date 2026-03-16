import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

type Experience = {
  empresa: string;
  funcao: string;
  duracao: string;
  atividades: string[];
  cor: string;
  atual?: boolean;
};

export default function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <section
      id="experiences"
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Experiências Profissionais</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.empresa}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex-1">
                  <div className="glass-card p-6 md:p-8 ml-8 md:ml-0 hover:border-primary/50 transition-all group">
                    {exp.atual && (
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
                        Atual
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      <FaBriefcase className="text-primary" />
                      {exp.empresa}
                    </h3>
                    <p className="text-gray-400 mb-4 flex items-center gap-2">
                      <FaCalendarAlt className="text-secondary" />
                      {exp.funcao} • {exp.duracao}
                    </p>
                    <ul className="space-y-2">
                      {exp.atividades.map((atividade, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <FaArrowRight className="text-tertiary mt-1 flex-shrink-0 text-xs" />
                          {atividade}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-6 md:mt-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 border-darker ${
                    exp.atual ? 'gradient-bg' : 'bg-surface'
                  }`}>
                    <FaBriefcase className="text-white text-xs" />
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
