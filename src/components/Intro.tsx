import React from "react";
import Buttons from "./Buttons";
import Description from "./Description";

export default function Intro() {
    return (
        <section
            id="Intro"
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-base-100 m-4 p-8 rounded-3xl drop-shadow-xl overflow-hidden relative min-h-screen"
            data-aos="fade-right"
        >
            {/* Esquerda: Texto */}
            <div className="flex flex-col items-start flex-1 space-y-4" data-aos="fade-right">
                <p className="text-lg font-semibold text-subtext">Oi, eu sou o</p>
                <p className="text-5xl font-bold text-primary leading-tight">
                    Samuel Rech Cassanego <span className="inline-block animate-wave">👋</span>
                </p>
                <p className="text-lg font-light italic text-subtext">Engenheiro de Dados em Transição | Desenvolvedor Backend</p>
                <Description />
                <Buttons />
            </div>

            {/* Direita: Foto */}
            <div className="flex justify-center items-center flex-1 relative" data-aos="fade-left">
                <div className="relative w-80 h-80 flex justify-center items-center">
                    {/* Fundo com forma */}
                    <div className="absolute w-full h-full bg-primary opacity-70 clip-wave" />

                    {/* Imagem */}
                    <img src="/perfil.png" alt="Perfil" className="relative object-contain w-full h-full z-10" />
                </div>
            </div>
        </section>
    );
}
