import styles from './Plains.module.css';
import Image from 'next/image';
import pata from '../../assets/imagens/pata-de-ouro.png';
import amigo from '../../assets/imagens/amiguinho.png';
import cheiro from '../../assets/imagens/cheirosinho.png';

export default function Plains() {

  return (
    <>
      <section className={styles.planos}>
        <div className={styles.planosBackground} id={styles.container}>
          <h2 className={styles.planosTitulo}>Planos mensais para seu pet</h2>
          <div className={styles.listaPlanos}>
            <div className={styles.cartao}>
              <Image className={styles.planosImagem} src={cheiro}
                alt="Cachorrinho com um patinho de borracha cor de rosa na cabeça" />

              <h3>Cheirosinho</h3>
              <p>
                Banho, tosa e corte de unhas 2x ao mês! O pacote econômico
                essencial para o bem-estar do seu pet! Não inclui coleta.
              </p>
              <span>R$ 80</span>
              <button className={styles.botaoCompra}>Assinar plano</button>
            </div>
            <div className={styles.cartao}>
              <Image className={styles.planosImagem} src={amigo} alt="Gato cinza" />
              <h3>Amigo Fiel</h3>
              <p>
                Mais conforto para seu amigo! Banho, tosa, corte de unhas 2x ao
                mês, 1 consulta veterinária e busca em domicílio!
              </p>
              <span>R$ 120</span>
              <button className={styles.botaoCompra}>Assinar plano</button>
            </div>
            <div className={styles.cartao}>
              <Image className={styles.planosImagem} src={pata} alt="Cachorro com uma argola roxa na boca" />
              <h3>Pata de Ouro</h3>
              <p>
                Seu amigo merece o mundo! Banho, tosa e unhas 3x ao mês, 1
                consulta veterinária, busca em domicílio e adestramento!
              </p>
              <span>R$ 250</span>
              <button className={styles.botaoCompra}>Assinar plano</button>
            </div>
          </div>
        </div>
      </section>


    </>

  )
}