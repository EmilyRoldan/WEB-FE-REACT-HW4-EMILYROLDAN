import React from "react";

function Main({ debilidades, fortalezas, amenazas, oportunidades, objetivos }) {
  return (
    <main className="font-sans flex-grow px-4 sm:px-8 md:px-12 py-6 text-lg text-black">
      <section>
        <h2 className="font-bold text-xl sm:text-2xl mb-4 text-center">
          Introducción
        </h2>
        <p className="pb-6">
          Smart Home Solutions se especializa en ofrecer una gama completa de
          dispositivos para la automatización del hogar, diseñados para mejorar
          tanto la seguridad como la eficiencia energética en su vivienda. Entre
          nuestros productos se encuentran cámaras de seguridad de última
          generación, cerraduras inteligentes con acceso remoto, termostatos que
          pueden ser controlados por voz y muchos otros dispositivos
          innovadores. Nuestra estrategia empresarial está centrada en
          proporcionar soluciones tecnológicas avanzadas que no solo optimicen
          el confort y la conveniencia, sino que también fortalezcan la
          protección de su hogar. Nos comprometemos a integrar tecnología de
          punta con un diseño intuitivo para crear un entorno doméstico más
          seguro y eficiente.
        </p>
      </section>

      <section className="pb-5">
        <h2 className="font-bold text-xl sm:text-2xl mb-6">
          1. Diagnóstico Actual
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 md:p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg md:text-xl mb-4">
              Debilidades
            </h3>
            <ol className="list-decimal space-y-2 text-sm text-black">
              {debilidades.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-xs">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="border p-6 md:p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg md:text-xl mb-4">
              Oportunidades
            </h3>
            <ol className="list-decimal space-y-2 text-sm text-black">
              {oportunidades.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-xs">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="border p-6 md:p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg md:text-xl mb-4">
              Fortalezas
            </h3>
            <ol className="list-decimal space-y-2 text-sm text-black">
              {fortalezas.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-xs">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="border p-6 md:p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg md:text-xl mb-4">Amenazas</h3>
            <ol className="list-decimal space-y-2 text-sm text-black">
              {amenazas.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <p className="pt-3 text-xs">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-xl sm:text-2xl mb-6">
          2. Identidad Organizacional
        </h2>

        <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">
          Misión
        </h3>
        <p className="text-base text-black mb-4">
          Proveer soluciones innovadoras para la automatización de hogares que
          garanticen seguridad, eficiencia energética y confort.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">
          Visión
        </h3>
        <p className="text-base text-black mb-4">
          Ser líderes en el mercado global de dispositivos inteligentes para el
          hogar, mejorando la calidad de vida de nuestros clientes mediante la
          tecnología.
        </p>

        <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">
          Políticas Corporativas
        </h3>
        <p className="text-base text-black">
          Nuestro compromiso es ofrecer productos de alta calidad, mantener
          altos estándares de seguridad en todos nuestros dispositivos y
          garantizar la satisfacción del cliente a través de un excelente
          servicio postventa.
        </p>
      </section>

      <br />
      <section>
        <h2 className="font-bold text-xl sm:text-2xl mb-6">
          3. Objetivos Estratégicos
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-black text-center">
                  Código
                </th>
                <th className="px-4 py-2 text-left text-black">Objetivo</th>
                <th className="px-4 py-2 text-left text-black text-center">
                  Meta
                </th>
                <th className="px-4 py-2 text-left text-black text-center">
                  Avance
                </th>
                <th className="px-4 py-2 text-left text-black text-center">
                  Cumplimiento
                </th>
                <th className="px-4 py-2 text-left text-black">Estado</th>
              </tr>
            </thead>
            <tbody>
              {objetivos.map((obj) => {
                const complianceText =
                  obj.compliance <= 35
                    ? "Crítico"
                    : obj.compliance <= 75
                    ? "Aceptable"
                    : "Exitoso";
                const complianceColor =
                  obj.compliance <= 35
                    ? "text-red-600"
                    : obj.compliance <= 75
                    ? "text-orange-600"
                    : "text-green-600";

                return (
                  <tr key={obj.id} className="border-b border-gray-200">
                    <td className="px-4 py-2 text-black text-center">
                      {obj.id}
                    </td>
                    <td className="px-4 py-2 text-black">{obj.goal}</td>
                    <td className="px-4 py-2 text-black text-center">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(obj.target)}
                    </td>
                    <td className="px-4 py-2 text-black text-center">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(obj.progress)}
                    </td>
                    <td className="px-4 py-2 text-black text-center">
                      {`${obj.compliance}%`}
                    </td>
                    <td
                      className={`px-4 py-2 font-semibold ${complianceColor}`}
                    >
                      {complianceText}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Main;
