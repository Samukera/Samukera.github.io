import { Link } from 'react-scroll';

export default function Navbar() {
  const navItems = [
    { name: 'Início', to: 'hero' },
    { name: 'Sobre', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experiências', to: 'experiences' },
    { name: 'Projetos', to: 'projects' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-bold gradient-text">
            SR Cassanego
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                className="px-4 py-2 rounded-lg text-gray-400 hover:text-primary hover:bg-white/5 transition-all cursor-pointer text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-xl bg-darker rounded-box w-52 border border-white/10"
              >
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} smooth={true} className="text-gray-300 hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
