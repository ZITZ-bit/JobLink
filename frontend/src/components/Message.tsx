/* Componentes De Next */

import { useEffect, useState } from "react";

/* Componentes Reutilizables */


/* Estilos y Modulos */

import MsgBannerStyles from "@/modules/Css/MsgBanner.module.css"; 

import "boxicons/css/boxicons.min.css";

/* Lógica de Componentes */

import JobLinkMessages from "@/utils/js/messages";

/* Animaciones */

function Message() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * JobLinkMessages.length);
    setMessage(JobLinkMessages[random]);
  }, []);

  return (
    <section>

      <section className={MsgBannerStyles.BannerMessage}>

        <section className={MsgBannerStyles.BannerDecorated}></section>

        {message}
        
      </section>

    </section>
  );
}

export default Message;
