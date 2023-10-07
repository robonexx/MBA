import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface TextWordAnimationProps {
  text: string;
}

const LetterAnimation: React.FC<TextWordAnimationProps> = ({ text }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.h2
      ref={ref}
      className='textSplit'
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial='hidden'
      transition={{ duration: 1, delay: 0.3 }}
    >
      {text.split(' ').map((word, wordIdx, wordArr) => (
        <React.Fragment key={wordIdx}>
          {word.split('').map((letter, letterIdx, letterArr) => (
            <motion.span
              key={letterIdx}
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: wordIdx * 0.3 + letterIdx * 0.1,
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
          {wordIdx < wordArr.length - 1 && ' '}
        </React.Fragment>
      ))}
    </motion.h2>
  );
};

export default LetterAnimation;
