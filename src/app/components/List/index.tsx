
import Link from 'next/link';
import styles from './List.module.css';




export default function List() {
    return (
        <section className={styles.container}>
        <div>
        <h4>Featured</h4>
            <ul>
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
        <ul>
        <h4>Shoes</h4>
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
        <ul>
        <h4>Clothing</h4>
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
        <ul>
            <h4>Kids’</h4>
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