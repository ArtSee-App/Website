import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: 'var(--background)', color: 'var(--text)' }}>
            <p>
                © 2024 Vista Technologies B.V. All rights reserved.
                <a href="https://doc-hosting.flycricket.io/artvista-terms-and-conditions/498c1a9c-ad38-45d9-b9ca-c850a7058bb7/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                    Terms and Conditions
                </a>
            </p>
        </footer>
    );
}

export default Footer;
