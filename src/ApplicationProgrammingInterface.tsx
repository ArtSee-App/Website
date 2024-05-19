import React, { useState } from 'react';
import Header from './HeaderAPI';
import styles from './ApplicationProgrammingInterface.module.css';
import { FaCamera, FaArrowRight } from 'react-icons/fa'; // Import the camera and arrow icons


const APIPage: React.FC = () => {

  const [image, setImage] = useState<string | null>(null);
  const [artwork, setArtwork] = useState({ artist: '', title: '', image_url: '', score: '', artist2: '', title2: '', image_url2: '', score2: '', artist3: '', title3: '', image_url3: '', score3: '' });
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
        const response = await fetch('https://api.artvista.app/artwork_search_for_website/', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        console.log(data);
        if (data.website_results) {
          setArtwork({
            artist: data.website_results[0].artist,
            title: data.website_results[0].title,
            image_url: data.website_results[0].image_url,
            score: data.scores[0],
            artist2: data.website_results[1].artist,
            title2: data.website_results[1].title,
            image_url2: data.website_results[1].image_url,
            score2: data.scores[1],
            artist3: data.website_results[2].artist,
            title3: data.website_results[2].title,
            image_url3: data.website_results[2].image_url,
            score3: data.scores[2]
          });
        } else {
          setArtwork({ artist: '', title: '', image_url: '', score: '', artist2: '', title2: '', image_url2: '', score2: '', artist3: '', title3: '', image_url3: '', score3: '' });
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error uploading image:', error);
        setIsLoading(false);
      }
    }
  };


  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.leftSide}>
          <p className={styles.bigText}>Artwork Search <span className={styles.highlight}>API</span></p>
          <p className={styles.smallText}>Use <span className={styles.highlight}>ArtVista’s API</span> to find art pieces similar to a given image from a vast collection.</p>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.bigText}>How to use</p>
          <p className={styles.smallText}><span className={styles.highlight}>1.</span> <span className={styles.highlight}>Upload</span> a photo of a painting.</p>
          <p className={styles.smallText}><span className={styles.highlight}>2.</span> The API will try to crop the painting.</p>
          <p className={styles.smallText}><span className={styles.highlight}>3.</span> The most similar paintings to the cropped image will be retrieved.</p>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          {image ? <img src={image} alt="Uploaded" className={styles.imageStyle} /> : <FaCamera className={styles.imageStyle} />}
        </div>
        <div className={styles.horizontalSeparator}></div>
        <div className={styles.imageWrapper}>
          <FaCamera className={styles.smallImageStyle} />
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoText} onClick={() => document.getElementById('fileInput')?.click()}>
          <FaArrowRight className={styles.arrowIcon} />
          <span>Use your photo</span>
        </div>
        <div className={styles.infoText}>
          <FaArrowRight className={styles.arrowIcon} />
          <span>Try the random photo</span>
        </div>
        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} />
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
              <div className={`${styles.ovalText} ${styles.ovalTextBold} ${styles.ovalTextBig}`}>{artwork.score}%</div>
            </div>

            <div className={styles.oval}>
              <div className={styles.ovalText}>{artwork.title2}</div>
              <div className={`${styles.ovalText} ${styles.ovalTextBold}`}>{artwork.artist2}</div>
              <img src={artwork.image_url2} alt="Output Image" className={styles.ovalImage} />
              <div className={`${styles.ovalText} ${styles.ovalTextBold} ${styles.ovalTextBig}`}>{artwork.score2}%</div>
            </div>

            <div className={styles.oval}>
              <div className={styles.ovalText}>{artwork.title3}</div>
              <div className={`${styles.ovalText} ${styles.ovalTextBold}`}>{artwork.artist3}</div>
              <img src={artwork.image_url3} alt="Output Image" className={styles.ovalImage} />
              <div className={`${styles.ovalText} ${styles.ovalTextBold} ${styles.ovalTextBig}`}>{artwork.score3}%</div>
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
              <div className={styles.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
          </>
        )
      )}

      <div className={styles.bottomLine}></div>

      <div className={styles.resultsContainer}>
        <p className={styles.resultsHeading}>Results - <span className={styles.highlight}>soon to be published</span></p>
        <p className={styles.resultsText}>The results of ArtVista’s Artwork searching models will be published soon once the research is done on the models.</p>
      </div>


      <div className={styles.bottomLine}></div>


      <div className={styles.resultsContainer}>
        <p className={styles.resultsHeading}>Use our pattern recognition algorithms in your business - <span className={styles.highlight}>soon to be anounced</span></p>
        <p className={styles.resultsText}>Our technology isn’t limited to paintings and artworks. Reach out to discover how our models can enhance quality control in manufacturing, streamline logistics operations, or optimize inventory management in retail and many more.</p>
      </div>

    </>
  );
};

export default APIPage;
