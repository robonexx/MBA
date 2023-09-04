import React from 'react';

type WatcheType = {
  src?: string;
  videoId?: string;
  children?: string;
  allow?: string;
  frameborder?: string;
  allowFullScreen?: string;
};

const videoWidth = '680';
const videoHeight = '540';

const ContentWatch = ({ children, videoId }: WatcheType) => {
  const vidHref = 'https://player.vimeo.com/video/' + `${videoId}`;
  return (
    <div className='w-full h-full grid place-content-center'>
      <iframe
        src={vidHref}
        allow='autoplay'
        width={videoWidth}
        height={videoHeight}
        frameBorder='0'
      ></iframe>
      {children}
    </div>
  );
};

export default ContentWatch;
