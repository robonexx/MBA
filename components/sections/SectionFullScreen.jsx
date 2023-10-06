import React from 'react';
import { motion } from 'framer-motion';

const SectionFullScreen = ({ children }) => {
  return (
    <motion.div
      className={`w-screen h-screen block relative p-0 m-0`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeIn',
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionFullScreen;
