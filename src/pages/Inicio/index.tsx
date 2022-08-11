import AnchorLink from "react-anchor-link-smooth-scroll"

import styles from "./Inicio.module.scss"
import logo from "../../assets/img/logoarena.png"
import nome from "../../assets/img/logoarenaNome.png"

export const Inicio = () => {
  return (
    <section id="Inicio" className={styles.AppStyle}>
      <menu>
        <AnchorLink href='#Inicio'>
          <img src={logo} alt="Imagem da logo Arena Fitness Academia"/>
          <img src={nome} alt="Imagem da logo Arena Fitness Academia"/>
        </AnchorLink>

        <ul>
          <li><AnchorLink href="#Inicio">INICIO</AnchorLink></li>
          <li><AnchorLink offset='450' href="#Sobre">SOBRE</AnchorLink></li>
          <li><AnchorLink offset='83' href="#Beneficios">BENEFICIOS</AnchorLink></li>
          <li><AnchorLink offset='45' href="#Personais">PERSONAIS</AnchorLink></li>
          <li><AnchorLink offset='83' href="#Planos">PLANOS</AnchorLink></li>
          <li><AnchorLink offset='83' href="#Treinos">TREINOS</AnchorLink></li>
          <li><AnchorLink offset='83' href="#Contatos">CONTATOS</AnchorLink></li>
        </ul>
      </menu>
      <section>
        <h1>VEM SER <span>ARENEIRO</span></h1>
        <p>Agende agora o seu horário clicando no botão abaixo</p>
        <AnchorLink offset='83' href="#">CONTATO</AnchorLink>
      </section>
    </section>
  );
}