import { useState } from 'react'
import styles from "./Sobre.module.scss"
import logo from "../../assets/img/bannerHorizontal.jpg"


export const Sobre = () => {
  return (
    <div className={styles.AppStyle}>
      <div>
        <img src={logo} alt="Imagem da logo Arena Fitness Academia"/>
      </div>
      <h1>
        Sobre a Arena Fitness
      </h1>
      <h2>
        Loren inpson
      </h2>
      
    </div>
  );
}