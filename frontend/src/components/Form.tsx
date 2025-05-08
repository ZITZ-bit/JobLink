'use client'

/* Componentes De Next */



/* Componentes Reutilizables */



/* Estilos y Modulos */

import effectInputStyles from "@/modules/Css/EffectInput.module.css"

import "boxicons/css/boxicons.min.css";
import "@/app/globals.css";

/* Lógica de Componentes */

import { groupFields, Field } from "@/utils/ts/FormFields"; 
import React from "react";

interface FormProps {
  className?: string;
  title?: string;
  fields?: Field[];
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: React.ReactNode;
}

/* Animaciones */



function Form({ className = "", title = "", fields = [], onSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault(), children }: FormProps) {

  const groupedFields = groupFields(fields);

  return (
    <section>
      <section className={`${className} relative max-w-[600px] w-full bg-gray-200 p-[25px] rounded-l-[15px] shadow-md m-[10px]`}>
        
        <header className="text-[1.5rem] text-[#333] font-medium text-center">{title}</header>

        <form className="mt-[30px] space-y-[20px]" onSubmit={onSubmit}>

          <section className="flex flex-wrap gap-x-[20px] gap-y-[20px]">

            {groupedFields.map((group, index) => (
              
              Array.isArray(group) ? (

                <section key={index} className="flex w-full gap-x-[20px]">

                  {group.map((field, subIndex) => (

                    <section key={subIndex} className={`${field.fullWidth ? 'w-full' : 'w-1/2'}`}>

                      <label className={effectInputStyles.label}>
                        <input type={field.type || 'text'} required className={effectInputStyles.input} />
                        <span className={effectInputStyles.span}>{field.span || 'Texto'}</span>
                      </label>

                    </section>

                  ))}

                </section>

              ) : (

                <section key={index} className={`${group.fullWidth ? 'w-full' : 'w-1/2'}`}>

                  <label className={effectInputStyles.label}>
                    <input type={group.type || 'text'} required className={effectInputStyles.input} />
                    <span className={effectInputStyles.span}>{group.span || 'Texto'}</span>
                  </label>
                
                </section>

              )
            ))}

          </section>

          {children}

        </form>

      </section>
    </section>
  );
}

export default Form;
