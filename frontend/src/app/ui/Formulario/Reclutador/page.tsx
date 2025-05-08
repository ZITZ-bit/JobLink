/* Componentes De Next */


/* Componentes Reutilizables */

import Navar from "@/components/Navar"
import Form from "@/components/Form"
import Footer from "@/components/Footer"


/* Estilos y Modulos */

import simpleButtonStyles from "@/modules/Css/SimpleButton.module.css"

import "@/styles/Reclutador.css";

/* Logica De Componentes */



/* Animaciones */

export default function Reclutador() {
  return (
    <>
      <header>

        <Navar />

      </header>

      <main>

        <Form className="Recruiter-Form" title="Reclutador" fields={[

            { span: "Nombre De La Empresa", type: "text" },
            { span: "Industria", type: "text" },
            { span: "Correo De Contacto", type: "email" },
            { span: "Telefono De Contacto", type: "number" },

            { span: "Ubicacion", type: "text", fullWidth: true },
            { span: "Sitio Web", type: "text", fullWidth: true },
            { span: "Talento Que Busca", type: "text", fullWidth: true },
            { span: "Duracion De Seleccion", type: "text", fullWidth: true },

          ]}> <button type="submit" className={`${simpleButtonStyles.SimpleButton} Recruiter-NextBtn`} 
          style={{

            "--bg-color": "#e79e16",
            "--border-color": "#e79e16",
            "--text-color": "#fff",
            "--text-hover": "#282828",
            
          } as React.CSSProperties}>Siguiente</button>
        </Form>

      </main>

      <footer>

        <Footer />
        
      </footer>
    </>
  );
}
