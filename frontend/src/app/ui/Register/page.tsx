"use client";

/* Componentes De Next */

import { useRouter } from "next/navigation";
import Link from "next/link";

/* Componentes Reutilizables */

import Navar from "@/components/Navar";
import Footer from "@/components/Footer"

/* Estilos y Modulos */

import "@/styles/Register.css"

/* Logica De Componentes */


/* Animaciones */


export default function Register() {

  const router = useRouter();

  return (
    <>
      <header>

        <Navar className="animate__animated animate__fadeInDown"/>

      </header>

      <main>



      </main>

      <footer>

        <Footer className="animate__animated animate__fadeInUp"/>
        
      </footer>
    </>
  );
}
