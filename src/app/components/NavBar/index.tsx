import styles from './NavBar.module.css'

export default function NavBar() {
    return (
    <>      
    <header className={styles.cabecalho}>
    <div className={styles.alinhamentoCabecalho} id={styles.container}>
      <img src="./assets/logo.png" alt="Logotipo do Petpark" />
      <label className={styles.labelBusca}>
        <input className={styles.inputBusca} type="text" name="campo-busca" placeholder="O que você procura?" />
        <div className={styles.iconeBusca}>
          <div></div>
        </div>
      </label>
      <button className={styles.botaoLogin}>
        <img className={styles.iconeLogin} src="./assets/icones/login.png" alt="ícone de login" />
        Login/Cadastro
      </button>
    </div>
    <nav className={styles. navegacao} id={styles.container}>
      <ul className="menu-lista">
        <li className="menu-item">
          <a className={styles.menuLink} href="#">Raças</a>
        </li>
        <li className="menu-item">
          <a className={styles.menuLink}  href="#">Planos Pet</a>
        </li>
        <li className="menu-item">
          <a className={styles.menuLink}  href="#">Serviços</a>
        </li>
        <li className="menu-item">
          <a className={styles.menuLink}  href="#">Sobre nós</a>
        </li>
        <li className="menu-item">
          <a className={styles.menuLink}  href="#">Clube de descontos</a>
        </li>
      </ul>
    </nav>
  </header>
      
  
  
  </>  
    );
  }
  