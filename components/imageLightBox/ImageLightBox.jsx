'use client';
import React, { useState } from 'react';
import './ImageLightBox.scss';

const image1 =
  'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const image2 =
  'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image3 =
  'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const image4 =
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const image5 =
  'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const image6 =
  'https://images.unsplash.com/photo-1593975403686-c1e1f1151ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';

const images = [image1, image2, image3, image4, image5, image6];

const ImageLightBox = () => {
  return (
    <div className='imageLightBox'>
      <div className='imageGallery'>
        <ImageGallery />
      </div>
    </div>
  );
};

function ImageGallery() {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.map((image, i) => (
    <div key={i} className='imgWrapper'>
      <img
        className='image-card'
        onClick={() => showImage(image)}
        src={image}
      />
    </div>
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      <div>{imageCards}</div>

      {lightboxDisplay ? (
        <div id='lightbox' onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id='lightbox-img' src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default ImageLightBox;
