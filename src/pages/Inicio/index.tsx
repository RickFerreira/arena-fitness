import { useState } from 'react'
import styles from "./Inicio.module.scss"
import logo from "../../assets/img/logoarena.png"
import nome from "../../assets/img/logoarenaNome.png"

export const Inicio = () => {
  return (
    <div className={styles.AppStyle}>
      <menu>
        <a href="#">
          <img src={logo} alt="Imagem da logo Arena Fitness Academia"/>
          <img src={nome} alt="Imagem da logo Arena Fitness Academia"/>
        </a>
        <ul>
          <li><a href="#Inicio">INICIO</a></li>
          <li><a href="#Sobre">SOBRE</a></li>
          <li><a href="#Beneficios">BENEFICIOS</a></li>
          <li><a href="#Personais">PERSONAIS</a></li>
          <li><a href="#Treinos">TREINOS</a></li>
          <li><a href="#Contatos">CONTATOS</a></li>
        </ul>
      </menu>
      <section>
        <h1>VEM SER <span>ARENEIRO</span></h1>
        <p>Agende agora o seu horário clicando no botão abaixo</p>
        <a href="#">CONTATO</a>
      </section>
    </div>
  );
}