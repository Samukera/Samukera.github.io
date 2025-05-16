import React from "react";
import About from "./About";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Content() {
  return (
    <>
      <Intro />
      <About />
      <Experiences
        experiences={[
          {
            empresa: "Delta Global",
            funcao: "Desenvolvedor Fullstack",
            duracao: "Out 2023 - o momento",
            atividades: [
              "Desenvolvimento e otimização de produtos na área de rastreamento em tempo real utilizando PHP e Node.js no backend.",
              "Implementação de lógicas robustas para extração e tratamento de dados com alto grau de confiabilidade e performance (bancos com bilhões de registros).",
              "Otimização de queries SQL e arquitetura de dados, reduzindo gargalos em 98%, com processos ao vivo de 30s para 1s.",
              "Mesclagem e análise de grandes volumes de dados sensíveis com foco em performance e qualidade de insights.",
              "Participação em POCs, incluindo projeto que gerou faturamento superior a R$ 6 milhões.",
            ],
            cor: "primary",
            atual: true,
          },
          {
            empresa: "PJFIT",
            funcao: "Desenvolvedor de Software",
            duracao: "Ago 2022 - Mar 2023",
            atividades: [
              "Organização e manutenção de bancos de dados relacionais e não-relacionais.",
              "Integração de APIs Bancárias (Inter, Banco ABC, Bradesco) com o sistema interno em PHP.",
              "Participação em POCs integrando sistemas internos e externos.",
            ],
            cor: ""
          },
          {
            empresa: "Drakkar Agricultura de Precisão",
            funcao: "Estagiário",
            duracao: "Set 2021 - Jul 2022",
            atividades: [
              "Desenvolvimento de APIs, manutenção de bancos relacionais e não-relacionais, e testes automatizados focados no backend (Node.js + TypeScript).",
              "Atuação em DevOps, deploy de aplicações, domínios e segurança de APIs.",
            ],
            cor: ""
          },
          {
            empresa: "Verden - Rastreamento e gestão de frotas",
            funcao: "Estagiário",
            duracao: "Jan 2021 - Set 2021",
            atividades: [
              "Criação de APIs para comunicação com o aplicativo mobile de monitoramento.",
              "Documentação e segurança de endpoints.",
              "Atuação com dados de rastreamento veicular e análise de regras de negócio.",
            ],
            cor: ""
          },
        ]}
      />
      <Projects />
      <Contact />
    </>
  );
}