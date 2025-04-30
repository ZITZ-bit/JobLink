import os

nombre_carpeta = input("Nombre de la carpeta: ").strip()
nombre_carpeta = nombre_carpeta[0].upper() + nombre_carpeta[1:]

nombre_css = input("Nombre del archivo CSS: ").strip()
nombre_css = nombre_css[0].upper() + nombre_css[1:]

base = os.path.dirname(os.path.abspath(__file__))
ruta_ui = os.path.join(base, "../src/app/ui", nombre_carpeta)
ruta_styles = os.path.join(base, "../src/styles")

ruta_page = os.path.join(ruta_ui, "page.tsx")
ruta_css = os.path.join(ruta_styles, f"{nombre_css}.css")

contenido_page = f"""/* Componentes De Next */


/* Componentes Reutilizables */


/* Estilos y Modulos */

import "@/styles/{nombre_css}.css";

/* Logica De Componentes */

/* Animaciones */

export default function {nombre_carpeta}() {{
  return (
    <>
      <header>

      </header>

      <main>
        
      </main>

      <footer>

      </footer>
    </>
  );
}}
"""

contenido_css = """* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
"""

os.makedirs(ruta_ui, exist_ok=True)
os.makedirs(ruta_styles, exist_ok=True)

with open(ruta_page, "w", encoding="utf-8", newline="\n") as f:
    f.write(contenido_page)

with open(ruta_css, "w", encoding="utf-8", newline="\n") as f:
    f.write(contenido_css)

print(f"✨ Carpeta '{nombre_carpeta}' y archivo '{nombre_css}.css' creados con éxito!!")
