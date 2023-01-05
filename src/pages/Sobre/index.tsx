import { useState } from 'react'
import styles from "./Sobre.module.scss"
import localizacao from "../../assets/img/localizacao.jpg"


export const Sobre = () => {
  return (
    <section id="Sobre" className={styles.AppStyle}>
      <div>
        <h1>
          SOBRE A NOSSA ACADEMIA 
        </h1>
        <h1>
          _________
        </h1>
        <p>
          Somos uma academia <span>referência </span> na cidade de Esperança-PB e estamos a 5 anos transformando a vida de várias pessoas. Quer mudar seu <span>corpo </span> e <span>saúde </span>? Venha fazer parte dessa <span>família </span> e vamos crescer juntos.
        </p>
      </div>
      <a href="https://www.google.com.br/maps/place/Arena+Fitness/@-7.1562635,-36.779399,8z/data=!4m6!3m5!1s0x7ac28eeef9fe79b:0xf6b98e32cbebbcae!8m2!3d-7.0130809!4d-35.8571107!16s%2Fg%2F11g9sxykqv">
        <img src={localizacao} alt="Imagem com simbolo de localização"/>
      </a>
    </section>
  );
}