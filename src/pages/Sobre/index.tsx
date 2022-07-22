import { useState } from 'react'
import styles from "./Sobre.module.scss"
import logo from "../../assets/img/bannerHorizontal.jpg"


export const Sobre = () => {
  return (
    <div className={styles.AppStyle}>
      <h1>
        Sobre a Arena Fitness
      </h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src={logo} alt="Imagem da logo Arena Fitness Academia"/>
      </div>
    </div>
  );
}