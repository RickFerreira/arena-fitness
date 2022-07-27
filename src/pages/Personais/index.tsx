import { useState } from 'react'
import styles from "./Personais.module.scss"
import joabson from "../../assets/img/joabson.png"
import karla from"../../assets/img/karla.png"
import { AiOutlineTrophy } from "react-icons/ai";


export const Personais = () => {
  return (
    <section className={styles.AppStyle}>
      <h1>PERSONAIS TRAINERS</h1>
      <ul>
        <li>
          <img src={joabson} alt="Imagem de joabson personal"/>
          <h2>Joabson Personal</h2>
          <p>CREF PB-007515</p>
          <a href="#"> <AiOutlineTrophy/> Entrar em contato</a>
        </li>
        <li>
          <img src={karla} alt="Imagem de Karla Dannielle"/>
          <h2>Karla Dannielle</h2>
          <p>CREF 007726-G/PB</p>
          <a href="#"> <AiOutlineTrophy/> Entrar em contato</a>
        </li>
      </ul>
    </section>
  );
}