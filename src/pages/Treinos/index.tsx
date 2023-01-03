import styles from "./Treinos.module.scss"
import treinoMasculinoIniciante from "../../assets/img/joabson.png"
import treinoFemininoIniciante from "../../assets/img/joabson.png"


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
          <img src={treinoMasculinoIniciante} alt="Qrcode treino iniciante masculino"/>
        </li>
        <li>
          <h2>Feminino</h2>
          <p>Nível iniciante</p>
          <br></br>
          <img src={treinoFemininoIniciante} alt="Qrcode treino iniciante feminino"/>
        </li>
      </ul>
    </section>
  );
}