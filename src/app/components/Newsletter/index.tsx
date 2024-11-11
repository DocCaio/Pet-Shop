import styles from './Newsletter.module.css';

export default function Newsletter() {
 return (
    <>
      <section className={styles.newsletter}>
      <h2>Assine nossa newsletter!</h2>
      <p>Cadastre-se e receba nossas promoções e novidades!</p>
      <form className={styles.formulario}>
        <label >
          <input type="email" id={styles.email} className={styles.formularioInput} placeholder="Insira seu melhor email" required />
        </label>
        <div className={styles.grupoOpcoes}>
          <span>Selecione seu pet:</span>
          <label   className={styles.opcao}>
            <input type="checkbox" id={styles.gato} name="pet" value="gato" /> Gato
            <span></span>
          </label>
          <label   className={styles.opcao}>
            <input type="checkbox" id={styles.cao} name="pet" value="cao" /> Cão
            <span></span>
          </label>
          <label   className={styles.opcao}>
            <input type="checkbox" id={styles.roedor} name="pet" value="roedor" />
            <span></span> Roedor
          </label>
          <label  className={styles.opcao}>
            <input type="checkbox" id={styles.outros} name="pet" value="outros" />
            <span></span> Outros
          </label>
        </div>
        <button type="submit" className={styles.botaoEnviar}>Inscrever</button>
      </form>
    </section>
    </>
 )

}