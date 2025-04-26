import os

nombre = input("Nombre del componente: ").strip()
nombre = nombre[0].upper() + nombre[1:]

base = os.path.dirname(os.path.abspath(__file__))
ruta = os.path.join(base, "../src/components")
ruta_componente = os.path.join(ruta, f"{nombre}.tsx")

indent = "  "

contenido = f"""/* Componentes De Next */


/* Componentes Reutilizables */


/* Estilos y Modulos */

import "boxicons/css/boxicons.min.css";

/* Lógica de Componentes */


/* Animaciones */


function {nombre}() {{
{indent}return (
{indent*2}<section>
{indent*3}
{indent*2}</section>
{indent});
}}

export default {nombre};
"""

os.makedirs(ruta, exist_ok=True)

with open(ruta_componente, "w", encoding="utf-8", newline="\n") as f:
    f.write(contenido)

print(f"✨ Componente '{nombre}' creado con éxito!!")
