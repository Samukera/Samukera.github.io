import "./App.css";
import { useState } from "react";
import CenteredImage from "./components/CenteredImage";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [focusedSquare, setFocusedSquare] = useState("");
  const squareTexts = {
    square1:
      " Tenho mais de 5 anos de experiência em HTML, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square2:
      " Tenho mais de 5 anos de experiência em CSS, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square3:
      " Tenho mais de 4 anos de experiência em Javascript, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square4:
      " Tenho mais de 3 anos de experiência em React, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square5:
      " Tenho mais de 3 anos de experiência em Typescript, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square6:
      " Tenho mais de 3 anos de experiência em NodeJS, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square7:
      " Tenho mais de 5 anos de experiência em Php, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square8:
      " Tenho mais de 5 anos de experiência em MySQL, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square9:
      " Tenho mais de 5 anos de experiência em PostgreSQL, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square10:
      " Tenho mais de 1 ano de experiência em Laravel, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square11:
      " Tenho mais de 1 ano de experiência em VueJS, aplicando meus conhecimentos em estudos e projetos empresariais.",
    square12:
      " Tenho mais de 1 ano de experiência em TailwindCSS, aplicando meus conhecimentos em estudos.",
  };

  return (
    <>
      {/* <CenteredImage src="public/assets/logo-javascript.svg" alt="logo JavaScript" /> */}
      <h1 className="text-center mb-4 font-fortnite">Portfólio</h1>
      <div className="flex -mt-4">
        <h1 className="text-left mb-4 px-32 font-fortnite mr-72">
          Tecnologias
        </h1>
        <h1 className="text-right mb-4 px-32 font-fortnite">Frameworks</h1>
        {/* primeira linha */}
        <div
          className="square linha1 coluna1 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square1"
          onMouseEnter={() => setFocusedSquare("square1")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="square linha2 coluna1 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square2"
          onMouseEnter={() => setFocusedSquare("square2")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="square linha3 coluna1 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square3"
          onMouseEnter={() => setFocusedSquare("square3")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
      </div>
      <div>
        {/* segunda linha */}
        <div
          className="square linha1 coluna2 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square4"
          onMouseEnter={() => setFocusedSquare("square4")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="square linha2 coluna2 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square5"
          onMouseEnter={() => setFocusedSquare("square5")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="square linha3 coluna2 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square6"
          onMouseEnter={() => setFocusedSquare("square6")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
      </div>
      <div>
        {/* terceira linha */}
        <div
          className="square linha1 coluna3 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square7"
          onMouseEnter={() => setFocusedSquare("square7")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="square linha2 coluna3 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square8"
          onMouseEnter={() => setFocusedSquare("square8")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="square linha3 coluna3 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="square9"
          onMouseEnter={() => setFocusedSquare("square9")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
      </div>
      <div>
        {/* linha de circulos na direita */}
        <div
          className="circle linha4 coluna1 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="circle1"
          onMouseEnter={() => setFocusedSquare("square10")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="circle linha5 coluna1 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="circle2"
          onMouseEnter={() => setFocusedSquare("square11")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
        <div
          className="circle linha6 coluna1 hover:shadow-lg hover:drop-shadow-red hover:scale-110 transition-all"
          id="circle3"
          onMouseEnter={() => setFocusedSquare("square12")}
          onMouseLeave={() => setFocusedSquare("")}
        ></div>
      </div>
      <div>
        {/* retangulo de descrição das habilidades */}
        <div
          className="rectangle linha1 coluna4 p-4 rounded-lg"
          id="rectangle1"
        >
          <p className="font-mono text-lg font-light ">
            Descrição:
            {squareTexts[focusedSquare]}
          </p>
        </div>
      </div>
      <div>
        {/* retangulo com barra de status + nickname */}
        <div className="rectangle linha4 p-4 rounded-lg" id="rectangle2">
          <div className="flex justify-between px-4 py-2">
            <h1 className="font-fortnite text-4xl font-semibold">
              Samuel Rech Cassanego
            </h1>
            <h1 className="font-fortnite text-4xl font-semibold">Nível 1</h1>
          </div>
          <div className="py-2">
            <ProgressBar label="Lógica de programação" progress={100} />
            <ProgressBar label="Dedicação" progress={100} />
            <ProgressBar label="Vontade de desistir" progress={15} />
            <ProgressBar label="Vontade de chorar" progress={10} />
          </div>
        </div>
      </div>
      <CenteredImage
        src="public/assets/miranha3.png"
        alt="Personagem Aranha Humana"
      />
      {/* <CenteredImage
        src="public/assets/teste.gif"
        alt="Personagem Aranha Humana"
      /> */}
    </>
  );
}

export default App;
