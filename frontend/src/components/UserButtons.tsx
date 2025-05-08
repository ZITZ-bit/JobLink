"use client";

/* Componentes De Next */

import { useRouter } from "next/navigation";

/* Estilos y Modulos */

import "@/app/globals.css";
import "boxicons/css/boxicons.min.css";

/* Lógica de Componentes */


function Navar() {
  const router = useRouter();

  return (
    <section>
      
      <button onClick={() => router.push("/ui/Register")} className="m-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 border border-white hover:text-white transition duration-300 shadow-md transform hover:scale-110">
        Register
      </button>

      <button onClick={() => router.push("/ui/Login")} className="m-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 border border-white hover:text-white transition duration-300 shadow-md transform hover:scale-110">
        Login 
      </button>

    </section>
  );
}

export default Navar;
