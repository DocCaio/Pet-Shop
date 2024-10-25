import Image from 'next/image';
import Link from 'next/link';
import styles from './Banner.module.css';
//import Shoe from './assets/frame.png'



export default function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>        
        <h3 className={styles.title}>BECOME A MEMBER</h3>
        <p className={styles.pr}>Sign up for free. Join the community.</p>
       

        <div className={styles.contain}>
        <Link className={styles.link} href={'#'}>Join Us</Link>
        <Link className={styles.link} href={'#'}>Sign In</Link>
        </div>
       {/* <Image alt='banner' src={Shoe}/>*/}
      </div>
    </section>
  );
}