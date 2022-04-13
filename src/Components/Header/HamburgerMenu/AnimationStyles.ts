const animationConfig = {
  mass: 1,
  frictionLight: 20,
  frictionHeavy: 30,
  tension: 575,
  delay: 175,
};

export const baseSpringStyle = {
  transformTop: "translate(-6px, 10px) rotate(0deg)",
  transformMiddle: "translate(-6px, 0px) rotate(0deg)",
  transformBottom: "translate(-6px, -10px) rotate(0deg)",
  widthTop: "24px",
  widthBottom: "20px",
  config: {
    mass: animationConfig.mass,
    friction: animationConfig.frictionHeavy,
    tension: animationConfig.tension,
  },
};

export const OpenHamburgerStyle = [
  {
    transformTop: "translate(-6px, 18.5px) rotate(0deg)",
    transformMiddle: "translate(-6px, 0px) rotate(0deg)",
    transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
    widthTop: "28px",
    widthBottom: "28px",
    config: { clamp: true },
  },
  {
    transformTop: "translate(-6px, 10px) rotate(0deg)",
    transformMiddle: "translate(-6px, 0px) rotate(0deg)",
    transformBottom: "translate(-6px, -10px) rotate(0deg)",
    widthTop: "24px",
    widthBottom: "20px",
    config: {
      clamp: false,
      friction: animationConfig.frictionLight,
      tension: animationConfig.tension,
    },
    delay: animationConfig.delay,
  },
];

export const CloseHamburgerStyle = [
  {
    transformTop: "translate(-6px, 18.5px) rotate(0deg)",
    transformMiddle: "translate(-6px, 0px) rotate(0deg)",
    transformBottom: "translate(-6px, -18.5px) rotate(0deg)",
    widthTop: "28px",
    widthBottom: "28px",
    config: { clamp: true },
  },
  {
    transformTop: "translate(-6px, 18.5px) rotate(45deg)",
    transformMiddle: "translate(-6px, 0px) rotate(45deg)",
    transformBottom: "translate(-6px, -18.5px) rotate(-45deg)",
    widthTop: "28px",
    widthBottom: "28px",
    config: {
      clamp: false,
      friction: animationConfig.frictionLight,
      tension: animationConfig.tension,
    },
    delay: animationConfig.delay,
  },
];
