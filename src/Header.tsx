import React, { useState } from 'react';
import logo from './assets/logo.jpg'; // Assuming the logo is stored here
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa'; // You need to install react-icons if you haven't

interface HeaderProps {
    scrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <span>ArtVista</span>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <FaBars />
            </div>
            <div className={`${styles.headerRight} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <button onClick={() => { scrollTo("app"); toggleMenu(); }}>App</button>
                <button onClick={() => { scrollTo("api"); toggleMenu(); }}>API</button>
                <button onClick={() => { scrollTo("roadmap"); toggleMenu(); }}>Roadmap</button>
                <button onClick={() => { scrollTo("updates"); toggleMenu(); }}>Updates</button>
                <button onClick={() => { scrollTo("aboutcontact"); toggleMenu(); }}>About & Contact Us</button>
            </div>
        </div>
    );
};

export default Header;
