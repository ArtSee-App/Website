import React from 'react';
import styles from './AppSection.module.css';
import androidLogo from './assets/android.png'; // Adjust the path as needed
import iosLogo from './assets/ios.png'; // Adjust the path as needed
import appinfo from './assets/appinfo.png'; // Import the image

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
            <img src={appinfo} alt="Additional Visual" className={styles.additionalImage} />
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
