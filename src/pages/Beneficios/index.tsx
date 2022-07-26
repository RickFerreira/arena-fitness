import styles from "./Beneficios.module.scss";

import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
import { AiOutlineDollar } from "react-icons/ai";
import { CgBowl } from "react-icons/cg";
import { GiWeightLiftingUp } from "react-icons/gi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { BiDumbbell } from "react-icons/bi";
import { BsWatch } from "react-icons/bs";


export const Beneficios = () => {
  return (
    <section id="Beneficios" className={styles.AppStyle}>
      <h1 >BENEFICIOS DE SER ARENEIRO</h1>
      <h2>____________</h2>
      <ul>
        <li>
          <div>
            <AiOutlineTrophy/>
          </div>
          <h2>Sorteios</h2>
          <p>Aqui você concorre a diversos prêmios todos os meses.</p>
        </li>
        <li>
          <div>
            <AiOutlineIdcard/>
          </div>
          <h2>Cartão fidelidade</h2>
          <p>Temos um cartão fidelidade que presenteia os nossos areneiros mais fieis.</p>
        </li>
        <li>
          <div>
            <AiOutlineDollar/>
          </div>
          <h2>Custo beneficio</h2>
          <p>Nossa academia é uma das mais baratas e melhores da cidade.</p>
        </li>
        <li>
          <div>
            <CgBowl/>
          </div>
          <h2>Não fecha para almoço</h2>
          <p>A única academia que abre no horário de almoço, para você que só tem esse tempo para treinar.</p>
        </li>
        <li>
          <div>
            <BiDumbbell/>
          </div>
          <h2>Maquinas novas</h2>
          <p>Estamos sempre atualizando e trazendo novas máquinas para garantir mais conforto e performance.</p>
        </li>
        <li>
          <div>
            <AiOutlineFileProtect/>
          </div>
          <h2>Planilhas de treino</h2>
          <p>Oferecemos planilhas de treinos para você garantir seus resultados mesmo treinando sozinho(a).</p>
        </li>
        <li>
          <div>
            <GiWeightLiftingUp/>
          </div>
          <h2>Profissionais</h2>
          <p>Temos profissionais qualificados para te dar os melhores resultados possíveis.</p>
        </li>
        <li>
          <div>
            <BiHomeHeart/>
          </div>
          <h2>Acolhimento</h2>
          <p>A Arena Fitness é um ambiente familiar, onde você será bem atendido(a) e recebido(a). </p>
        </li>
        <li>
          <div>
            <BsWatch/>
          </div>
          <h2>Aberto até as 22 hrs</h2>
          <p>Aberta até essa hora para garantir que você não vai perder o dia de treino</p>
        </li>
      </ul>

    </section>
  );
}