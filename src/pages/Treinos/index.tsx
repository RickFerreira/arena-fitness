import styles from "./Treinos.module.scss"

export const Treinos = () => {
  return (
    <section id="Treinos" className={styles.AppStyle}>
      <h1 >Treinos prontos de musculação</h1>
      <h2>____________</h2>
      <ul>
        <li>
          <h2>Masculino</h2>
          <p>imagem</p>
        </li>
        <li>
          <h2>Feminino</h2>
          <p>imagem</p>
        </li>
      </ul>
    </section>
  );
}