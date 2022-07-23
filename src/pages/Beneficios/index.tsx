import { useState } from 'react'
import styles from "./Beneficios.module.scss"

export const Beneficios = () => {
  return (
    <section className={styles.AppStyle}>
      <h1 >BENEFICIOS DE SER ARENEIRO</h1>
      <ul>
        <li>
          <h2>Sorteios</h2>
          <p>Aqui você concorre a diversos prêmios todos os meses.</p>
        </li>
        <li>
          <h2>Cartão fidelidade</h2>
          <p>Temos um cartão fidelidade que presenteia os nossos areneiros mais fieis.</p>
        </li>
        <li>
          <h2>Custo beneficio</h2>
          <p>Nossa academia é uma das mais baratas e melhores da cidade.</p>
        </li>
        <li>
          <h2>Não fecha para almoço</h2>
          <p>A única academia que abre no horário de almoço, para você que só tem esse tempo para treinar.</p>
        </li>
        <li>
          <h2>Maquinas novas</h2>
          <p>Estamos sempre atualizando e trazendo novas máquinas para garantir mais conforto e performance.</p>
        </li>
        <li>
          <h2>Planilhas de treino</h2>
          <p>Oferecemos planilhas de treinos para você garantir seus resultados mesmo treinando sozinho(a).</p>
        </li>
        <li>
          <h2>Profissionais</h2>
          <p>Temos profissionais qualificados para te dar os melhores resultados possíveis.</p>
        </li>
        <li>
          <h2>Acolhimento</h2>
          <p>A Arena Fitness é um ambiente familiar, onde você será bem atendido(a) e recebido(a). </p>
        </li>
      </ul>
      
    </section>
  );
}