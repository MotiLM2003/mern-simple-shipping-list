export const itemsContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

export const itemsVariants = {
  hidden: {
    opacity: 0,
    scale: 2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    duration: 2,
  },
  exit: { opacity: 0 },
};
