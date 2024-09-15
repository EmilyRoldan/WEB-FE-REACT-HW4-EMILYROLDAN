import React from "react";
import logo from "../img/logo.svg";

const Header = () => {
  return (
    <header className="font-sans bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Smart Home</h1>{" "}
          {/* Reducido de text-2xl a text-xl */}
          <img
            src={logo}
            alt="Smart Home Logo"
            className="w-10 h-10 mr-2"
          />{" "}
          {/* Tamaño del logo reducido */}
        </div>

        <nav className="flex space-x-4 md:space-x-6">
          {" "}
          {/* Reducir el espaciado */}
          <a
            href="#"
            className="text-white text-sm hover:bg-blue-400 hover:text-gray-800 py-1 px-2 rounded transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-white text-sm hover:bg-blue-400 hover:text-gray-800 py-1 px-2 rounded transition duration-300"
          >
            Sobre nosotros
          </a>
          <a
            href="#"
            className="text-white text-sm hover:bg-blue-400 hover:text-gray-800 py-1 px-2 rounded transition duration-300"
          >
            Productos
          </a>
          <a
            href="#"
            className="text-white text-sm hover:bg-blue-400 hover:text-gray-800 py-1 px-2 rounded transition duration-300"
          >
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
