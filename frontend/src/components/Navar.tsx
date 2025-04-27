"use client";

/* Componentes De Next */

import Link from "next/link";
import Image from "next/image";

/* Componentes Reutilizables */

import UserButtons from "@/components/UserButtons"

/* Estilos y Modulos */

import "boxicons/css/boxicons.min.css";

/* Lógica de Componentes */


/* Animaciones */

import 'animate.css';

function Navar({ className = ""}) {
  return (
    <section>
      <header className={`${className} flex rounded-md justify-between items-center py-2 px-4 m-2 bg-gray-600 text-white font-light text-sm shadow-md`}>

        <section className="flex items-center gap-2 transition duration-300 transform hover:scale-110 cursor-pointer">
          
          <Image src="/IconLight.png" alt="Logo" width={70} height={70} />
          <span className="text-xl font-bold">JobLink</span>
        
        </section>

        <nav>
          <ul className="flex list-none gap-6 text-[1.05rem] font-semibold">
            <li className="transition duration-300 transform hover:-translate-y-1"><Link href="/">Inicio</Link></li>
            <li className="transition duration-300 transform hover:-translate-y-1"><Link href="#">Oferta</Link></li>
            <li className="transition duration-300 transform hover:-translate-y-1"><Link href="#">Nosotros</Link></li>
            <li className="transition duration-300 transform hover:-translate-y-1"><Link href="#">Contactos</Link></li>
          </ul>
        </nav>

        <section>

          <UserButtons />
          
        </section>

      </header>
    </section>
  );
}

export default Navar;
