import styles from './App.module.css';

import Header from './components/Header';
import Splash from './components/Splash';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Splash />
      <Footer />
    </div>
  );
}

export default App;
