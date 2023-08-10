import EmailCopy from "./EmailCopy";

export default function Contact(){
    return (
      <section id="Contact" className="flex flex-col items-start bg-[#eef0f2] m-4 p-8 rounded rounded-lg drop-shadow-lg">
        <p className="text-4xl font-bold italic text-[#386FA4]">
          Contato  📨 
        </p>
        <div>
          <p id="contato" className="text-2xl font-semibold text-left mt-20 m-8">Será um prazer receber uma mensagem sua. Envie sua proposta, questionamentos ou ideias. Farei o meu melhor para respondê-lo(a) o quanto antes!</p>
          <EmailCopy />
          {/* <button className=" flex items-center btn m-2 btn-primary normal-case">LinkedIn</button> */}
        </div>
      </section>
    );
}