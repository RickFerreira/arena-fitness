import { useState } from 'react'
import styles from "./Personais.module.scss"
import joabson from "../../assets/img/joabson.png"
import karla from"../../assets/img/karla.png"
import { ImWhatsapp } from "react-icons/im";


export const Personais = () => {
  return (
    <section id="Personais" className={styles.AppStyle}>
      <h1>PERSONAIS TRAINERS</h1>
      <h1>__________________</h1>
      <ul>
        <li>
          <img src={joabson} alt="Imagem de joabson personal"/>
          <h2>Joabson Silva</h2>
          <p>CREF PB-007515</p>
          <a href="#"> <ImWhatsapp/> Entrar em contato</a>
        </li>
        <li>
          <img src={karla} alt="Imagem de Karla Dannielle"/>
          <h2>Karla Dannielle</h2>
          <p>CREF 007726-G/PB</p>
          <a href="#"> <ImWhatsapp/> Entrar em contato</a>
        </li>
      </ul>
    </section>
  );
}