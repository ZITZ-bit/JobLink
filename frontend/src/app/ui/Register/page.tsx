"use client";

/* Componentes De Next */

import Link from "next/link";
import Image from "next/image";

/* Componentes Reutilizables */

import Navar from "@/components/Navar";
import Footer from "@/components/Footer";

/* Estilos y Modulos */

import "@/styles/Register.css";

/* Logica De Componentes */

/* Animaciones */

export default function Register() {
  return (
    <>
      <header>

        <Navar className="animate__animated animate__fadeInDown" />

      </header>

      <main>

        <section className="container">
          <form autoComplete="off" className="form">

            <p className="title">Registro</p>
            <p className="message">Registrate ahora para que puedas tener tu propio Perfil</p>

            <section className="form-group">

              <label>
                <input type="text" required/>
                <span>Nombre</span>
              </label>

              <label>
                <input type="text" required/>
                <span>Apellido</span>
              </label>

            </section>

            <label>
              <input type="email" required />
              <span>Email</span>
            </label>

            <label>
              <input type="password" required />
              <span>Contraseña</span>
            </label>

            <label>
              <input type="password" required />
              <span>Confirmar Contraseña</span>
            </label>

            <button type="submit" className="submit">Registrarte</button>

            <p className="signin">Ya tienes cuenta?? <Link href="/ui/Login">Inicia Sesión</Link> ahora</p>

          </form>
        </section>

        <section className="circle_register">
          <Image src="/image2.svg" alt="Register" width={400} height={400} className="img_register" />
        </section>

        
      </main>

      <footer>

        <Footer className="animate__animated animate__fadeInUp" />

      </footer>
    </>
  );
}
