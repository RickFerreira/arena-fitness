import styles from "./Treinos.module.scss"
import treinoMasculinoIniciante from "../../assets/img/inicianteMasculino.png"
import treinoFemininoIniciante from "../../assets/img/inicianteFeminino.png"


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
      </ul>
    </section>
  );
}