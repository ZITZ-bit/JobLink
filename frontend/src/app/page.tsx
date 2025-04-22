"use client";

/* Componentes De Next */

import { useRouter } from "next/navigation";
import Link from "next/link";

/* Componentes Reutilizables */



/* Estilos y Modulos */



/* Logica De Componentes */



/* Animaciones */



export default function Home() {

  const router = useRouter();

  return (
    <>
      <header>

      </header>

      <main>
        <button onClick={() => router.push("/reclutador")}> Soy Reclutador </button>
        <button onClick={() => router.push("/aspirante")}> Soy Aspirante </button>
      </main>

      <footer>

      </footer>
    </>
  );
}
