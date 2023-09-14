'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './ImageLightBox.scss';

const image1 =
  'https://images.unsplash.com/photo-1536924430914-91f9e2041b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
const image2 =
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
const image3 =
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image4 =
  'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image5 =
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';
const image6 =
  'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image7 =
  'https://images.unsplash.com/photo-1687360440667-493016988a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NjF8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image8 =
  'https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image9 =
  'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image10 =
  'https://images.unsplash.com/photo-1687360441023-286ce1b5da0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8ODF8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';
const image11 =
  'https://images.unsplash.com/photo-1535643302794-19c3804b874b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

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

  const imageCards = images.map((image, i) => (
    <div key={i} className='imgWrapper'>
      <Image
        className='image-card'
        onClick={() => showImage(image)}
        src={image}
        alt='gallery'
        fill
        priority
      />
    </div>
  ));

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
