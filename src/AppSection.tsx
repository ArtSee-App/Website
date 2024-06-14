import React from 'react';
import styles from './AppSection.module.css';
import androidLogo from './assets/android.png'; // Adjust the path as needed
import iosLogo from './assets/ios.png'; // Adjust the path as needed
import image1 from './assets/image1.png'; // Replace with the correct paths for the images
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import image9 from './assets/image9.png';
import scan from './assets/scan.png';
import discover from './assets/discover.png';
import connect from './assets/connect.png';

const AppSection: React.FC = () => {
    return (
        <section id="app" className={styles.appSection}>
            <div className={styles.mainContent}>
                <div className={styles.leftContent}>
                    The <span className={styles.highlight}>Art Companion</span> You Are Looking For
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.platform}>
                        <img src={androidLogo} alt="Android" className={styles.platformLogo} />
                        <button className={styles.soonButton}>Soon for Android</button>
                    </div>
                    <div className={styles.platform}>
                        <img src={iosLogo} alt="iOS" className={styles.platformLogo} />
                        <button className={styles.soonButton}>Soon for iOS</button>
                    </div>
                </div>
            </div>

            <div className={styles.imageContainer}>

                <img src={image1} alt="Art 1" className={`${styles.artImage} ${styles.artImage1}`} />
                <img src={image2} alt="Art 2" className={`${styles.artImage} ${styles.artImage2}`} />
                <img src={image3} alt="Art 3" className={`${styles.artImage} ${styles.artImage3}`} />
                <img src={image4} alt="Art 4" className={`${styles.artImage} ${styles.artImage4}`} />
                <img src={image5} alt="Art 5" className={`${styles.artImage} ${styles.artImage5}`} />
                <img src={image6} alt="Art 6" className={`${styles.artImage} ${styles.artImage6}`} />
                <img src={image7} alt="Art 7" className={`${styles.artImage} ${styles.artImage7}`} />
                <img src={image8} alt="Art 8" className={`${styles.artImage} ${styles.artImage8}`} />
                <img src={image9} alt="Art 9" className={`${styles.artImage} ${styles.artImage9}`} />
                <div className={styles.leftText}>
                    <span>Scan</span> and <span>identify artworks</span> instantly with your <span>camera!</span>
                </div>
                <div className={styles.rightText}>
                    <span>Explore</span> and <span>discover</span> art in a new way with the <span>ArtVista</span> app.
                </div>

            </div>
            <div className={styles.featuresImages}>
                <div className={styles.svgBackground}>
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M 0 5 Q 12.5 0 25 5 T 50 5 T 75 5 T 100 5 Q 87.5 10 75 5 T 50 5 T 25 5 T 0 5" fill="transparent" style={{ stroke: "var(--primary)", strokeWidth: "1" }} />
                    </svg>
                </div>
                <img src={scan} alt="Scan Artworks" className={styles.featureIcon} />
                <img src={discover} alt="Discover Art" className={styles.featureIcon} />
                <img src={connect} alt="Connect with Artists" className={styles.featureIcon} />
            </div>

            <div className={styles.footerText}>
                <span className={styles.footerItem}>Scan</span>
                <span className={styles.footerItem}>Discover</span>
                <span className={styles.footerItem}>Connect</span>
            </div>

            <div className={styles.footerText}>
                <span className={styles.footerDescriptionItem}>Simply scan the artwork in front of you to instantly retrieve all its details, instead of searching online.</span>
                <span className={styles.footerDescriptionItem}>Got a question about this artwork? Ask VistaGPT directly and skip the long texts for a quick answer.</span>
                <span className={styles.footerDescriptionItem}>Connect with artists, exhibitions, and museums. ArtVista ensures every artist is seen, bridging the gap between emerging talents and art enthusiasts.</span>
            </div>
            <div className={styles.bottomLine}></div>

        </section>
    );
};

export default AppSection;
