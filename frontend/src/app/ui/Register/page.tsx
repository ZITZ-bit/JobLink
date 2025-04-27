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
              <input type="text" required/>
              <span>Email</span>
            </label>
            
            <label>
              <input type="password" id="password" required/>
              <span>Contraseña</span>
            </label>

            <label>
              <input type="password" id="passwordConfirm" required/>
              <span>Confirmar Contraseña</span>
            </label>

            <button className="submit" onClick={() => router.push("/ui/Login")}> Registrarte </button>
            
            <p className="signin">Ya tienes cuenta?? <Link href="/ui/Login">Inicia Sesion</Link> ahora</p>

          </form>
        </section>

      </main>

      <footer>

        <Footer className="animate__animated animate__fadeInUp"/>
        
      </footer>
    </>
  );
}
