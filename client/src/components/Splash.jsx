import styles from './Splash.module.css';
import codingGIF from '../assets/CodingSplash1.gif';

const MAG_GLASS_WIDTH = 16;
const MAG_GLASS_HEIGHT = 16;

function MagGlassSVG({ sizeRatio = 1.0 }) {
  const width = MAG_GLASS_WIDTH * sizeRatio;
  const height = MAG_GLASS_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );
}

function SearchForm() {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <form className={styles.search_form_main} onSubmit={handleSubmit}>
      <input type="text" placeholder="Look for your next project..."></input>
      <button type="submit">
        <MagGlassSVG />
      </button>
    </form>
  );
}

function Splash() {
  return (
    <div className={styles.splash_body}>
      <img src={codingGIF} alt="Image of code running" />
      <div className={styles.splash_gif_foreground}>
        <h1>
          Connecting,
          <br /> one strand at a time
        </h1>
        <SearchForm />
      </div>
    </div>
  );
}

export default Splash;
