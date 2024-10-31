import styles from './Performace.module.css';
import Image from 'next/image';
import Shoe from './assets/performace.png';
import Link from 'next/link';

import Item1 from './assets/Ellipse1.svg';
import Item2 from './assets/Ellipse2.svg';
import Item3 from './assets/Ellipse3.svg';
import Item4 from './assets/Ellipse4.svg';
import Item5 from './assets/Ellipse5.svg';
import Item6 from './assets/Ellipse6.svg';

// Define a type for product items
interface ProductItemProps {
    img: string;
    description: string;
}

const products = {
    men: [
        { img: Item1, description: "Exhibit your speed and agility with our 'Velocity' sports shoes." },
        { img: Item2, description: "Unleash your potential with the groundbreaking 'Unbound' running shoes." },
        { img: Item3, description: "Step into the future with our most advanced model, the 'Futurist'." },
    ],
    women: [
        { img: Item4, description: "Embrace comfort and style with our 'Grace' sports shoes." },
        { img: Item5, description: "Break free from the limits with our innovative 'Liberate' running shoes." },
        { img: Item6, description: "Experience the future of sports footwear with our 'Futurist' model." },
    ]
};

const ProductItem = ({ img, description }: ProductItemProps) => (
    <div className={styles.product}>
        <Image className={styles.performanceImg} alt={description} src={img} />
        <div className={styles.des}>
        <span>{description}</span>
        <Link className={styles.link} href={"#"}>See product</Link>
        </div>
        
    </div>
);

export default function Performace() {
    return (
        <section className={styles.performace}>
            <div>
                <Image className={styles.performanceImg} alt='Performance Shoe' src={Shoe} />
                <div>
                    <h2>Redefining Athletic Performance</h2>
                    <span>Unmatched Comfort - Experience the perfect blend of comfort and flexibility with our innovative cushioning technology.</span>
                    <span>Superior Design - Stand out with our sleek, modern, and futuristic shoe designs that turn heads wherever you go.</span>
                    <span>Durability and Quality - Crafted from high-quality materials, our shoes are designed to last, supporting your athletic pursuits over the long haul.</span>
                </div>
                <Link className={styles.link} href={"#"}>Learn more</Link>
            </div>

            {Object.entries(products).map(([gender, items]) => (
                <div className={styles.teste} key={gender}>
                    <h3>{gender.charAt(0).toUpperCase() + gender.slice(1)}</h3>
                    {items.map((item, index) => (
                        <ProductItem key={index} {...item} />
                    ))}
                </div>
            ))}
        </section>
    );
}
