
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Plains from './components/Plains';
import Offs from './components/Offs';
import Parceiros from './components/Parceiros';
import Newsletter from './components/Newsletter';
import Base from './components/Base';




import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>

      <NavBar />
      <main>
        <Hero />
        <Services />
        <Plains />
        <Offs />
        <Parceiros />
        <Newsletter />
      </main>
      <Base />
      
    </div>
  );
}
