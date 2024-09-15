import React from "react";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <header className="font-sans bg-gray-800 text-white p-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Smart Home</h1>
          <img src={logo} alt="Smart Home Logo" className="w-12 h-12 mr-3" />
        </div>

        <nav className="flex space-x-6">
          <a
            href="#"
            className="text-white hover:bg-blue-400 hover:text-gray-800 py-2 px-4 rounded transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-400 hover:text-gray-800 py-2 px-4 rounded transition duration-300"
          >
            Sobre nosotros
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-400 hover:text-gray-800 py-2 px-4 rounded transition duration-300"
          >
            Productos
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-400 hover:text-gray-800 py-2 px-4 rounded transition duration-300"
          >
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
