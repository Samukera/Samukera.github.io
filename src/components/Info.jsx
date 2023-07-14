import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import CardDescription from "./CardDescription";
export default function Info() {
  return (
    <>
      <div className="hidden lg:flex flex-col justify-center items-center p-4">
        <a href="https://github.com/Samukera" target="_blank" className="mt-2">
          <button className="flex  btn btn-wide sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-default">
            Perfil no Github
            <FaGithub />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-rech-cassanego-668359189/"
          target="_blank"
          className="mt-2"
        >
          <button className="flex  btn btn-wide sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-info">
            Perfil no linkedin
            <FaLinkedin />
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/170baT4KFE_abIosgqN3sljQlQsw_8Akv/view?usp=sharing"
          target="_blank"
          className="mt-2"
        >
          <button className="flex  btn btn-wide sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error">
            Currículo
            <RiNewspaperLine />
          </button>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center p-4 lg:hidden">
        <a href="https://github.com/Samukera" target="_blank" className="mt-2">
          <button
            className="flex  btn btn-wide sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-default"
            data-tip="Acesse meu perfil do github"
          >
            Perfil no Github
            <FaGithub />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-rech-cassanego-668359189/"
          target="_blank"
          className="mt-2"
        >
          <button
            className="flex tooltip btn btn-wide sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-info"
            data-tip="Acesse meu perfil do linkedin"
          >
            Perfil no linkedin
            <FaLinkedin />
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/170baT4KFE_abIosgqN3sljQlQsw_8Akv/view?usp=sharing"
          target="_blank"
          className="mt-2"
        >
          <button
            className="flex tooltip btn btn-wide sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error"
            data-tip="Acesse meu currículo em PDF"
          >
            Currículo
            <RiNewspaperLine />
          </button>
        </a>
      </div>
    </>
  );
}
