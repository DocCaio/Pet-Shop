import styles from './NavBar.module.css';
import Image from 'next/image';
import Logo from '../../assets/logo.png';
import Login from '../../assets/icones/login.png';
import Link from 'next/link';

export default function NavBar() {
    return (
    <>      
    <header className={styles.cabecalho}>
    <div className={styles.alinhamentoCabecalho} id={styles.container}>
      <Image src={Logo}  alt="Logotipo do Petpark"/>     
      <label className={styles.labelBusca}>
        <input className={styles.inputBusca} type="text" name="campo-busca" placeholder="O que você procura?" />
        <div className={styles.iconeBusca}>
          <div></div>
        </div>
      </label>
      <button className={styles.botaoLogin}>
      <Image src={Login} alt="ícone de login"/> 
        Login/Cadastro
      </button>
    </div>
    <nav className={styles. navegacao} id={styles.container}>
      <ul className={styles.menuLista}>
        <li className= {styles.menuItem}>
          <Link className={styles.menuLink} href="#">Raça</Link>        
        </li>
        <li className= {styles.menuItem}>
        <Link className={styles.menuLink} href="#">Planos Pet</Link>           
        </li>
        <li className= {styles.menuItem}>
        <Link className={styles.menuLink} href="#">Serviços</Link>      
        </li>
        <li className= {styles.menuItem}>
        <Link className={styles.menuLink} href="#">Sobre nós</Link>      
        </li>
        <li className= {styles.menuItem}>
        <Link className={styles.menuLink} href="#">Clube de descontos</Link> 
       
        </li>
      </ul>
    </nav>
  </header>
      
  
  
  </>  
    );
  }
  