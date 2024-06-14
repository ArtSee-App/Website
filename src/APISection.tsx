import React from 'react';
import styles from './APISection.module.css';
import { Link } from 'react-router-dom';
import image1 from './assets/apisection1.jpg';
import image2 from './assets/apisection2.jpg';

const APISection: React.FC = () => {
    return (
        <section id="api">
            <div className={styles.sectionContainer}>
                <div className={`${styles.textComponent} ${styles.textLarge}`}>
                    Artwork Search <span className={styles.highlight}>API</span>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.leftContent}>
                        <Link to="/api" className={styles.linkStyle}>
                            <div className={`${styles.textComponent} ${styles.textWhiteAndBold}`}>
                                Try out the Artwork Search API
                            </div>
                        </Link>
                        <div className={`${styles.textComponent} ${styles.textWhite}`}>Try it with your data, see the results & check out the research</div>
                    </div>
                    <div className={styles.rightContent}>
                        <img src={image1} alt="Example Image 1" className={styles.apiImage} />
                        <img src={image2} alt="Example Image 2" className={styles.apiImage2} />
                    </div>
                </div>

                <div className={`${styles.textComponent} ${styles.textMargin}`}>
                    Use ArtVista’s API to find art pieces similar to a given image from a vast collection. Visit the API page for benchmark results and options to use it on your data.
                </div>
                <div className={styles.bottomLine}></div>

            </div>


        </section>
    );
};

export default APISection;
