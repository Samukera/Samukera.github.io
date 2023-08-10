export default function Card({ titulo, imagem, descricao } :{titulo: string, imagem:string, descricao:string}) {
  return (
      <div className="card w-full bg-[#eef0f2] shadow-xl m-2 overflow-hidden">
    <figure className="px-10 pt-10">
        <img src={imagem} alt="Imagem do projeto - prévia" className="object-contain rounded-xl" width="100" height="100" />
    </figure>
    <div className="card-body items-center text-center">
        <h2 className="card-title">{titulo}</h2>
        <p>{descricao}</p>
        <div className="card-actions">
            <button className="btn btn-warning">Acessar prévia</button>
        </div>
    </div>
</div>

  );
}
