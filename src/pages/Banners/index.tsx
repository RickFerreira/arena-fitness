import styles from "./Banners.module.scss"
import musculacao from"../../assets/img/musculacao.jpg"
import funcional from"../../assets/img/funcional.jpg"
import cardio from"../../assets/img/cardio.jpg"

export const Banners = () => {
  return (
    <div className={styles.AppStyle}>
      <img src={musculacao} alt="Imagem da modalidade musculacao"/>
      <img src={funcional} alt="Imagem da modalidade funcional"/>
      <img src={cardio} alt="Imagem da modalidade cardio"/>
    </div>
  );
}