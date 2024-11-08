import styles from './Offs.module.css'

export default function () {

    return (
        <>
        <section className={styles.ofertas}>
      <h2 className={styles.ofertasTitulo}>Super ofertas:</h2>

      <div className={styles.container}>
        <ul className={styles.carrossel}>
          <li className={styles.carrosselItem}>
            <img className={styles.carrosselImagem}  src="./assets/imagens/biskrock.png" alt="Biscoito Pedigree Biscrok" />
            <h3 className={styles.carrosselNome}>Biscoito Pedigree Biscrok</h3>
            <p className={styles.carrosselDescricao}>Multi para Cães Adultos 500g</p>
            <span className={styles.carrosselPreco}>R$ 19,99</span>
          </li>
          <li className={styles.carrosselItem}>
            <img className={styles.carrosselImagem} src="./assets/imagens/golden-especial.png" alt="Ração Golden Special" />
            <h3 className={styles.carrosselNome}>Ração Golden Special</h3>
            <p className={styles.carrosselDescricao}>
              Cães Adultos Sabor Frango e Carne 15kg
            </p>
            <span className={styles.carrosselPreco}>R$ 149,00</span>
          </li>
          <li className={styles.carrosselItem}>
            <img className={styles.carrosselImagem} src="./assets/imagens/pipicat.png" alt="Areia Higiênica Pipicat" />
            <h3 className={styles.carrosselNome}>Areia Higiênica Pipicat</h3>
            <p className={styles.carrosselDescricao}>Classic para Gatos 4 Kg</p>
            <span className={styles.carrosselPreco}>R$ 45,00</span>
          </li>
          <li className={styles.carrosselItem}>
            <img className={styles.carrosselImagem} src="./assets/imagens/arranhador.png" alt="Arranhador São Benedito Pet" />
            <h3 className={styles.carrosselNome}>Arranhador São Benedito Pet</h3>
            <p className={styles.carrosselDescricao}>Redondo com pluma e mola rosa</p>
            <span className={styles.carrosselPreco}>R$ 59,90</span>
          </li>
          <div className={styles.carrosselButton}>
            <button className={styles.carrosselNav}>←</button>
            <button className={styles.carrosselNav}>→</button>
          </div>
        </ul>
      </div>
    </section>
        
        </>
    )
}