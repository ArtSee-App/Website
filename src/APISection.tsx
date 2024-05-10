import React from 'react';
import styles from './APISection.module.css';

const APISection: React.FC = () => {
    return (
        <section id="api">
            <h1>APISection</h1>
            <p>Details about the app...</p>
            <div className={styles.bottomLine}></div> 
        </section>
    );
};

export default APISection;
