import { useState } from 'react'
import styles from "./Rodape.module.scss"

export const Rodape = () => {
  return (
    <footer id="Rodape" className={styles.AppStyle}>
        <section>
            <div>
                <article>
                    <h4>Horarios</h4>
                    <ul>
                        <li>
                            Atendimento: Segunda à sábado das 9:00 às 11:00h e das 13:00 às 18:00h
                        </li>
                    </ul>
                </article>
                <article>
                    <h4>
                        Personais
                    </h4>
            
                    <ul>
                        <li>
                            Joabson Silva:
                            <a
                                href="https://api.whatsapp.com/send?phone=5583996479269&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Caio.%20No%20que%20posso%20ajudar%3F">(83)
                                9 9999 9999</a>
                        </li>
                        <li>
                            Karla Danniela:
                            <a
                                href="https://api.whatsapp.com/send?phone=5583993699579&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Tati.%20No%20que%20posso%20ajudar%3F">(83)
                                9 9999 9999</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <h4>
                        Local
                    </h4>
                    <ul>
                        <li>
                            <a href="https://goo.gl/maps/AWEDEdSz6PnKG4Yv5">Esperança(PB)</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <h4>
                        Site
                    </h4>
            
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/rick.rfs/">Todos os direitos reservados &copy</a>
                        </li>
                        <li id="nav-item">
                            <a href="https://www.instagram.com/rick.rfs/">By Rick Ferreira 2022 </a>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    </footer>
  );
}