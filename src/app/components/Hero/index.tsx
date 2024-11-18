import styles from './Hero.module.css';
import Image from 'next/image';
import Banner from '../../assets/imagens/banner.png';

export default function Hero() {

    return (
        <>
        <section className={styles.destaque}>
      <div className= {styles.banner} id={styles.container}>
        <h1 className= {styles.destaqueTitulo}>
          Seu melhor amigo,
          <span>nosso maior cuidado!</span>
        </h1>
        <Image src={Banner} 
        alt="Imagem de dois pets, um gato cinza listrado e um cão husky nas cores branco e caramelo"/>        
      </div>
    </section>


        </>
    )
}