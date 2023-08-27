import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

import Backdrop from '../backdrop/Backdrop';
import styles from './Modal.module.css';

const dropIn = {
  hidden: {
    y: '0vh',
    x: '300px',
    scale: 0,
    opacity: 0,
  },
  visible: {
    y: '0',
    x: '0',
    scale: 1,
    opacity: '1',
    transition: {
      delay: 0.1,
      duration: 0.4,
      ease: [0.17, 0.67, 0.83, 0.67],
      type: 'spring',
      damping: 50,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Modal = ({ handleClose, content }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modal} ${styles.glass}`}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <button
          onClick={handleClose}
          className={`${styles.modal_btn} ${styles.close_btn}`}
        >
          <FiX />
        </button>
        {content}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
