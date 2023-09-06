import React from 'react';
import { motion } from 'framer-motion';

const SectionFullScreen = ({ children }) => {
  return (
    <motion.div
      className={`w-full h-screen`}
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
