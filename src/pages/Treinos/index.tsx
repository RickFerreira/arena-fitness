import styles from "./Treinos.module.scss"
import treinoMasculinoIniciante from "../../assets/img/inicianteMasculino.png"
import treinoFemininoIniciante from "../../assets/img/inicianteFeminino.png"
import treinoMasculinoIntermediario from "../../assets/img/intermediarioMasculino.png"
import treinoFemininoIntermediario from "../../assets/img/intermediarioFeminino.png"
import treinoFemininoAvancado from "../../assets/img/avancadoFeminino.png"
import treinoMasculinoAvancado from "../../assets/img/avancadoMasculino.png"

export const Treinos = () => {
  return (
    <section id="Treinos" className={styles.AppStyle}>
      <h1 >Treinos prontos de musculação</h1>
      <h2>____________</h2>
      <ul>
        <li>
          <h2>Masculino</h2>
          <p>Nível iniciante</p>
          <br></br>
          <a href="https://docs.google.com/document/d/1KfkmTIZ1GyTDMtuvHfFkbnQPetUGctZ4m_u_PwJRLkA/edit">
            <img src={treinoMasculinoIniciante} alt="Qrcode treino iniciante masculino"/>
          </a>
        </li>
        <li>
          <h2>Feminino</h2>
          <p>Nível iniciante</p>
          <br></br>
          <a href="https://docs.google.com/document/d/13ii1DkyVuyrcQQfGMlXVzn_vJ44YkYzVf6kzYsJHbDE/edit">
            <img src={treinoFemininoIniciante} alt="Qrcode treino iniciante feminino"/>
          </a>
        </li>
        <li>
          <h2>Masculino</h2>
          <p>Nível intermediário</p>
          <br></br>
          <a href="https://docs.google.com/document/d/1OpXhdIhbs97-q5lCD0BcIgp3V0QMRiDfXi8cPedzuEE/edit">
            <img src={treinoMasculinoIntermediario} alt="Qrcode treino intermediario masculino"/>
          </a>
        </li>
        <li>
          <h2>Feminino</h2>
          <p>Nível intermediário</p>
          <br></br>
          <a href="https://docs.google.com/document/d/17pY4u2ZvH6vimHXyOh5EymGaEPjx_hfZVzrbIz-kIIs/edit">
            <img src={treinoFemininoIntermediario} alt="Qrcode treino intermediario feminino"/>
          </a>
        </li>
        <li>
          <h2>Masculino</h2>
          <p>Nível avançado</p>
          <br></br>
          <a href="https://docs.google.com/document/d/1YowKfZP_yFUiH0-bA7jDMaiPKNV8vEKdEaP42dyDRwE/edit">
            <img src={treinoMasculinoAvancado} alt="Qrcode treino avançado masculino"/>
          </a>
        </li>
        <li>
          <h2>Feminino</h2>
          <p>Nível avançado</p>
          <br></br>
          <a href="https://docs.google.com/document/d/1mAKwj2frjXaSb7zgQyQ4ktJj_2DR-hvn6yYENEDWCDE/edit">
            <img src={treinoFemininoAvancado} alt="Qrcode treino avançado feminino"/>
          </a>
        </li>
      </ul>
    </section>
  );
}
