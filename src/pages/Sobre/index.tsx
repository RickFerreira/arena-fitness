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
      <a href="#">
        <img src={localizacao} alt="Imagem da logo Arena Fitness Academia"/>
      </a>
    </section>
  );
}