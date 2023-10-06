import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Bebas_Neue } from 'next/font/google';
import Vid from '/public/vid.mp4';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

function Video() {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: 'top center',
        end: 'bottom top',
      },
    });
    tl.to(
      textRef.current,
      {
        translateY: -300,
      },
      0
    );
    tl.to(
      videoRef.current,
      {
        filter: 'grayscale(80%)',
      },
      0
    );
  }, []);

  return (
    <div ref={triggerRef} className='w-full h-full'>
      <video ref={videoRef} src={Vid} loop autoPlay muted></video>
      <div className='video-copy'>
        <p>shiro</p>
        <h1 ref={textRef} className={bebas.className}>
          IN TUNE
        </h1>
      </div>
    </div>
  );
}

export default Video;
