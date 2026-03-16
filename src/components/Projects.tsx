import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiMongodb, SiExpress, SiFlask, SiDjango, SiLaravel } from 'react-icons/si';
import { FaNodeJs, FaPhp, FaPython, FaReact, FaJsSquare, FaFileExcel, FaBrain } from 'react-icons/fa';

const projetos = [
  {
    titulo: "Robson - Planning Poker",
    descricao: "Sistema online para estimativas de tasks. Aplicação web para criação de salas de planejamento colaborativo em tempo real.",
    categoria: "Fullstack",
    tecnologias: ["Javascript", "Socket.io", "Node.js"],
    link: "https://climabet.net/robson/#/",
    github: null,
    featured: true,
  },
  {
    titulo: "Monitoramento de Tamanduá",
    descricao: "Projeto em parceria com veterinários especializados. Sistema de monitoramento com IA usando YOLO para detecção em tempo real.",
    categoria: "Machine Learning",
    tecnologias: ["Python", "YOLO", "OpenCV"],
    link: "https://drive.google.com/drive/folders/1j5B79YpRvUN7_Gw3FC2wsbNGI2-SctWa?usp=sharing",
    github: null,
    featured: false,
  },
  {
    titulo: "TCC - Detecção Biométrica de Peixes",
    descricao: "Sistema de monitoramento não invasivo com IA para biometria em piscicultura. Projeto com propriedade intelectual.",
    categoria: "Redes Neurais",
    tecnologias: ["Python", "YOLO", "OpenCV"],
    link: "https://repositorio.ufsm.br/handle/1/32889",
    github: null,
    featured: true,
  },
  {
    titulo: "Prae - Livro Fora Estante",
    descricao: "Sistema de biblioteca online para controle de acervo e trocas de livros entre estudantes da UFSM.",
    categoria: "Backend",
    tecnologias: ["Laravel", "PHP", "MySQL"],
    link: "https://github.com/Samukera/projeto-prae",
    github: "https://github.com/Samukera/projeto-prae",
    featured: false,
  },
  {
    titulo: "CFC System",
    descricao: "Sistema para agendamento e controle de aulas em escolas de habilitação. Disciplina de Projeto de Software II.",
    categoria: "Backend",
    tecnologias: ["Node.js", "TypeScript", "Express", "MongoDB"],
    link: "https://github.com/Samukera/PS2-CFC-Backend-Bravo-Oficial",
    github: "https://github.com/Samukera/PS2-CFC-Backend-Bravo-Oficial",
    featured: false,
  },
];

const iconMap: { [key: string]: JSX.Element } = {
  "Node.js": <FaNodeJs />,
  "PHP": <FaPhp />,
  "React": <FaReact />,
  "Laravel": <SiLaravel />,
  "MongoDB": <SiMongodb />,
  "TypeScript": <SiTypescript />,
  "Express": <SiExpress />,
  "PostgreSQL": <SiPostgresql />,
  "MySQL": <FaNodeJs />,
  "Python": <FaPython />,
  "Javascript": <FaJsSquare />,
  "Excel": <FaFileExcel />,
  "OpenCV": <FaBrain />,
  "YOLO": <FaBrain />,
  "Socket.io": <FaJsSquare />,
  "Flask": <SiFlask />,
  "Django": <SiDjango />,
};

const categoryColors: { [key: string]: string } = {
  Fullstack: "from-primary to-secondary",
  Backend: "from-secondary to-accent",
  Frontend: "from-accent to-tertiary",
  "Machine Learning": "from-tertiary to-primary",
  "Redes Neurais": "from-primary to-tertiary",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 bg-surface/30"
    >
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((proj, index) => (
            <a
              key={proj.titulo}
              href={proj.link}
              target="_blank"
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="glass-card p-6 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[proj.categoria]} text-white`}>
                    {proj.categoria}
                  </span>
                  <FaExternalLinkAlt className="text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {proj.titulo}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {proj.descricao}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {proj.tecnologias.map((tec) => (
                    <span
                      key={tec}
                      className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg text-xs text-gray-300"
                    >
                      {iconMap[tec] || <FaNodeJs />} {tec}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
