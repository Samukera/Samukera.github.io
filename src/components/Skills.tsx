export default function Skills({ skills }: { skills: string[]}) {
  return (
    <>
    <p className="text-left text-2xl font-bold m-4 p-8 italic text-[#386FA4]">Tecnologias</p>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill) => (
        <div key={skill}>
          <div className="font-semibold">{skill}</div>
        </div>
      ))}
    </div>
    </>
  );
}
