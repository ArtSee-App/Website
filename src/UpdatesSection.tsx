import React from 'react';
import styles from './UpdatesSection.module.css';
import blog1 from './assets/blog1.png';
import blog2 from './assets/blog2.png';
import blog3 from './assets/blog3.png';
import blog4 from './assets/blog4.png';

const content = [
    {
        image: blog1,
        lineOne: "Learn more of the ArtVista App",
        lineTwo: "See a detailed plan of the ArtVista app and its core technologies on this blog.",
    },
    {
        image: blog2,
        lineOne: "Pattern Search API for Businesses",
        lineTwo: "Search your data for images, logos, and objects quickly with our pre-trained model. No YOLOs or CNNs needed! See this blog for further details.",
    },
    {
        image: blog3,
        lineOne: "ArtVista Portal for Artists, Curators, Exhibitions and Museums",
        lineTwo: "Discover which of your artworks are most popular, the views they receive, and the questions asked, all through our detailed data insights service. Free for artists, with fees for larger collections. Launching by the end of 2024!",
    },
    {
        image: blog4,
        lineOne: "Pattern Search API for Businesses",
        lineTwo: "Search your data for images, logos, and objects quickly with our pre-trained model. No YOLOs or CNNs needed! See this blog for further details.",
    }
];

const UpdatesSection: React.FC = () => {
    return (
        <section id="updates" className={styles.updatesSection}>
            <h2 className={styles.headingText}>Blog & More Information</h2>
            <div className={styles.bottomLine}></div>
            <div className={styles.rectangleContainer}>
                {content.map((item, index) => (
                    <div key={index} className={styles.rectangle}>
                        <img src={item.image} alt="Description" className={styles.rectangleImage} />
                        <p className={`${styles.rectangleText} ${styles.yellowText}`}>{item.lineOne}</p>
                        <p className={styles.rectangleText}>{item.lineTwo}</p>
                    </div>
                ))}
            </div>
            <div className={styles.viewAllUpdatesLink}>
                <p className={styles.viewAllUpdatesText}>View all updates</p>
            </div>

        </section>
    );
};

export default UpdatesSection;
