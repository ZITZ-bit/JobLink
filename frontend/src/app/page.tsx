"use client";

/* Componentes De Next */

import Link from "next/link";
import Image from "next/image";

/* Componentes Reutilizables */

import Navar from "@/components/Navar";
import Message from "@/components/Message";
import Footer from "@/components/Footer"

/* Estilos y Modulos */

import "@/styles/Home.css"
import "@/styles/Scss/Resolucion.scss"

/* Logica De Componentes */


/* Animaciones */


export default function Home() {

  return (
    <>
      <header>

        <Navar className="animate__animated animate__fadeInDown"/>

      </header>

      <main>

        <section className="welcome">
          <section className="welcome-text">

            <h1>Bienvenido a nuestra plataforma, cual rol te representa mas??</h1>

            <p>Explora nuestras oportunidades, descubre perfiles únicos, y conecta con el futuro que mereces. 
              Ya seas un aspirante en busca de crecimiento o una empresa con visión, en JobLink reunimos talento y propósito.
              Únete a una comunidad que cree en el poder de las conexiones y transforma tu camino profesional desde hoy.</p>

          </section>

          <section className="rols-btn">

            <Link href="/ui/Formulario/Reclutador"><button className="btn1">Soy Reclutador</button></Link>
            <Link href="/ui/Formulario/Aspirante/Formulario1/"><button className="btn2">Soy Aspirante</button></Link>
        
          </section>
        </section>
        
          <section className="img-container">
            <Image src="/image1.svg" alt="welcome" width={400} height={400} className="img_welcome" />
            <section className="circle"></section>
          </section>

          <Message />
          
      </main>

      <footer>

        <Footer className="animate__animated animate__fadeInUp"/>
        
      </footer>
    </>
  );
}
