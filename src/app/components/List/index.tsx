
import Link from 'next/link';
import styles from './List.module.css';




export default function List() {
    return (
        <section className={styles.container}>
        <div>
        <h4>Featured</h4>
            <ul>
                <li>
                    <Link href={'#'}>Velocity</Link>
                </li>
                <li>
                    <Link href={'#'}>Unbound</Link>
                </li>
                <li>
                    <Link href={'#'}>Futurist</Link>
                </li>
                <li>
                    <Link href={'#'}>Grace</Link>
                </li>
            </ul>

        </div>

        <div>
        <ul>
        <h4>Shoes</h4>
                <li>
                    <Link href={'#'}>All shoes</Link>
                </li>
                <li>
                    <Link href={'#'}>Velocity Shoes</Link>
                </li>
                <li>
                    <Link href={'#'}>Running Shoes</Link>
                </li>
                <li>
                    <Link href={'#'}>Basketball Shoes</Link>
                </li>
            </ul>
            
        </div>


        <div>
        <ul>
        <h4>Clothing</h4>
                <li>
                    <Link href={'#'}>All Clothing</Link>
                </li>
                <li>
                    <Link href={'#'}>Tops & T-Shirts</Link>
                </li>
                <li>
                    <Link href={'#'}>Shorts</Link>
                </li>
                <li>
                    <Link href={'#'}>Hoodies & Pullovers</Link>
                </li>
            </ul>
            
        </div>


        <div>
        <ul>
            <h4>Kids’</h4>
                <li>
                    <Link href={'#'}></Link>
                </li>
                <li>
                    <Link href={'#'}></Link>
                </li>
                <li>
                    <Link href={'#'}></Link>
                </li>
                <li>
                    <Link href={'#'}></Link>
                </li>
            </ul>
            
        </div>
        </section>
    );
}