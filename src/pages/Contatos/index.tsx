import styles from "./Contatos.module.scss"
import { ImWhatsapp } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

export const Contatos = () => {
  return (
    <section id="Contatos" className={styles.AppStyle}>
      <h1>Contatos</h1>
      <h1>__________________</h1>
      <ul>
        <li>
          <p>Agende agora seu horário e venha fazer parte dessa família</p>
          <a href="https://api.whatsapp.com/send?phone=558393403141&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20da%20academia."> 
          <ImWhatsapp/> Falar pelo whatsApp</a>
          <a href="https://www.instagram.com/_arenafitnessacademia/"> 
          <BsInstagram/> Falar pelo instagram</a>
        </li>
      </ul>
    </section>
  );
}