import React from "react";
import Buttons from "./Buttons";
import Description from "./Description";

export default function Intro() {
    return (
        <section
            id="Intro"
            className="flex flex-col md:flex-row items-center justify-between bg-base-100 m-2 md:m-4 p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden relative mt-16 md:mt-20"
            data-aos="fade-right"
        >
            {/* Esquerda: Texto */}
            <div className="flex flex-col items-start flex-1 space-y-2 md:space-y-4 order-2 md:order-1" data-aos="fade-right">
                <p className="text-sm md:text-lg font-semibold text-secondary">Oi, eu sou o</p>
                <p className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                    Samuel Rech Cassanego <span className="inline-block animate-wave">👋</span>
                </p>
                <p className="text-sm md:text-lg font-light italic text-subtext">Engenheiro de Dados | Desenvolvedor Backend</p>
                <Description />
                <Buttons />
            </div>

            {/* Direita: Foto */}
            <div className="flex justify-center items-center flex-1 relative w-full md:w-auto order-1 md:order-2 mb-4 md:mb-0" data-aos="fade-left">
                <div className="relative w-full max-w-[200px] md:max-w-xs aspect-square flex justify-center items-center">
                    {/* Fundo com forma */}
                    <div className="absolute w-full h-full bg-primary opacity-20 clip-wave" />

                    {/* Imagem */}
                    <img
                        src="/perfil.png"
                        alt="Perfil"
                        className="relative object-contain w-full h-full z-10 rounded-full border-4 border-primary"
                    />
                </div>
            </div>
        </section>
    );
}