import styles from './Services.module.css'

export default function Services() {
    return (
        <>
         <section className={styles.servicos}>
      <h2 className={styles.servicosTitulo}>Nossos serviços</h2>
      <ul className={styles.servicosLista}>
        <li className={styles.banhoETosa}>
          <a className={styles.link} href="#">Banho e Tosa</a>
        </li>
        <li className={styles.hospedagem}>
          <a className={styles.link}href="#">Hospedagem</a>
        </li>
        <li className={styles.veterinario}>
          <a className={styles.link} href="#">Veterinário</a>
        </li>
        <li className={styles.adestramento}>
          <a className={styles.link} href="#">Adestramento</a>
        </li>
        <li className={styles.petsiter}>
          <a className={styles.link} href="#">Petsiter</a>
        </li>
      </ul>
    </section>
        </>
    )
}