import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Buttons() {
    return (
        <div className="flex flex-wrap gap-3 md:gap-4 mt-3 md:mt-4">
            {/* GitHub */}
            <a href="https://github.com/Samukera" target="_blank">
                <button className="flex items-center gap-2 bg-neutral text-base-100 px-4 py-2 rounded-full hover:bg-primary transition text-sm md:text-base">
                    <FaGithub /> GitHub
                </button>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/samuel-rech-cassanego-668359189/" target="_blank">
                <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition text-sm md:text-base">
                    <FaLinkedin /> LinkedIn
                </button>
            </a>
        </div>
    );
}
