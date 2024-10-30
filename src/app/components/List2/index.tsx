
import Link from 'next/link';
import styles from './Footer.module.css';




export default function List() {
    return (
        <section className={styles.container}>
        <div>
        <h4 className={styles.containerTitle}>Featured</h4>
            <ul className={styles.containerList}>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Velocity</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Unbound</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Futurist</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Grace</Link>
                </li>
            </ul>

        </div>

        <div>
        <ul  className={styles.containerList}>
        <h4 className={styles.containerTitle}>Shoes</h4>
                <li>
                    <Link className={styles.containerLink} href={'#'}>All shoes</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Velocity Shoes</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Running Shoes</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Basketball Shoes</Link>
                </li>
            </ul>
            
        </div>


        <div>
        <ul  className={styles.containerList}>
        <h4 className={styles.containerTitle}>Clothing</h4>
                <li>
                    <Link className={styles.containerLink} href={'#'}>All Clothing</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Tops & T-Shirts</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Shorts</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Hoodies & Pullovers</Link>
                </li>
            </ul>
            
        </div>


        <div>
        <ul  className={styles.containerList}>
            <h4 className={styles.containerTitle}>Kids’</h4>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Infant & Toddler Shoes</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Kids’ Shoes</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Kids’ Basketball Shoes</Link>
                </li>
                <li>
                    <Link className={styles.containerLink} href={'#'}>Kids’ Running Shoes</Link>
                </li>
            </ul>
            
        </div>
        </section>
    );
}