import Off from './components/Off';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Performace from './components/Performace'
import styles from "./page.module.css";
import Slides from "./components/Slides";

export default function Home() {
  return (
    <div className={styles.page}>
     <Off/>
     <NavBar/>
     <Hero/>
     <Performace/>
     <Slides/>
    </div>
  );
}
