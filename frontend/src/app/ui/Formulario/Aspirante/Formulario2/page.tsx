/* Componentes De Next */


/* Componentes Reutilizables */

import Navar from "@/components/Navar"
import Form from "@/components/Form"
import Footer from "@/components/Footer"

/* Estilos y Modulos */

import simpleButtonStyles from "@/modules/Css/SimpleButton.module.css"

import "@/styles/Aspirante.css";

/* Logica De Componentes */

/* Animaciones */

export default function Formulario2() {
  return (
    <>
      <header>

        <Navar />

      </header>

      <main>

        <Form className="Applicant-Form" title="Aspirante" fields={[

            { span: "Puesto", type: "text" },
            { span: "Dominio De Tecnologias", type: "text" },
            { span: "Tipo De Empleo", type: "email" },
            { span: "Cargo Deseado", type: "number" },

            { span: "Disponibilidad", type: "text", fullWidth: true },
            { span: "Enlace a Portafolio", type: "text", fullWidth: true },
            { span: "Breve Biografia", type: "text", fullWidth: true },

          ]}> <button type="submit" className={`${simpleButtonStyles.SimpleButton} Applicant-NextBtn`} 
          style={{

            "--bg-color": "#1658e7",
            "--border-color": "#1658e7",
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
