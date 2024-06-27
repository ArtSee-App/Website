import React, { useState } from 'react';
import logo from './assets/logo.jpg'; // Assuming the logo is stored here
import styles from './Header.module.css';
import { FaBars, FaSun, FaMoon, FaTimes } from 'react-icons/fa'; // Import FaTimes

interface HeaderProps {
    scrollTo: (id: string) => void;
    toggleTheme: () => void;
    theme: string;  // Add this line to indicate the current theme
}

const Header: React.FC<HeaderProps> = ({ scrollTo, toggleTheme, theme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.header}>
            <div className={styles.contentContainer}>
                <div className={styles.headerLeft}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <span>ArtVista</span>
                    <button onClick={toggleTheme} className={styles.themeToggle}>
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                </div>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <FaBars className={`${styles.transitionIcon} ${isMenuOpen ? styles.hideIcon : ''}`} />
                    <FaTimes className={`${styles.transitionIcon} ${!isMenuOpen ? styles.hideIcon : ''}`} />
                </div>
                <div className={`${styles.headerRight} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    <button onClick={() => { scrollTo("app"); toggleMenu(); }}>App</button>
                    <button onClick={() => { scrollTo("api"); toggleMenu(); }}>API</button>
                    <button onClick={() => { scrollTo("roadmap"); toggleMenu(); }}>Roadmap</button>
                    <button onClick={() => { scrollTo("updates"); toggleMenu(); }}>Updates</button>
                    <button onClick={() => { scrollTo("aboutcontact"); toggleMenu(); }}>About & Contact Us</button>
                </div>
            </div>
        </div>

    );
};

export default Header;
