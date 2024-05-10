import React from 'react';
import styles from './RoadmapSection.module.css';
import tue from './assets/tue.png'; // Adjust the path as needed
import release from './assets/release.png'; // Import the image

const RoadmapSection: React.FC = () => {
    return (
        <section id="roadmap" className={styles.roadmapContainer}>
            <div className={styles.textContainer}>
                <div className={styles.titleText}>
                    ArtVista’s <span className={styles.highlight}>RoadMap</span>
                </div>
                <div className={styles.descriptionText}>
                    Here we showcase the current planning of <span className={styles.highlight}>ArtVista</span>. You can see the upcoming events we will be attending!
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={tue} alt="Event One" className={styles.ovalImage} />
                <img src={release} alt="Event Two" className={styles.ovalImage} />
            </div>

            <div className={styles.lineWithCircles}>
                <div className={`${styles.circle} ${styles.left}`}></div>
                <div className={`${styles.circle} ${styles.right}`}></div>
            </div>
            <div className={styles.textRow}>
                <p className={`${styles.textSegment} ${styles.centerBlackText}`}>
                    TU/e Contest Final Presentation
                </p>
                <p className={`${styles.textSegment} ${styles.centerBlackText}`}>
                    ArtVista App Release Date
                </p>
            </div>

            <div className={styles.textRow}>
                <p className={`${styles.textSegment} ${styles.centerText}`}>
                    20-06-24
                </p>
                <p className={`${styles.textSegment} ${styles.centerText}`}>
                    01-07-24
                </p>
            </div>

            <div className={styles.textRow}>
                <p className={`${styles.textSegment} ${styles.centerGrayText}`}>
                    “ArtVista is an initiative by TU/e students, and there is no better place to find support for this project than at TU/e. We hope to present our project to a wide audience and possibly secure funding for its future. Thus, we are showcasing ArtVista’s vision, design, and technology at the TU/e Contest.”
                </p>
                <p className={`${styles.textSegment} ${styles.centerGrayText}`}>
                    “We understand the various demands from art enthusiasts, artists, exhibitions, curators, and museums, and we are working hard to meet them. Our first product, the ArtVista app, will soon be launched on the Google Play Store and the App Store.”
                </p>
            </div>

            <div className={styles.bottomLine}></div>


        </section>
    );
};

export default RoadmapSection;
