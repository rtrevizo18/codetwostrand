import styles from './Splash.module.css';
import codingGIF from '../../assets/CodingSplash.gif';
import {
  MagGlassSVG,
  DesktopSVG,
  CodeSVG,
  LightbulbSVG,
  PersonSVG
} from './svgs/Svg';

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

const SIZERATIO = 3.0;

function CodingSolutions() {
  return <div>Hey</div>;
}

function WhatWeDo() {
  return (
    <div className={styles.what_we_provide}>
      <h2>What We Provide</h2>
      <div className={styles.what_we_provide_cards}>
        <div className={styles.what_we_provide_card}>
          <DesktopSVG sizeRatio={SIZERATIO} />
          <div>IT Work, remote or in-person</div>
        </div>
        <div className={styles.what_we_provide_card}>
          <CodeSVG sizeRatio={SIZERATIO} />
          <div>Coding solutions, for our own</div>
        </div>
        <div className={styles.what_we_provide_card}>
          <LightbulbSVG sizeRatio={SIZERATIO} />
          <div>Any software idea!</div>
        </div>
        <div className={styles.what_we_provide_card}>
          <PersonSVG sizeRatio={SIZERATIO} />
          <div>Let us know, we might just be able to help!</div>
        </div>
      </div>
      <CodingSolutions />
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
