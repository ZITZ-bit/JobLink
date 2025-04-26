/* Componentes De Next */

import Link from 'next/link';

/* Estilos y Modulos */

import './Secret.css';

/* Logica De Componentes */

import Particles from './particle';

export default function Secret() {
  return (
    <>
      <main className="profile-screen">

        <h1 className="welcome-text">Felicidades Por encontrar el Secreto</h1>
        <p className="subtitle">Si te gusto porfa recomiendame con mas personas :D</p>

        <button className="exit-button"><Link href="/">Volver</Link></button>

        <Particles />
      </main>
    </>
  );
}
