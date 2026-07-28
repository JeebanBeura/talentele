export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export const zoom = {
  hidden: { opacity: 0, scale: 1.2 },
  show: { opacity: 1, scale: 1 },
};

export const reveal = {
  hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
  show: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
};

export const floating = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const cardHover = {
  rest: { scale: 1, y: 0, boxShadow: "0px 4px 6px rgba(0,0,0,0.05)" },
  hover: { scale: 1.02, y: -4, boxShadow: "0px 10px 15px rgba(0,0,0,0.1)" },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
