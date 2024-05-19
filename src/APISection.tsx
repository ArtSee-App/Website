import React, { useState } from 'react';
import styles from './APISection.module.css';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import { FaCamera } from 'react-icons/fa'; // Import the camera icon
import { Link } from 'react-router-dom';

const APISection: React.FC = () => {
    const [image] = useState<string | null>(null);
    return (
        <section id="api">
            <div className={styles.sectionContainer}>
                <div className={`${styles.halfWidth} ${styles.halfWidthLeft}`}>
                    <div className={`${styles.textComponent} ${styles.textLarge}`}>Artwork Search <span className={styles.highlight}>API</span></div>
                    <div className={`${styles.textComponent} ${styles.apiDescription}`}>Use <span className={styles.highlight}>ArtVista’s API</span> to find art pieces similar to a given image from a vast collection. Visit the API page for benchmark results and options to use it on your data.</div>
                    <div className={`${styles.textComponent} ${styles.textWithIcon}`}>
                        <Link to="/api">
                            <FaArrowRight className={styles.icon} />Try the demo
                        </Link>
                    </div>
                    <div className={`${styles.textComponent} ${styles.textWithIcon}`}><FaArrowRight className={styles.icon} />Use your data</div>
                    <div className={`${styles.textComponent} ${styles.textWithIcon}`}><FaArrowRight className={styles.icon} />Benchmarks & Research: 99.2% on WikiArt Dataset (1.4M classes)</div>
                </div>
                <div className={`${styles.halfWidth} ${styles.halfWidthRight}`}>
                    {image ? (
                        <img src={image} alt="Uploaded Image" style={{ maxWidth: "100%", height: "auto", borderRadius: "10%" }} />
                    ) : (
                        <FaCamera className={styles.cameraIcon} size="10em" />
                    )}
                    <label className={styles.imageUploadButton}>
                        Input image
                    </label>
                </div>
            </div>
            <div className={styles.bottomLine}></div>

        </section>
    );
};

export default APISection;
