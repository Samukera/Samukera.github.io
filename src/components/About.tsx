import Divider from "./Divider";
import Skills from "./Skills";

export default function About(){
     return(
        <>
        <section id="about" className="flex flex-col items-start bg-[#eef0f2] m-4 p-8 rounded rounded-lg drop-shadow-lg">
    <p className="text-4xl font-bold italic text-[#386FA4]">Sobre mim 👀<br/></p>
    <div className="flex flex-col md:flex-row justify-between">
    <img src="/teste.jpeg"  className="object-contain mt-20 mr-20 rounded-full shadow-2xl ring " />
        
        <div className="w-full md:w-1/2">
            <p className="text-lg mt-20">Olá, meu nome é Samuel Rech Cassanego e sou um estudante de Sistemas de Informação apaixonado por tecnologia e inovação. Tenho formação técnica em informática para internet e experiência em diversos projetos de pesquisa e ensino na minha área, como o PET-SI, onde desenvolvi atividades de extensão, monitoria e produção científica. Meu objetivo é me desenvolver profissionalmente e contribuir para a transformação digital da sociedade, utilizando as melhores práticas e ferramentas do mercado. Sou proativo, criativo e comprometido com os resultados.</p>
            <Divider />
            <Skills skills={["PHP", "Laravel", "Symfony", "Javascript", "Node.js", "Vue.js", "React", "Typescript", "TailwindCSS", "HTML&CSS", "SQL", "PostgreSQL"]}/>
        </div>
    </div>
</section>

        </>
    );
}