import React, { useState } from 'react';
import Header from './HeaderAPI';
import styles from './ApplicationProgrammingInterface.module.css';
import { FaCamera, FaArrowRight } from 'react-icons/fa'; // Import the camera and arrow icons


const APIPage: React.FC = () => {

  const [image, setImage] = useState<string | null>(null);
  const [artwork, setArtwork] = useState({ artist: '', title: '', image_url: '', score: '', artist2: '', title2: '', image_url2: '', score2: '', artist3: '', title3: '', image_url3: '', score3: '' });
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [errorMessage, setErrorMessage] = useState('');
  const [croppedImages, setCroppedImages] = useState<string[]>([]);

  const cropImage = (imageSrc: string, bbox: { w: number; h: number; x: number; y: number; }) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = bbox.w;
        canvas.height = bbox.h;
        ctx?.drawImage(img, -bbox.x, -bbox.y);
        resolve(canvas.toDataURL());
      };
      img.onerror = reject;
      img.src = imageSrc;
    });
  };


  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        setErrorMessage('Invalid file type. Please upload an image (JPG or PNG).');
        setImage(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setErrorMessage('');
      const reader = new FileReader();
      reader.onload = async (ev: ProgressEvent<FileReader>) => {
        if (ev.target?.result) {
          setImage(ev.target.result as string);  // Set the original image
          const formData = new FormData();
          formData.append('file', file);  // Append the original file to FormData

          try {
            const bboxResponse = await fetch(import.meta.env.VITE_APIBBOX_URL, {
              method: 'POST',
              body: formData,
            });
            const bboxes = await bboxResponse.json();

            if (bboxes.length > 0) {
              const crops = await Promise.all(bboxes.map((bbox: { bbox: { w: number; h: number; x: number; y: number; }; }) => cropImage(ev.target?.result as string, bbox.bbox)));
              setCroppedImages(crops);

              // Convert the first cropped image data URL to a Blob for uploading
              const firstCropBlob = await fetch(crops[0]).then(r => r.blob());
              const croppedFile = new File([firstCropBlob], 'croppedImage.jpg', { type: 'image/jpeg' });

              // Clear the FormData and append the cropped image file
              formData.delete('file');
              formData.append('file', croppedFile);
            } else {
              // No bounding boxes, use the original image
              setCroppedImages([ev.target.result as string]);
            }

            // Fetch artwork details using either the cropped image or the original image
            const artResponse = await fetch(import.meta.env.VITE_API_URL, {
              method: 'POST',
              body: formData,
            });
            const data = await artResponse.json();
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
            console.error('Error processing image:', error);
            setIsLoading(false);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchArtworkDetails = async (imageSrc: RequestInfo | URL) => {
    const imageBlob = await fetch(imageSrc).then(r => r.blob());
    const imageFile = new File([imageBlob], 'selectedImage.jpg', { type: 'image/jpeg' });

    const formData = new FormData();
    formData.append('file', imageFile);

    setIsLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

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
    } catch (error) {
      console.error('Error fetching artwork details:', error);
      setErrorMessage('Failed to fetch artwork details');
    }
    setIsLoading(false);
  };


  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.leftSide}>
            <p className={styles.bigText}>Artwork Search <span className={styles.highlight}>API</span></p>
            <p className={styles.smallText}>Use <span className={styles.highlight}>ArtVista’s API</span> to find art pieces similar to a given image from a vast collection.</p>
          </div>
          <div className={styles.rightSide}>
            <p className={styles.bigText}>How to use</p>
            <p className={styles.smallText}><span className={styles.highlight}>1.</span> <span className={styles.highlight}>Upload</span> a photo of a painting.</p>
            <p className={styles.smallText}><span className={styles.highlight}>2.</span> The API will try to crop the image.</p>
            <p className={styles.smallText}><span className={styles.highlight}>3.</span> Select one of the detected paintings from the initial image.</p>
            <p className={styles.smallText}><span className={styles.highlight}>4.</span> The most similar paintings to the selected crop will be retrieved.</p>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {image ? <img src={image} alt="Uploaded" className={styles.imageStyle} /> : <FaCamera className={styles.imageStyle} />}
          </div>
          <div className={styles.horizontalSeparator}></div>
          {croppedImages.length > 0 && errorMessage == '' ? (
            croppedImages.map((img, index) => (
              <div key={index} className={`${styles.imageWrapper} ${styles.smallImageWrapper}`} onClick={() => fetchArtworkDetails(img)}>
                <img src={img} alt={`Cropped ${index}`} className={styles.smallImageStyle} />
              </div>
            ))
          ) : (
            <div className={styles.imageWrapper}>
              <FaCamera className={styles.smallImageStyle} />
            </div>
          )}
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
              <div className={styles.sublineText}>Results</div>
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
                <div className={styles.sublineText}>Results</div>
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
      </div>
    </>
  );
};

export default APIPage;
