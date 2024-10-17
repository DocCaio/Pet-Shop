import Image from 'next/image';
import Link from 'next/link';
import Shoe from './assets/shoe.png';
import styles from './Hero.module.css';



export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.teste}>
        <h1>
          Redefining Motion: <strong>The Future of Footwear is Here</strong>
        </h1>

        <p>
          Experience unparalleled comfort and innovative design with our state-of-the-art, futuristic sports shoes.
          Built for champions, designed for you.
        </p>

        <span className={styles.containerBtn}>
          Step into the Future
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
           <Link className={styles.linkContainer} href={"#"}>Shop now</Link>
        </span>
      
       
      </div>

      <Image className={styles.containerImg} alt="Shoe" src={Shoe} />
    </section>
  );
}