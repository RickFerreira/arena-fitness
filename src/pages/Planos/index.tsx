import styles from "./Planos.module.scss"

export const Planos = () => {
  return (
    <section id="Planos" className={styles.AppStyle}>
      <h1>Valores dos planos</h1>
      <h1>__________________</h1>
      <ul>
        <li>
          <h2>R$ 0</h2>
          <h3>Aula experimental</h3>
          <p>Um dia de aula experimental</p>
          <p>Ideal pra você nos conhecer</p>
          <p>Obs. Só vale uma vez</p>
          <a href="#">Eu quero esse</a>
        </li>
        <li>
          <h2>R$ 50</h2>
          <h3>Plano mensal</h3>
          <p>Um mês de academia</p>
          <p>Direito a todos os benefícios</p>
          <p>Obs. Até duas horas por dia</p>
          <a href="#">Eu quero esse</a>
        </li>
        <li>
          <h2>R$ 250</h2>
          <h3>Plano semestral</h3>
          <p>Seis meses de academia</p>
          <p>Ótimo custo benefício</p>
          <p>Obs. Até duas horas por dia</p>
          <a href="#">Eu quero esse</a>
        </li>
        <li>
          <h2>R$ 450</h2>
          <h3>Plano anual</h3>
          <p>Um ano de academia</p>
          <p>Ideal para você que é focado</p>
          <p>Obs. Até duas horas por dia</p>
          <a href="#">Eu quero esse</a>
        </li>

      </ul>
      
    </section>
  );
}