import About from "./About";
import Contact from "./Contact";
import Divider from "./Divider";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Projects from "./Projects";

export default function Content(){
    return(
        <>
        <Intro />
        <Divider />
        <About />
        <Divider />
        <Experiences
        experiences={[
    {
      empresa: "PJFIT",
      funcao: "Desenvolvedor de Software - Fullstack",
      duracao: "ago de 2022 - mar de 2023 (8 meses)",
      resumo: "Integrei API's externas com projetos internos, atuando como Fullstack e sendo o único encarregado dessa parte. Conectei e tratei regras de negócios, e criei endpoints e API\'s, usando PHP (Symfony). Desenvolvi, organizei e documentei as API\'s. Trabalhei em conjunto com equipes de outras empresas, ganhei experiência em segurança de API\'s e dados com as API\'s bancárias, e aprendi a trabalhar sob pressão e com prazos dinâmicos.",
    },
    {
      empresa: "Drakkar Agricultura de Precisão",
      funcao: "Estagiário",
      duracao: "set de 2021 - jul de 2022 (11 meses)",
      resumo: "Desenvolvi API’s, organizei e mantive bancos de dados relacionais e não-relacionais, e realizei testes automatizados, focando no backend. Utilizei a linguagem Javascript (nodeJS + typescript). Obtive também conhecimentos na área de DevOps, Deploy de aplicações e domínios, e segurança de API’s.",
    },
    {
        empresa:"Verden - Rastreamento e gestão de frotas",
        funcao:"Estagiário",
        duracao:"jan de 2021 - set de 2021 (9 meses)",
        resumo:"Realizei estágio em desenvolvimento de sistemas na empresa. Prestei suporte e criei novas funcionalidades para o produto final, usando as linguagens PHP, Javascript e HTML/CSS. Trabalhei com banco de dados MariaDB e PostgreSQL. Refatorei códigos e integrei API’s, aprimorando os meus conhecimentos lógicos e técnicos.",
    },
        ]}
        />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        {/* <Footer /> */}
        </>
    );
}