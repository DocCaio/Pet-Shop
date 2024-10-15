
import styles from './NavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './assets/logo.png';



export default function NavBar() {
    return (
        <section className={styles.container}>
            <div>
                <Image alt='Logo' src={Logo} />
                <span>Dev sportware</span>
            </div>

            <div>
                <ul className={styles.list}>
                    <li>
                        <Link className={styles.link} href={"#"}> NEWS & FEATURES</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href={"#"}> Men</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href={"#"}>Women</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href={"#"}>Kids</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href={"#"}>ACCESSORIES</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href={"#"}>Sale</Link>
                    </li>
                </ul>


            </div>


            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>


                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
            </div>
        </section>
    );
}