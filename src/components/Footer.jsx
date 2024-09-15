import React from 'react';
const Footer = () => {
  return (
    <footer className="font-sans bg-gray-800 text-white py-6 p-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Smart Home Solutions. Todos los derechos reservados.</p>
        </div>
    </footer>
  );
};

export default Footer;
