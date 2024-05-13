import React, { useState } from 'react';
import styles from './APISection.module.css';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import { FaCamera } from 'react-icons/fa'; // Import the camera icon

const APISection: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [artwork, setArtwork] = useState({ artist: '', title: '', image_url: '' });
    const [isLoading, setIsLoading] = useState(false); // State to track loading status
    const [errorMessage, setErrorMessage] = useState('');

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            // Check for file type
            const validTypes = ['image/jpeg', 'image/png'];
            if (!validTypes.includes(file.type)) {
                setErrorMessage('Invalid file type. Please upload an image (JPG or PNG).');
                setImage(null);
                setIsLoading(false);
                return; // Stop further processing
            }

            setIsLoading(true);
            setErrorMessage(''); // Clear any previous error messages
            const reader = new FileReader();
            reader.onload = (ev: ProgressEvent<FileReader>) => {
                if (ev.target) {
                    setImage(ev.target.result as string);
                }
            };
            reader.readAsDataURL(file);

            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('https://api.artvista.app/image_search/', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(data);
                if (data.result) {
                    setArtwork({
                        artist: data.result.artist,
                        title: data.result.title,
                        image_url: data.result.image_url
                    });
                } else {
                    setArtwork({ artist: '', title: '', image_url: '' }); // Reset artwork if no valid result
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error uploading image:', error);
                setIsLoading(false);
            }
        }
    };

    return (
        <section id="api">
            <div className={styles.sectionContainer}>
                <div className={`${styles.halfWidth} ${styles.halfWidthLeft}`}>
                    <div className={`${styles.textComponent} ${styles.textLarge}`}>Artwork Search <span className={styles.highlight}>API</span></div>
                    <div className={styles.textComponent}>Use <span className={styles.highlight}>ArtVista’s API</span> to find art pieces similar to a given image from a vast collection. Visit the API page for benchmark results and options to use it on your data.</div>
                    <div className={`${styles.textComponent} ${styles.textWithIcon}`}><FaArrowRight className={styles.icon} />Try the demo</div>
                    <div className={`${styles.textComponent} ${styles.textWithIcon}`}><FaArrowRight className={styles.icon} />Use your data</div>
                    <div className={`${styles.textComponent} ${styles.textWithIcon}`}><FaArrowRight className={styles.icon} />Benchmarks & Research: 99.2% on WikiArt Dataset (1.4M classes)</div>
                </div>
                <div className={`${styles.halfWidth} ${styles.halfWidthRight}`}>
                    {image ? (
                        <img src={image} alt="Uploaded Image" style={{ maxWidth: "100%", height: "auto", borderRadius: "10%" }} />
                    ) : (
                        <FaCamera className={styles.cameraIcon} size="10em" />
                    )}
                    <label className={styles.imageUploadButton}>
                        Submit Image
                        <input type="file" style={{ display: 'none' }} onChange={handleImageChange} />
                    </label>
                </div>
            </div>

            {errorMessage ? (
                <div className={`${styles.ovalContainer} ${styles.animatedContainer}`}>
                    <div className={styles.errorText}>{errorMessage}</div>
                </div>
            ) : artwork.title && artwork.artist && !isLoading ? (
                <>
                    <div className={`${styles.sublineContainer} ${styles.animatedContainer}`}>
                        <div className={styles.sublineText}>Result</div>
                        <div className={styles.subline}></div>
                    </div>
                    <div className={`${styles.ovalContainer} ${styles.animatedContainer} ${styles.fadeIn}`}>
                        <div className={styles.oval}>
                            <div className={styles.ovalText}>{artwork.title}</div>
                            <div className={`${styles.ovalText} ${styles.ovalTextBold}`}>{artwork.artist}</div>
                            <img src={artwork.image_url} alt="Output Image" className={styles.ovalImage} />
                        </div>
                    </div>
                </>
            ) : (
                isLoading && (
                    <>
                        <div className={`${styles.sublineContainer} ${styles.animatedContainer}`}>
                            <div className={styles.sublineText}>Result</div>
                            <div className={styles.subline}></div>
                        </div>

                        <div className={`${styles.ovalContainer} ${styles.animatedContainer}`}>
                            <div className={styles.spinner}></div>
                        </div>
                    </>
                )
            )}



            <div className={styles.bottomLine}></div>

        </section>
    );
};

export default APISection;
