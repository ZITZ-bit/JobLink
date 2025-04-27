"use client";

/* Componentes De Next */

import { useRouter } from "next/navigation";
import Link from "next/link";

/* Componentes Reutilizables */

import Navar from "@/components/Navar";
import Footer from "@/components/Footer"

/* Estilos y Modulos */

import "@/styles/Login.css";

/* Logica De Componentes */


/* Animaciones */

export default function Login() {

  const router = useRouter();

  return (
    <>
      <header>

        <Navar className="animate__animated animate__fadeInDown"/>

      </header>

      <main>

        <section className="login-container">
          <form className="login-form" autoComplete="off">
              <p className="title">Login</p>
              <p className="message">Registrate ahora para que puedas tener tu propio Perfil</p>

            <label>
              <input type="text" required/>
              <span>Email</span>
            </label>
            
            <label>
              <input type="password" id="password" required/>
              <span>Contraseña</span>
            </label>

            <button className="submit" onClick={() => router.push("#")}> Login </button>
            
            <p className="signin">No tienes cuenta?? <Link href="/ui/Register">Registrate</Link> ahora!!</p>

          </form>
        </section>

      </main>

      <footer>

        <Footer className="animate__animated animate__fadeInUp"/>
        
      </footer>
    </>
  );
}
