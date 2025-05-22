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

const DESKTOP_WIDTH = 16;
const DESKTOP_HEIGHT = 16;

function DesktopSVG({ sizeRatio = 1.0 }) {
  const width = DESKTOP_WIDTH * sizeRatio;
  const height = DESKTOP_HEIGHT * sizeRatio;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      class="bi bi-pc-display"
      viewBox="0 0 16 16">
      <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z" />
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

function WhatWeDo() {
  return (
    <div className={styles.what_we_provide}>
      <h2>What We Provide</h2>
      <div className={styles.what_we_provide_cards}>
        <div>
          <DesktopSVG sizeRatio={3.0} />
          <div>note</div>
        </div>
        <div>
          <img></img>
          <div>note</div>
        </div>
        <div>
          <img></img>
          <div>note</div>
        </div>
        <div>
          <img></img>
          <div>note</div>
        </div>
      </div>
    </div>
  );
}

function Splash() {
  return (
    <>
      <div className={styles.splash_body_main}>
        <img src={codingGIF} alt="Image of code running" />
        <div className={styles.splash_gif_foreground}>
          <h1>
            Connecting,
            <br /> one strand at a time
          </h1>
          <SearchForm />
        </div>
      </div>
      <WhatWeDo />
    </>
  );
}

export default Splash;
