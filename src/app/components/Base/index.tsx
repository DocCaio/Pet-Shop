import styles from './Base.module.css';
import Image from 'next/image';
import whatsapp from '../../assets/icones/whatsapp.png';
import instragam from '../../assets/icones/instragam.png';
import tiktok from '../../assets/icones/tiktok.png';



export default function Footer() {

    return (
        <>

<footer className={styles.rodape}>
    <div className={styles.rodapeBg} id={styles.container}>
      <div className={styles.iconesRodape}>
        <p className={styles.bodyRegular}>Acesse nossas redes:</p>
        <div>
          <Image  className={styles.iconeRodape}  src={whatsapp}   alt="Whatsapp"/>
          <Image  className={styles.iconeRodape} src={instragam}  alt="Instagram"/>
          <Image  className={styles.iconeRodape} src={tiktok} alt="Tiktok"/>       
        </div>
      </div>
      <span>Desenvolvido por mim.</span>
    </div>
  </footer>
        </>
    )
}
