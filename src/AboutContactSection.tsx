import React, { useState } from 'react';
import styles from './AboutContactSection.module.css';
import about from './assets/about.png'; // Import the image
import profile from './assets/profile.png'; // Import the image
import emailjs from 'emailjs-com';

const AboutContactSection: React.FC = () => {

    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);  // Disable the button when the email is being sent
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent!');
                setIsSending(false);  // Enable the button after the email is sent
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again later.');
                setIsSending(false);  // Enable the button if there is an error
            });
    };

    return (
        <section id="aboutcontact" className={styles.aboutcontactContainer}>
            <p className={styles.header}>
                <span>About </span>
                <span className={styles.yellowText}>ArtVista</span>
            </p>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <span className={styles.yellowText}>ArtVista</span> is an initiative from the <span className={styles.yellowText}>Technical University of Eindhoven</span> aimed at bridging the technology gap between the world of art and computer science, focusing on artificial intelligence.
                </div>
                <div className={styles.imageSection}>
                    <img src={about} alt="ArtVista initiative" />
                </div>
            </div>
            <p className={styles.header}>
                <span>Meet the </span>
                <span className={styles.yellowText}>Team</span>
            </p>
            <div className={styles.teamImagesContainer}>
                <div className={styles.teamImageContainer}>
                    <div className={styles.teamImage}>
                        <img src={profile} alt="Team Member 1" />
                    </div>
                    <p className={`${styles.teamText} ${styles.yellowText} ${styles.bigText}`}>Vlad Stoenescu</p>
                    <p className={`${styles.teamText} ${styles.bigText}`}>Front-End Lead</p>
                    <p className={styles.teamText}>Developing and designing the Front-End of ArtVista. </p>
                    <p className={styles.teamText}>MSc in Computer Science & Engineering from Technical University of Eindhoven </p>

                </div>
                <div className={styles.teamImageContainer}>
                    <div className={styles.teamImage}>
                        <img src={profile} alt="Team Member 2" />
                    </div>
                    <p className={`${styles.teamText} ${styles.yellowText} ${styles.bigText}`}>Tunahan Sari</p>
                    <p className={`${styles.teamText} ${styles.bigText}`}>AI & ML Lead</p>
                    <p className={styles.teamText}>Developing pattern recognition algorithms and establishing a scalable backend.</p>
                    <p className={styles.teamText}>2 years into High Tech industry in Eindhoven. </p>
                    <p className={styles.teamText}>BSc in Computer Science & Engineering from Technical University of Eindhoven</p>

                </div>
                <div className={styles.teamImageContainer}>
                    <div className={styles.teamImage}>
                        <img src={profile} alt="Team Member 3" />
                    </div>
                    <p className={`${styles.teamText} ${styles.yellowText} ${styles.bigText}`}>Taylan Ozgur Aygun</p>
                    <p className={`${styles.teamText} ${styles.bigText}`}>Business Lead</p>
                    <p className={styles.teamText}>Creating connections and bridging the gap between artists and technology.</p>
                    <p className={styles.teamText}>BSc in Electrical Engineering from Technical University of Eindhoven</p>

                </div>
            </div>

            <p className={styles.header}>
                <span>Contact </span>
                <span className={styles.yellowText}>Us</span>
            </p>
            <div className={styles.contactContainer}>
                <div className={styles.contactText}>
                    Send your message regarding the ArtVista App, Pattern Recognition API, or anything else! We will be replying to you ASAP!
                </div>
                <div className={styles.contactForm}>
                    <form onSubmit={sendEmail}>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Name" name="from_name" className={`${styles.inputField} ${styles.inputHalf}`} required />
                            <input type="text" placeholder="Surname" name="from_surname" className={`${styles.inputField} ${styles.inputHalf}`} required />
                        </div>
                        <div className={styles.formRow}>
                            <input type="text" placeholder="Your title (Artist, Manager, Developer, etc.)" name="title" className={styles.inputField} required />
                        </div>
                        <div className={styles.formRow}>
                            <input type="email" placeholder="Email" name="user_email" className={styles.inputField} required />
                        </div>
                        <div className={styles.formRow}>
                            <textarea placeholder="Your message" name="message" className={styles.textareaField} required></textarea>
                        </div>
                        <button type="submit" className={styles.inputField} disabled={isSending}>Send</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default AboutContactSection;
