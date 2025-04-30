"use client";

/* Componentes De Next */

import Link from "next/link";
import Image from "next/image";

/* Componentes Reutilizables */

import Navar from "@/components/Navar";
import Footer from "@/components/Footer"

/* Estilos y Modulos */

import "@/styles/Login.css";

/* Logica De Componentes */

/* Animaciones */

export default function Login() {

  return (
    <>
      <header>

        <Navar className="animate__animated animate__fadeInDown" />
        
      </header>

      <main>

        <section className="login-container">
          <form className="login-form" autoComplete="off">

            <p className="title">Login</p>
            <p className="message">Registrate ahora para que puedas tener tu propio Perfil</p>

            <label>
              <input type="email" required />
              <span>Email</span>
            </label>

            <label>
              <input type="password" required />
              <span>Contraseña</span>
            </label>

            <button type="submit" className="submit">Login</button>

            <p className="signin">No tienes cuenta?? <Link href="/ui/Register">Registrate</Link> ahora!!</p>

          </form>
        </section>

        <section className="circle_login">
          <Image src="/image3.svg" alt="Register" width={400} height={400} className="img_login" />
        </section>

      </main>

      <footer>

        <Footer className="animate__animated animate__fadeInUp" />

      </footer>
    </>
  );
}
