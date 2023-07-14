import React from "react";

function NavBar() {
  return (
    <>
      <div className="hidden lg:flex navbar text-white">
        <div className="navbar-start text-2xl font-fortnite ml-32">
          Tecnologias
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl font-fortnite">Portfólio</a>
        </div>
        <div className="navbar-end text-2xl font-fortnite mr-40">
          Frameworks
        </div>
      </div>
      <div className="flex lg:hidden text-white">
        <div className="navbar btn btn-ghost text-2xl font-fortnite">
          Portifólio
        </div>
      </div>
    </>
  );
}

export default NavBar;
