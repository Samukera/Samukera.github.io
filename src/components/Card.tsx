import React from 'react';
import {
  FaNodeJs,
  FaExternalLinkAlt,
  FaPhp,
  FaReact,
  FaLaravel,
  FaDatabase,
  FaPython,
  FaJsSquare,
  FaFileExcel,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiOpencv,
  SiDotnet,
} from 'react-icons/si';

interface CardProps {
  titulo: string;
  imagem: string;
  descricao: string;
  tecnologias: string[];
  categoria: string;
}

export default function Card({ titulo, imagem, descricao, tecnologias, categoria }: CardProps) {
  const iconMap: { [key: string]: JSX.Element } = {
    "Node.js": <FaNodeJs />,
    "PHP": <FaPhp />,
    "React": <FaReact />,
    "Laravel": <FaLaravel />,
    "MongoDB": <SiMongodb />,
    "TypeScript": <SiTypescript />,
    "Express": <SiExpress />,
    "PostgreSQL": <SiPostgresql />,
    "MySQL": <FaDatabase />,
    "Python": <FaPython />,
    "Javascript": <FaJsSquare />,
    "Excel": <FaFileExcel />,
    "OpenCV": <SiOpencv />,
    "YOLO": <FaPython />,
    "Socket.io": <FaJsSquare />,
    "C#": <SiDotnet  />,
  };

  const categoryColorClass: { [key: string]: string } = {
    Fullstack: 'bg-accent',
    Backend: 'bg-primary',
    Frontend: 'bg-secondary',
    "Redes Neurais": 'bg-tertiary'
  };

  return (
    <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-2xl">
      {/* Categoria */}
      <div className={`${categoryColorClass[categoria] ?? 'bg-neutral'} text-white text-xs uppercase tracking-wider px-4 py-2`}>
        {categoria}
      </div>

      {/* Imagem */}
      <figure className="flex justify-center items-center bg-base-100 p-4 md:p-8 shadow-inner border-neutral">
        <img src={imagem} alt="Imagem do projeto" className="object-contain w-16 h-16 md:w-20 md:h-20" />
      </figure>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-4 md:p-6 justify-between">
        <h2 className="text-lg md:text-xl font-bold text-primary flex items-center gap-2">
          {titulo}
        </h2>
        <p className="text-subtext mt-3 md:text-justify text-sm md:text-base">{descricao}</p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tecnologias.map((tec) => (
            <span
              key={tec}
              className="flex items-center gap-1 bg-base-100 text-subtext text-xs px-2 py-1 rounded-full border border-secondary/30"
              title={tec}
            >
              {iconMap[tec] ?? <FaDatabase />} {tec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
