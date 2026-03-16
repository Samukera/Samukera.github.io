import React from "react";
import { FaPython, FaPhp, FaReact, FaDatabase, FaDocker, FaBrain, FaChartBar, FaCode, FaServer, FaRobot, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiTensorflow, SiScikitlearn, SiPandas, SiFlask, SiDjango, SiLaravel, SiDotnet } from 'react-icons/si';

const skillCategories = [
  {
    title: "Linguagens & Frameworks",
    icon: <FaCode className="text-2xl" />,
    color: "from-primary to-secondary",
    skills: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "C#", icon: <SiDotnet /> },
      { name: "JavaScript", icon: <FaCode /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "React", icon: <FaReact /> },
    ]
  },
  {
    title: "Bancos de Dados",
    icon: <FaDatabase className="text-2xl" />,
    color: "from-secondary to-accent",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "MariaDB", icon: <FaDatabase /> },
      { name: "SQLite", icon: <FaDatabase /> },
    ]
  },
  {
    title: "Engenharia de Dados",
    icon: <FaServer className="text-2xl" />,
    color: "from-accent to-tertiary",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "ETL", icon: <FaServer /> },
      { name: "APIs REST", icon: <FaServer /> },
      { name: "RabbitMQ", icon: <FaServer /> },
      { name: "Linux", icon: <FaCode /> },
      { name: "Git", icon: <FaCode /> },
    ]
  },
  {
    title: "Machine Learning",
    icon: <FaRobot className="text-2xl" />,
    color: "from-tertiary to-primary",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <FaBrain /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Redes Neurais", icon: <FaBrain /> },
      { name: "LLMs", icon: <FaRobot /> },
      { name: "OpenCV", icon: <FaCode /> },
      { name: "YOLO", icon: <FaRobot /> },
    ]
  },
  {
    title: "Análise de Dados",
    icon: <FaChartBar className="text-2xl" />,
    color: "from-primary to-tertiary",
    skills: [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <FaChartBar /> },
      { name: "Seaborn", icon: <FaChartBar /> },
      { name: "Plotly", icon: <FaChartBar /> },
      { name: "Power BI", icon: <FaChartBar /> },
      { name: "Tableau", icon: <FaChartBar /> },
      { name: "Excel", icon: <FaChartBar /> },
    ]
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 bg-surface/30"
    >
      <div className="max-w-full mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Skills & Tecnologias</span>
          </h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Tecnologias que utilizo para transformar ideias em soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 text-white`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full text-xs text-gray-300 border border-white/10 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
