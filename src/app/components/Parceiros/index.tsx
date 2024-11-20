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



export default function Parceiros() {
  return (
    <>
      <section className={styles.parceiros}>
        <h2 className={styles.parceirosTitulo}>Marcas parceiras</h2>
        <div className={styles.listaParceiros} id={styles.containe}>
          <div>
            <Image src={petisco} alt="Petisco" />
          </div>
          <div>
            <Image src={pelos} alt="Pelos e patas" />
          </div>
          <div>
            <Image src={miaw} alt="Miaw" />
          </div>
          <div>
            <Image src={woofy} alt="Woofy" />
          </div>
          <div>
            <Image src={animalia} alt="Animalia" />
          </div>
          <div>
            <Image src={petstars} alt="Petstars" />

          </div>
          <div>
            <Image src={pet} alt="Pet Mania" />

          </div>
          <div>
            <Image src={rooster} alt="Rooster" />

          </div>
          <div>
            <Image src={bicudos} alt="Bicudos" />
          </div>
          <div>
            <Image src={corgi} alt="Corgi" />

          </div>
          <div>
            <Image src={mascot} alt="Mascot" />

          </div>
          <div>
            <Image src={amigo} alt="Amigo Fiel" />

          </div>
        </div>
      </section>
    </>

  )
}