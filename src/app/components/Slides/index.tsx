import styles from './Slides.module.css';
import Image, { StaticImageData } from 'next/image';
import basket from './assets/basket.png';
import walk from './assets/walk.png';
import jog from './assets/jog.png';
import Right from './assets/arrow-circle-right.svg';
import Left from './assets/arrow-circle-left.svg';
import Link from 'next/link';

interface Sport {
    image: StaticImageData;
    title: string;
    description: string;
}

const sports: Sport[] = [
    { image: basket, title: 'Keni Golf', description: 'Everything you need for any course.' },
    { image: walk, title: 'Keni Basketball', description: 'Styles made for your games.' },
    { image: jog, title: 'Keni Trail Running', description: 'Everything you need for adventure.' },
];

export default function Slides() {
    return (
        <section className={styles.container}>
            <div>
                <h2 className={styles.deadline}>Shop by Sport</h2>
                <div className={styles.arrow}>
                    <Image alt='Left Arrow' src={Left} />
                    <Image alt='Right Arrow' src={Right} />
                </div>
            </div>
            {sports.map(({ image, title, description }, index) => (
                <div key={index} className={styles.des}>
                    <Image alt={title} src={image} />
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.logo}>{description}</span>
                    <Link className={styles.containerLink} href='#'>Shop</Link>
                </div>
            ))}
        </section>
    );
}
