/* Componentes De Next */

import Link from "next/link"

/* Componentes Reutilizables */

import Navar from "@/components/Navar"
import Form from "@/components/Form"
import Footer from "@/components/Footer"

/* Estilos y Modulos */

import simpleButtonStyles from "@/modules/Css/SimpleButton.module.css"

import "@/styles/Aspirante.css";

/* Logica De Componentes */

/* Animaciones */

export default function Aspirante() {
  return (
    <>
      <header>

        <Navar />

      </header>

      <main>

        <Form className="Applicant-Form" title="Aspirante" fields={[

            { span: "Nombres", type: "text" },
            { span: "Apellidos", type: "text" },
            { span: "Correo", type: "email" },
            { span: "Telefono", type: "number" },

            { span: "Ubicacion Actual", type: "text", fullWidth: true },
            { span: "Nivel De Estudio", type: "text", fullWidth: true },
            { span: "Carrera", type: "text", fullWidth: true },
            { span: "Institucion", type: "text",},
            { span: "Año de Inicio y Fin", type: "text",},

          ]}> <button type="submit" className={`${simpleButtonStyles.SimpleButton} Applicant-NextBtn`} 
          style={{

            "--bg-color": "#1658e7",
            "--border-color": "#1658e7",
            "--text-color": "#fff",
            "--text-hover": "#282828",
            
          } as React.CSSProperties}><Link href="/ui/Formulario/Aspirante/Formulario2/">Siguiente</Link></button>
        </Form>
        
      </main>

      <footer>

        <Footer />
        
      </footer>
    </>
  );
}
