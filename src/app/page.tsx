import Off from './components/Off';
import NavBar from './components/NavBar';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     <Off/>
     <NavBar/>
    </div>
  );
}
