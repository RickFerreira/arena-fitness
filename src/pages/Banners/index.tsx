import styles from "./Banners.module.scss"
import musculacao from"../../assets/img/musculacao.jpg"
import funcional from"../../assets/img/funcional.jpg"
import cardio from"../../assets/img/cardio.jpg"
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

export const Banners = () => {
  return (
    <div className={styles.AppStyle}>
      <ul>
        <img src={musculacao} alt="Imagem da modalidade musculacao"/>
        <img src={funcional} alt="Imagem da modalidade funcional"/>
        <img src={cardio} alt="Imagem da modalidade cardio"/>
      </ul>
      <section>
        <ImQuotesLeft/>
        <p>Se for pra sofrer, que seja na academia. Lá pelo menos a dor trás resultados.</p>
      </section>
    </div>
  );
}