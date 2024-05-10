import React from 'react';
import logo from './assets/logo.jpg'; // Assuming the logo is stored here
import styles from './Header.module.css';

interface HeaderProps {
    scrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <span>ArtVista</span>
            </div>
            <div className={styles.headerRight}>
                <button onClick={() => scrollTo("app")}>App</button>
                <button onClick={() => scrollTo("api")}>API</button>
                <button onClick={() => scrollTo("roadmap")}>Roadmap</button>
                <button onClick={() => scrollTo("updates")}>Updates</button>
                <button onClick={() => scrollTo("aboutcontact")}>About & Contact Us</button>
            </div>
        </div>
    );
};

export default Header;
