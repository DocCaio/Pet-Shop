import styles from './Performace.module.css'
import Image from 'next/image'
import Shoe from './assets/performace.png'





export default function Performace() {

    return (
        <section className={styles.performace}>
            <div>
                <Image alt='Men' src={Shoe} />
                <div>
                    <h2>Redefining Athletic Performance</h2>
                    <span>
                        Unmatched Comfort -
                        Experience the perfect blend of comfort and
                        flexibility with our innovative cushioning technology
                    </span>

                    <span>
                        Superior Design -
                        Stand out with our sleek, modern, and futuristic shoe designs
                        that turn heads wherever you go.
                    </span>

                    <span>
                        Durability and Quality -
                        Crafted from high-quality materials, our shoes are
                        designed to last, supporting your athletic pursuits over the long haul.
                    </span>
                </div>

            </div>
        </section>
    )




}