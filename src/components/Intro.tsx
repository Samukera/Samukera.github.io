import Buttons from "./Buttons";
import Description from "./Description";

export default function Intro(){
    return(
        <>
        <section id="Intro" className=" flex flex-col items-start bg-[#eef0f2] m-4 p-8 rounded rounded-lg mt-20 drop-shadow-lg">
            <p className="text-lg font-semibold">Oi, eu sou o<br/></p>
            <p className="text-5xl font-bold text-[#386FA4]">Samuel 👋</p>
            <p className="text-lg font-thin italic">Desenvolvedor Back-end & Front-end</p>
            <Description  />
            <Buttons />
        </section>
        </>
    );
}