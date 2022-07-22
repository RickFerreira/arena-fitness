import { useState } from 'react'
import styles from "./Inicio.module.scss"
import logo from "../../assets/img/logoarena.png"
import nome from "../../assets/img/logoarenaNome.png"

export const Inicio = () => {
  return (
    <div className={styles.AppStyle}>
      <a href="#">
        <img src={logo} alt="Imagem da logo Arena Fitness Academia"/>
        <img src={nome} alt="Imagem da logo Arena Fitness Academia"/>
      </a>
      <ul>
        <li><a href="#Inicio">Inicio</a></li>
        <li><a href="#Sobre">Sobre</a></li>
        <li><a href="#Beneficios">Beneficios</a></li>
        <li><a href="#Personais">Personais</a></li>
        <li><a href="#Treinos">Treinos</a></li>
        <li><a href="#Contatos">Contatos</a></li>
      </ul>
    </div>
  );
}