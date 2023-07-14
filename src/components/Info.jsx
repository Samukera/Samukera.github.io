import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import CardDescription from "./CardDescription";
export default function Info() {
  return (
    <>
      <div className="flex justify-between p-4">
        <a href="https://github.com/Samukera" target="_blank">
          <button
            className="tooltip btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-default"
            data-tip="Acesse meu perfil do github"
          >
            <FaGithub />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-rech-cassanego-668359189/"
          target="_blank"
        >
          <button
            className="tooltip btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-info"
            data-tip="Acesse meu perfil do linkedin"
          >
            <FaLinkedin />
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/170baT4KFE_abIosgqN3sljQlQsw_8Akv/view?usp=sharing"
          target="_blank"
        >
          <button
            className="tooltip btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error"
            data-tip="Acesse meu currículo em PDF"
          >
            <RiNewspaperLine />
          </button>
        </a>
      </div>
    </>
  );
}
