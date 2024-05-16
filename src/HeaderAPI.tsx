import React from 'react';
import logo from './assets/logo.jpg'; // Assuming the logo is stored here
import styles from './HeaderAPI.module.css';
import { FaHome } from 'react-icons/fa'; // Import the house icon
import { Link } from 'react-router-dom'; // Import Link


const HeaderAPI: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <span>ArtVista</span>
            </div>
            <div className={styles.headerRight}>
                <Link to="/" title="Home">
                    <FaHome size={24} style={{ color: 'white' }} />
                </Link>
            </div>
        </div>
    );
};

export default HeaderAPI;
