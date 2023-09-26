import React from 'react';
import {motion} from 'framer-motion'

const SectionOneFourthScreen = ({ children }) => {
  return (
    <motion.div className='relative w-full h-56 max-h-60 md:h-62 md:max-h-[250px] bg-white flex flex-col items-center justify-center overflow-hidden pointer-events-none group'
      initial={{y: 100, opacity: 0}}
      animate={{ y: 0, opacity: 1 }}
      transition={{duration: 0.4}}
    >
      {children}
    </motion.div>
  );
};

export default SectionOneFourthScreen;
