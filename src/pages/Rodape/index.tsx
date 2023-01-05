import styles from "./Rodape.module.scss"

export const Rodape = () => {
  return (
    <footer id="Rodape" className={styles.AppStyle}>
        <section>
            <div>
                <article>
                    <h4>Horarios:</h4>
                    <ul>
                        <li>
                            <p>Segunda à sexta das 5:30h às 22:00h</p>
                        </li>
                        <li>
                            <p>Sábados das 7:00h às 12:00h</p>
                        </li>
                    </ul>
                </article>
                <article>
                    <h4>Personais:</h4>
                    <ul>
                        <li>
                            <p>Joabson Silva: <a href="https://api.whatsapp.com/send?phone=5583996479269&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Caio.%20No%20que%20posso%20ajudar%3F">  (83)
                                9 9999 9999</a></p>
                        </li>
                        <li>
                            <p>Karla Danniela: <a href="https://api.whatsapp.com/send?phone=5583993699579&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Tati.%20No%20que%20posso%20ajudar%3F">  (83)
                                9 9999 9999</a></p>

                        </li>
                    </ul>
                </article>
                <article>
                    <h4>
                        Localização:
                    </h4>
                    <ul>
                        <li>
                            <a href="https://www.google.com.br/maps/place/Arena+Fitness/@-7.1562635,-36.779399,8z/data=!4m6!3m5!1s0x7ac28eeef9fe79b:0xf6b98e32cbebbcae!8m2!3d-7.0130809!4d-35.8571107!16s%2Fg%2F11g9sxykqv">Esperança(PB)</a>
                        </li>
                    </ul>
                </article>
                <article>
                    <h4>
                        Produção do site:
                    </h4>
                    <ul>
                        <li>
                            <p>Todos os direitos reservados &copy;</p>
                        </li>
                        <li>
                            <p>Feito por <a href="https://www.instagram.com/rick.rfs/"> Rick Ferreira </a> - 2023</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    </footer>
  );
}