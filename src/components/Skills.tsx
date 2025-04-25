import React from "react";
import { FaPython, FaPhp, FaReact, FaDatabase, FaDocker, FaBrain, FaChartBar } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiTensorflow, SiScikitlearn, SiPandas } from 'react-icons/si';
import { DiJavascript1, DiJava, DiHtml5, DiCss3 } from 'react-icons/di';
import { TbApi } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { MdOutlineDataArray } from 'react-icons/md';

interface SkillsProps {
  langFrameworks: string[];
  databases: string[];
  engineeringTools: string[];
  machineLearningTools: string[];
  dataAnalysisTools: string[];
}

export default function Skills({
  langFrameworks,
  databases,
  engineeringTools,
  machineLearningTools,
  dataAnalysisTools,
}: SkillsProps) {

  const iconsMap: { [key: string]: JSX.Element } = {
    Python: <FaPython />,
    PHP: <FaPhp />,
    React: <FaReact />,
    Docker: <FaDocker />,
    PostgreSQL: <FaDatabase />,
    MongoDB: <FaDatabase />,
    'Redes Neurais': <FaBrain />,
    Pandas: <FaChartBar />,
    TensorFlow: <SiTensorflow />,
    Scikit: <SiScikitlearn />,
    JavaScript: <DiJavascript1 />,
    TypeScript: <SiTypescript />,
    Java: <DiJava />,
    HTML: <DiHtml5 />,
    CSS: <DiCss3 />,
    'APIs REST': <TbApi />,
    'Git': <AiFillGithub />,
    'ETL': <BsFillGearFill />,
    'Selenium': <TbApi />,
    'Power BI': <TbApi />,
    'Tableau': <TbApi />,
    'Plotly': <TbApi />,
    'Seaborn': <TbApi />,
    'Matplotlib': <TbApi />,
    'YOLO': <TbApi />,
    'OpenCV': <TbApi />,
    'LLMs': <TbApi />,
    'Data Array': <MdOutlineDataArray />,
  };

  return (
    <>
      <p className="text-center text-2xl font-bold my-8 italic text-primary" data-aos="fade-up">
        Tecnologias 🚀
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {/* Linguagens & Frameworks */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Linguagens & Frameworks</h3>
          <ul className="flex flex-wrap gap-2">
            {langFrameworks.map((item) => (
              <li key={item} className="flex items-center gap-2 bg-base-100 px-3 py-1 rounded-full text-sm text-subtext border border-neutral">
                {iconsMap[item] ?? <FaChartBar />} {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bancos de Dados */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-accent mb-4">Bancos de Dados</h3>
          <ul className="flex flex-wrap gap-2">
            {databases.map((item) => (
              <li key={item} className="flex items-center gap-2 bg-base-100 px-3 py-1 rounded-full text-sm text-subtext border border-neutral">
                {iconsMap[item] ?? <FaChartBar />} {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Ferramentas de Engenharia */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-secondary mb-4">Ferramentas de Engenharia</h3>
          <ul className="flex flex-wrap gap-2">
            {engineeringTools.map((item) => (
              <li key={item} className="flex items-center gap-2 bg-base-100 px-3 py-1 rounded-full text-sm text-subtext border border-neutral">
                {iconsMap[item] ?? <FaChartBar />} {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Machine Learning */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-4">Machine Learning</h3>
          <ul className="flex flex-wrap gap-2">
            {machineLearningTools.map((item) => (
              <li key={item} className="flex items-center gap-2 bg-base-100 px-3 py-1 rounded-full text-sm text-subtext border border-neutral">
                {iconsMap[item] ?? <FaChartBar />} {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Análise de Dados */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-accent mb-4">Análise de Dados</h3>
          <ul className="flex flex-wrap gap-2">
            {dataAnalysisTools.map((item) => (
              <li key={item} className="flex items-center gap-2 bg-base-100 px-3 py-1 rounded-full text-sm text-subtext border border-neutral">
                {iconsMap[item] ?? <FaChartBar />} {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
