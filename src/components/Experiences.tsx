type Experience = {
  empresa: string;
  funcao: string;
  duracao: string;
  resumo: string;
};

export default function Experiences({ experiences } : {experiences: Experience[]}) {
  return (
    <section id="Experiences" className="flex flex-col items-start bg-[#eef0f2] m-4 p-8 rounded rounded-lg drop-shadow-lg">
      <p className="text-4xl font-bold italic text-[#386FA4]">
        Experiências 🎯 <br />
      </p>
      {experiences.map((experience) => (
        <div key={experience.empresa} className="text-lg mt-8 text-left">
          <p className="p-1"><b className="font-semibold">Empresa:</b> {experience.empresa}</p>
          <p className="p-1"><b className="font-semibold">Função:</b> {experience.funcao}</p>
          <p className="p-1"><b className="font-semibold">Duração:</b> {experience.duracao}</p>
          <p className="p-1"><b className="font-semibold">Resumo:</b> {experience.resumo}</p>
        </div>
      ))}
    </section>
  );
}
