import styles from './Header.module.css';
import LogoSVG from './Logo';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <button>
          <LogoSVG sizeRatio={0.4} />
        </button>
        <button>
          <div className={styles.header_title}>Code2Strand</div>
        </button>
      </div>
      <nav>
        <div className={styles.nav_links}>
          <a href="">Support</a>
          <a href="">Projects</a>
          <a href="">Links</a>
          <a href="">Links</a>
        </div>
        <div className={styles.nav_buttons}>
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
