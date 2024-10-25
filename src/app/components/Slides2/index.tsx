import styles from './Slides.module.css';
import Image from 'next/image';
import Atl1 from './assets/atleta1.png';
import Atl2 from './assets/atleta2.png';
import Right from '../Slides/assets/arrow-circle-right.svg';
import Left from '../Slides/assets/arrow-circle-left.svg';
import Link from 'next/link';



export default function Slides() {
    return (
        <section className={styles.container}>A
          <div>
                <h2 className={styles.deadline}>Shop by Sport</h2>
                <div className={styles.arrow}>
                    <Image alt='arrow' src={Left} />
                    <Image alt='arrow' src={Right} />
                </div>
            </div>


            <div className={styles.des}>
                <Image className={styles.img} alt='Atlitic' src={Atl1} />
                <h3 className={styles.title}>Keni Grace</h3>
                <span className={styles.logo}>Explore our futuristic outfit..</span>
                <Link className={styles.containerLink} href={'#'}>Shop</Link>
            </div>

            <div className={styles.des}>
                <Image className={styles.img} alt='Atlitic' src={Atl2} />
                <h3 className={styles.title}>Keni in Paris</h3>
                <span className={styles.logo}>Our Paris fashion week trends.</span>
                <Link className={styles.containerLink} href={'#'}>Shop</Link>
            </div>
        </section>
    );
}
