import styles from './Splash.module.css';
import codingGIF from '../../assets/CodingSplash.gif';
import { MagGlassSVG } from './svgs/Svg';

//Component imports
import WhatWeDo from './WhatWeDo';

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
