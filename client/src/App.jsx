import styles from './App.module.css';

import Header from './components/Header';
import Splash from './features/splash/Splash';
import AboutUs from './features/aboutus/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <Splash />
      </main>
      <Footer />
    </div>
  );
}

export default App;
