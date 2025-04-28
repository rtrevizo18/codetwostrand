import styles from './App.module.css';

import Header from './components/Header';
import Splash from './components/Splash';

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Splash />
    </div>
  );
}

export default App;
