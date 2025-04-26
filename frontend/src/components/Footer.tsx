"use client";

/* Componentes De Next */


/* Componentes Reutilizables */


/* Estilos y Modulos */

import "boxicons/css/boxicons.min.css";

/* Lógica de Componentes */


/* Animaciones */

import 'animate.css';

function Footer({className= ""}) {
  return (
    <footer className={`${className} bg-gray-600 text-white font-light text-sm px-6 py-4 mt-10 shadow-inner`}>

      <section className="flex flex-col md:flex-row justify-between items-center gap-6">

        <section className="flex items-center gap-3">

          <img src="/IconLight.png" alt="Logo" width={50} height={50} />

          <section>

            <h2 className="text-lg font-bold">JobLink</h2>
            <p className="text-xs opacity-80">Conectando oportunidades, talento y futuro.</p>

          </section>

        </section>

        <p className="text-xs text-center opacity-70 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} JobLink. Todos los derechos reservados.
        </p>

      </section>

    </footer>
  );
}

export default Footer;
