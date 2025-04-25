import React from "react";
import Skills from "./Skills";

export default function About() {
    return (
        <>
            <section
                id="about"
                className="flex flex-col items-center bg-base-100 m-4 p-8 rounded-3xl drop-shadow-xl"
                data-aos="fade-up"
            >
                {/* Título */}
                <div className="text-center mb-8">
                    <p className="text-4xl font-bold italic text-primary">
                        Sobre mim 👀
                    </p>
                    <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                </div>

                {/* Texto */}
                <div className="max-w-4xl text-justify text-subtext space-y-4">
                    <p>
                        Sou Samuel, bacharel em Sistemas de Informação pela UFSM (formado em dezembro de 2024) e atualmente mestrando em Ciência da Computação, com foco em Computação Aplicada. Desde cedo, sempre fui muito curioso sobre o universo da tecnologia, e essa paixão me impulsionou a trilhar uma jornada contínua de aprendizado e evolução profissional.
                    </p>
                    <p>
                        Durante minha graduação, participei ativamente de projetos de extensão e pesquisa por meio do Programa de Educação Tutorial (PET-SI), onde desenvolvi habilidades em diversas áreas, incluindo Machine Learning e Inteligência Artificial. Essas experiências me proporcionaram uma base sólida tanto na parte técnica quanto em competências analíticas, fundamentais para atuação em áreas como Data Science e Data Analysis.
                    </p>
                    <p>
                        Minha trajetória técnica começou ainda no Ensino Médio, no curso de Informática para Internet Integrado ao CTISM, onde adquiri conhecimentos em lógica de programação e também desenvolvi habilidades soft skills como resiliência, ética, empatia e resolução de problemas – características que levo comigo em cada novo desafio.
                    </p>
                    <p>
                        Na área Tech, atuo como desenvolvedor Full-Stack e Back-End, trabalhando com linguagens como PHP, Node.js, Python, C#, JavaScript, além de HTML e CSS. Também tenho experiência sólida em bancos de dados relacionais e não relacionais, otimizando queries e estruturando pipelines de dados. Recentemente, venho direcionando meu foco para a área de Data Analysis, aprimorando minhas habilidades em SQL, Python (com Pandas, Matplotlib, Redes neurais, LLMS), além de conceitos de modelagem de dados, visualização e análise exploratória.
                    </p>
                </div>

                {/* Skills */}
                <div className="mt-10 w-full">
                    <Skills
                        langFrameworks={["Python", "JavaScript", "TypeScript", "PHP", "Flask", "Django", "Laravel", "Vue.js", "React"]}
                        databases={["PostgreSQL", "MongoDB", "MariaDB", "SQLite", "MySQL"]}
                        engineeringTools={["Docker", "Git", "Linux", "Selenium", "ETL", "APIs REST"]}
                        machineLearningTools={["TensorFlow", "PyTorch", "Scikit-learn", "Redes Neurais", "LLMs", "OpenCV", "YOLO"]}
                        dataAnalysisTools={["Pandas", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"]}
                    />
                </div>
            </section>

        </>
    );
}
