import React from 'react';
import { FaNodeJs, FaExternalLinkAlt, FaPhp, FaReact, FaLaravel, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si';

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
  };

  const colorMap: { [key: string]: string } = {
    Fullstack: 'accent',
    Backend: 'primary',
    Frontend: 'secondary',
    "Redes Neurais": 'success', // adicionando aqui!
  };

  return (
    <div className="bg-base-100 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-2xl">
      {/* Categoria */}
      <div className={`${categoria === 'Fullstack' ? 'bg-accent' :
          categoria === 'Backend' ? 'bg-primary' :
            categoria === 'Frontend' ? 'bg-secondary' :
              categoria === 'Redes Neurais' ? 'bg-success' :
                'bg-neutral'
        } text-white text-xs uppercase tracking-wider px-4 py-2`}>
        {categoria}
      </div>

      {/* Imagem */}
      <figure className="flex justify-center items-center bg-base-100 p-8 shadow-inner border-neutral">
        <img src={imagem} alt="Imagem do projeto" className="object-contain w-20 h-20" />
      </figure>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6 justify-between">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          {titulo} <FaExternalLinkAlt className="text-sm" />
        </h2>
        <p className="text-subtext mt-4 text-justify">{descricao}</p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tecnologias.map((tec) => (
            <span key={tec} className="flex items-center gap-1 bg-base-100 text-subtext text-xs px-2 py-1 rounded-full border border-neutral">
              {iconMap[tec] ?? <FaDatabase />} {tec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
