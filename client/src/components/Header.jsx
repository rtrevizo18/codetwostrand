import styles from './Header.module.css';
import LogoSVG from './Logo';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.header_logo}>
          <button>
            <LogoSVG sizeRatio={0.4} />
          </button>
          <button>
            <div className={styles.header_title}>Code2Strand</div>
          </button>
        </div>
        <a href="">Support</a>
        <a href="">Projects</a>
        <a href="">Links</a>
        <a href="">Links</a>
      </nav>
      <div className={styles.header_buttons}>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    </header>
  );
}

export default Header;
