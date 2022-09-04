import styles from "./Contatos.module.scss"
import { ImWhatsapp } from "react-icons/im";


export const Contatos = () => {
  return (
    <section id="Contatos" className={styles.AppStyle}>
      <h1>Contatos</h1>
      <h1>__________________</h1>
      <ul>
        <li>
          <p>Agende agora seu horário e venha fazer parte dessa família</p>
          <a href="#"> <ImWhatsapp/> Falar pelo whatsApp</a>
          <a href="#"> <ImWhatsapp/> Falar pelo instagram</a>
        </li>
      </ul>
    </section>
  );
}