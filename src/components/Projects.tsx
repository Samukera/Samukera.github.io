import Card from "./Card";

export default function Projects(){
     return(
        <>
        <section id="Projects" className="flex flex-col items-start bg-[#eef0f2] m-4 p-8 rounded rounded-lg  drop-shadow-lg">
    <p className="text-4xl font-bold italic mb-8 text-[#386FA4]">Projetos  🪤 <br/></p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center ml-20">
        <a href="https://github.com/Samukera/PS2-CFC-Backend-Bravo-Oficial" target="_blank"><Card titulo="CFC System" imagem="/nodejs.svg" descricao="Projeto desenvolvido para a disciplina de Projeto de Software II. O sistema desenvolvido simula uma área de agendamento e controle de aulas para estudantes e instrutores de escolas de habilitação." /></a>
        <a href="https://github.com/Samukera/projeto-prae" target="_blank"><Card titulo="Prae - Livro Fora Estante" imagem="/laravel.svg" descricao="Projeto desenvolvido para a disciplina de Projeto de Software I. O Livro Fora Da Estante é um projeto do núcleo PRAE da Faculdade Federal de Santa Maria que incentiva a leitura e a troca de livros entre os estudantes. O projeto disponibiliza livros em diversos pontos da faculdade e promove eventos culturais. Para facilitar o controle do acervo e das trocas, foi solicitada a criação de um sistema de biblioteca online, onde os alunos poderão ver o catálogo, reservar ou solicitar uma troca de livros com outros usuários." /></a>
    </div>
</section>

        </>
    );
}