import styles from './Slides.module.css';
import Image from 'next/image';
import basket from './assets/basket.png';
import walk from './assets/walk.png';
import jog from './assets/jog.png';
import Right from './assets/arrow-circle-right.svg';
import Left from './assets/arrow-circle-left.svg';
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
                <Image  alt='Golf' src={basket} />
                <h3 className={styles.title}>Keni Golf</h3>
                <span className={styles.logo}>Everything you need for any course.</span>
                <Link className={styles.containerLink} href={'#'}>Shop</Link>
            </div>

            <div className={styles.des}>
                <Image className={styles.logo} alt='Basketball' src={walk} />
                <h3 className={styles.title}>Keni basketball</h3>
                <span className={styles.logo}>Styles made for your games.</span>
                <Link className={styles.containerLink} href={'#'}>Shop</Link>
            </div>

            <div className={styles.des}>
                <Image alt='Runnin' src={jog} />
                <h3 className={styles.title}>Keni Trail Running</h3>
                <span className={styles.logo}>Everything you need for adventure.</span>
                <Link className={styles.containerLink} href={'#'}>Shop</Link>
            </div>

        </section>
    );
}
