import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  return (
    <>
      <section className={styles.servicos}>
        <h2 className={styles.servicosTitulo}>Nossos serviços</h2>
        <ul className={styles.servicosLista}>
          <li className={styles.banhoETosa}>
            <Link className={styles.link} href={'#'} >Banho e Tosa</Link>
          </li>
          <li className={styles.hospedagem}>
            <Link className={styles.link} href={'#'} >Hospedagem</Link>
          </li>
          <li className={styles.veterinario}>
            <Link className={styles.link} href={'#'} >Veterinário</Link>
          </li>
          <li className={styles.adestramento}>
            <Link className={styles.link} href={'#'} >Adestramento</Link>
          </li>
          <li className={styles.petsiter}>
            <Link className={styles.link} href={'#'} >Petsiter</Link>
          </li>
        </ul>
      </section>
    </>
  )
}