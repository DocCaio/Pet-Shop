import Off from './components/Off';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Performace from './components/Performace';
import styles from "./page.module.css";
import Slides from "./components/Slides";
import Slides2 from "./components/Slides2";
import Banner from './components/Banner';
import List from './components/List';

export default function Home() {
  return (
    <div className={styles.page}>      
     <Off/>
     <NavBar/>
     <main>
     <Hero/>
     <Performace/>
     <Slides/>
     <Slides2/>
     <Banner/>
     <List/>
     </main>
    </div>
  );
}
