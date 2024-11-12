import styles from './Base.module.css';

export default function Footer() {

    return (
        <>

<footer className={styles.rodape}>
    <div className={styles.rodapeBg} id={styles.container}>
      <div className={styles.iconesRodape}>
        <p className={styles.bodyRegular}>Acesse nossas redes:</p>
        <div>
          <img className={styles.iconeRodape} src="./assets/icones/whatsapp.png" alt="Whatsapp" />
          <img className={styles.iconeRodape} src="./assets/icones/instragam.png" alt="Instagram" />
          <img className={styles.iconeRodape} src="./assets/icones/tiktok.png" alt="Tiktok" />
        </div>
      </div>
      <span>Desenvolvido por mim.</span>
    </div>
  </footer>
        </>
    )
}