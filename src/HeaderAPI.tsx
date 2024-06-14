import React, { useEffect } from 'react';
import logo from './assets/logo.jpg'; // Assuming the logo is stored here
import styles from './HeaderAPI.module.css';
import {FaSun, FaMoon } from 'react-icons/fa'; // Adding FaSun and FaMoon
import { Link } from 'react-router-dom'; // Import Link

interface HeaderProps {
    toggleTheme: () => void;
    theme: string;
}

const HeaderAPI: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {

    useEffect(() => {
        const element = document.getElementById('scroll');
        element?.scrollIntoView();
    }, []);

    return (
        <div className={styles.header} id="scroll">
            <div className={styles.contentContainer}>
                <div className={styles.headerLeft}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <span>ArtVista</span>
                    <button onClick={toggleTheme} className={styles.themeToggle}>
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <div className={styles.headerRight}>
                    <Link to="/" title="Home">
                        <button className={styles.linkButton}>
                            Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderAPI;
