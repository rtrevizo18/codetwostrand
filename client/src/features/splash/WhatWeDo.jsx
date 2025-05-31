import styles from './WhatWeDo.module.css';
import { useState } from 'react';
import { DesktopSVG, CodeSVG, LightbulbSVG, PersonSVG } from './svgs/Svg';

const SIZERATIO = 3.0;

function SoftwareSolutions() {
  return <div>Hey</div>;
}

function WhatWeDo() {
  const [cardState, updateCardState] = useState(0);
  return (
    <div className={styles.what_we_provide}>
      <h2>What We Provide</h2>
      <div className={styles.what_we_provide_cards}>
        <div className={styles.what_we_provide_card}>
          <LightbulbSVG sizeRatio={SIZERATIO} />
          <div>Any software idea!</div>
        </div>
        <div className={styles.what_we_provide_card}>
          <CodeSVG sizeRatio={SIZERATIO} />
          <div>Help with Coding?</div>
        </div>
        <div className={styles.what_we_provide_card}>
          <DesktopSVG sizeRatio={SIZERATIO} />
          <div>IT Work, remote or in-person</div>
        </div>
        <div className={styles.what_we_provide_card}>
          <PersonSVG sizeRatio={SIZERATIO} />
          <div>Let us know, we might just be able to help!</div>
        </div>
      </div>
      <SoftwareSolutions />
    </div>
  );
}

export default WhatWeDo;
