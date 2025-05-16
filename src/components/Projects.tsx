import Card from "./Card";

export default function Projects() {
  const projetos = [
    {
      titulo: "Robson - Sistema online para estimativas de tasks (Planning poker)",
      imagem: "/javascript.svg", // alterar para a imagem correta
      descricao: "O Robson nasceu da vontade de facilitar o acesso a ferramentas que possibilitam uma planning poker online. O sistema é uma aplicação web que permite a criação de salas de planejamento, onde os participantes podem estimar tarefas de forma colaborativa e em tempo real. Através de uma interface intuitiva, os usuários podem criar salas, convidar membros e realizar a votação das estimativas.",
      categoria: "Frontend",
      tecnologias: ["Javascript", "Socket.io"],
      link: "https://climabet.net/robson/#/"
    },
    {
      titulo: "Projeto de Estudos em parceria com veterinários especializados em animais silvestres - Monitoramento de Tamanduá em recinto controlado.",
      imagem: "/python-3.svg",
      descricao: "Projeto de estudos em parceria com veterinários especializados em animais silvestres, focado no monitoramento de tamanduás em recinto controlado. Com o uso de IA, foi desenvolvido um sistema de monitoramento que utiliza YOLO para detectar e rastrear os tamanduás em tempo real, permitindo uma análise mais precisa do comportamento e saúde dos animais.",
      categoria: "Redes Neurais",
      tecnologias: ["Python", "YOLO", "OpenCV", "Excel"],
      link: "https://drive.google.com/drive/folders/1j5B79YpRvUN7_Gw3FC2wsbNGI2-SctWa?usp=sharing"
    },
    {
      titulo: "Projeto de TCC - Detecção automática não invasiva de dados biométricos para peixes através de inteligência artificial.",
      imagem: "/python-3.svg",
      descricao: "Projeto de TCC focado na aplicação de IA em piscicultura, utilizando Python para desenvolver um sistema de monitoramento e análise de dados. O projeto visa otimizar processos de manejo como por exemplo: biometria dos peixes, utilizando técnicas avançadas de aprendizado de máquina. Atualmente o projeto se encontra em SIGILO devido a questões de propriedade intelectual e pesquisas em andamento.",
      categoria: "Redes Neurais",
      tecnologias: ["Python", "YOLO", "OpenCV", "Excel"],
      link: "https://repositorio.ufsm.br/handle/1/32889"
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
        <p className="text-4xl font-bold italic text-primary">Projetos pessoais 🪤</p>
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
