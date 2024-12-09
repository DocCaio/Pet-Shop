import styles from './Parceiros.module.css';
import Image from 'next/image';
import petisco from '../../assets/imagens/petisco.png';
import pelos from '../../assets/imagens/pelos-e-patas.png';
import miaw from '../../assets/imagens/miaw.png';
import woofy from '../../assets/imagens/wooofy.png';
import animalia from '../../assets/imagens/animalia.png';
import petstars from '../../assets/imagens/petstars.png';
import pet from '../../assets/imagens/pet-mania.png';
import rooster from '../../assets/imagens/rooster.png';
import bicudos from '../../assets/imagens/bicudos.png';
import corgi from '../../assets/imagens/corgi.png';
import mascot from '../../assets/imagens/mascot.png';
import amigo from '../../assets/imagens/amigo-fiel.png';

// Adjusting the type to accept StaticImageData instead of just string
import { StaticImageData } from 'next/image';

type PartnerImage = {
  src: StaticImageData; // Use StaticImageData instead of string
  alt: string;
};

const partnerImages: PartnerImage[] = [
  { src: petisco, alt: 'Petisco' },
  { src: pelos, alt: 'Pelos e patas' },
  { src: miaw, alt: 'Miaw' },
  { src: woofy, alt: 'Woofy' },
  { src: animalia, alt: 'Animalia' },
  { src: petstars, alt: 'Petstars' },
  { src: pet, alt: 'Pet Mania' },
  { src: rooster, alt: 'Rooster' },
  { src: bicudos, alt: 'Bicudos' },
  { src: corgi, alt: 'Corgi' },
  { src: mascot, alt: 'Mascot' },
  { src: amigo, alt: 'Amigo Fiel' },
];

export default function Parceiros() {
  return (
    <section className={styles.parceiros}>
      <h2 className={styles.parceirosTitulo}>Marcas parceiras</h2>
      <div className={styles.listaParceiros} id={styles.container}>
        {partnerImages.map((partner, index) => (
          <div key={index}>
            <Image src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
