import { useState, useEffect } from "react";

export default function CardDescription(props) {
  const squareTexts = {
    square1:
      " Tenho mais de 5 anos de estudo em HTML, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square2:
      " Tenho mais de 5 anos de estudo em CSS, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square3:
      " Tenho mais de 4 anos de estudo em Javascript, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square4:
      " Tenho mais de 3 anos de estudo em React, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square5:
      " Tenho mais de 3 anos de estudo em Typescript, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square6:
      " Tenho mais de 3 anos de estudo em NodeJS, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square7:
      " Tenho mais de 5 anos de estudo em Php, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square8:
      " Tenho mais de 5 anos de estudo em MySQL, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square9:
      " Tenho mais de 5 anos de estudo em PostgreSQL, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square10:
      " Tenho mais de 1 ano de experiência em Laravel, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square11:
      " Tenho mais de 1 ano de experiência em VueJS, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square12:
      " Tenho mais de 1 ano de experiência em TailwindCSS, aplicando meus conhecimentos em estudos.",
  };

  const [text, setText] = useState(
    "Passe o mouse pelos ícones para ler a descrição"
  );

  useEffect(() => {
    setText(squareTexts[props.description]);
    const timeoutId = setTimeout(() => {
      setText("Passe o mouse pelos ícones para ler a descrição");
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [props.description]);

  return (
    <div className="card w-96 h-48 mt-20 bg-card shadow-xl -mt-1 text-white opacity-95">
      <div className="card-body">
        <h2 className="card-title">Descrição</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
