import styles from './App.module.css';

import Header from './components/Header';
import Splash from './components/Splash';
import AboutUs from './components/AboutUs';
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
