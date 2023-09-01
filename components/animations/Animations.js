export const fadeIn = {
  initial: { x: '0', opacity: 0 },
  enter: {
    x: '0',
    opacity: 1,
    transition: { duration: 0.4, ease: 'linear' },
  },
  exit: {
    x: 0,
    transition: { duration: 0.4, opacity: 0, ease: 'ease-in-out' },
  },
};

export const fadeInUp = {
  initial: { y: 100, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3, duration: 0.6, ease: 'linear' },
  },
  exit: {
    y: 0,
    transition: { duration: 0.4, opacity: 0, ease: 'ease-in-out' },
  },
};
