import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6" data-aos="fade-right">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Minha Jornada</h3>
              <p className="text-gray-400 leading-relaxed">
                Sou <span className="text-white font-semibold">Samuel Rech Cassanego</span>, bacharel em Sistemas de Informação pela UFSM (formado em dezembro de 2024) e atualmente mestrando em Ciência da Computação, com foco em Computação Aplicada.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Desde cedo, sempre fui muito curioso sobre o universo da tecnologia, e essa paixão me impulsionou a trilhar uma jornada contínua de aprendizado e evolução profissional.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Formação & Experiência</h3>
              <p className="text-gray-400 leading-relaxed">
                Durante minha graduação, participei ativamente de projetos de extensão e pesquisa por meio do <span className="text-tertiary">PET-SI</span>, onde desenvolvi habilidades em Machine Learning e Inteligência Artificial.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Minha trajetória técnica começou no Ensino Médio, no curso de Informática para Internet Integrado ao <span className="text-tertiary">CTISM</span>.
              </p>
            </div>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-accent mb-4">Áreas de Atuação</h3>
              <p className="text-gray-400 leading-relaxed">
                Atuo como desenvolvedor <span className="text-primary">Full-Stack</span> e <span className="text-primary">Back-End</span>, trabalhando com PHP, Node.js, Python, C#, JavaScript. Também tenho experiência sólida em bancos de dados relacionais e não-relacionais.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Recentemente, venho direcionando meu foco para a área de <span className="text-tertiary font-semibold">Data Analysis</span>, aprimorando habilidades em SQL, Python (Pandas, Matplotlib, Redes Neurais, LLMs).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold gradient-text">2024</p>
                <p className="text-gray-500 text-sm mt-1">Formatura</p>
              </div>
              <div className="glass-card p-6 text-center">
                <p className="text-3xl font-bold gradient-text">4+</p>
                <p className="text-gray-500 text-sm mt-1">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
