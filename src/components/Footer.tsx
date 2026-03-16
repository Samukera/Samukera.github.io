import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold gradient-text">SRC</span>
            <div className="h-6 w-px bg-white/10"></div>
            <span className="text-gray-400 text-sm">
              © 2024 Samuel Rech Cassanego
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Desenvolvido com</span>
            <span className="flex items-center gap-1 text-primary">
              <FaHeart className="text-sm animate-pulse" /> React + Tailwind
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Samukera"
              target="_blank"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-rech-cassanego-668359189/"
              target="_blank"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
