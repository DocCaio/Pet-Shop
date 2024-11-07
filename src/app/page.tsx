
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Plains from './components/Plains';

import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>

      <NavBar />
      <main>
        <Hero />
        <Services />
        <Plains />

      </main>



    </div>
  );
}
