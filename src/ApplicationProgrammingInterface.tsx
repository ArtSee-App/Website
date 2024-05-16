import React from 'react';
import Header from './HeaderAPI';
import styles from './ApplicationProgrammingInterface.module.css';

const APIPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.leftSide}>
          <p className={styles.bigText}>Artwork Search <span className={styles.highlight}>API</span></p>
          <p className={styles.smallText}>Use <span className={styles.highlight}>ArtVista’s API</span> to find art pieces similar to a given image from a vast collection.</p>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.bigText}>How to use</p>
          <p className={styles.smallText}><span className={styles.highlight}>1.</span> <span className={styles.highlight}>Upload</span> a photo of a painting.</p>
          <p className={styles.smallText}><span className={styles.highlight}>2.</span> The API will try to crop the painting.</p>
          <p className={styles.smallText}><span className={styles.highlight}>3.</span> The most similar paintings to the cropped image will be retrieved.</p>
        </div>
      </div>
    </>
  );
};

export default APIPage;
