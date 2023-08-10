import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
export default function Buttons(){
    return (
        <>
        <div className="flex m-2">
            <a href="https://github.com/Samukera" target="_blank"><button className="btn  m-2 normal-case"><FaGithub/> GitHub</button></a>
            <a href="https://www.linkedin.com/in/samuel-rech-cassanego-668359189/" target="_blank"><button className="btn  btn-info m-2  normal-case"><FaLinkedin/> LinkedIn</button></a>
            <a href="https://drive.google.com/file/d/1XuhvxoYWnie7jhkDJ2zLCcAkEM8MJDDH/view?usp=sharing" target="_blank"><button className="btn  btn-warning m-2 normal-case"><RiNewspaperLine/>Currículo</button></a>
        </div>
        </>
    );
}