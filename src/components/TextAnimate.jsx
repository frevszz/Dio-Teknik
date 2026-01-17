import { motion } from "framer-motion";

const TextAnimate = ({
  children,
  className = "",
  animation = "blurInUp",
  by = "word",
  delay = 0,
  duration = 0.3,
  startOnView = true,
  wrapperClassName = "flex flex-wrap gap-2",
  style = {},
}) => {
  // Handle both string and JSX children
  let text = "";
  if (typeof children === "string") {
    text = children;
  } else if (Array.isArray(children)) {
    text = children.join("");
  } else {
    // For JSX elements, just render them as is
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={startOnView ? { opacity: 1 } : undefined}
        animate={startOnView ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  // Split text by word or character
  const textArray = by === "word" ? text.split(" ") : text.split("");

  // Animation variants
  const animationVariants = {
    blurInUp: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
      visible: (custom) => ({
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          duration: duration,
          delay: custom * (duration * 0.2),
          ease: "easeOut",
        },
      }),
    },
    blurIn: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: (custom) => ({
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: duration,
          delay: custom * (duration * 0.2),
          ease: "easeOut",
        },
      }),
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: (custom) => ({
        opacity: 1,
        transition: {
          duration: duration,
          delay: custom * (duration * 0.2),
          ease: "easeOut",
        },
      }),
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: duration,
          delay: custom * (duration * 0.2),
          ease: "easeOut",
        },
      }),
    },
  };

  const variants = animationVariants[animation] || animationVariants.blurInUp;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView={startOnView ? "visible" : undefined}
      animate={startOnView ? undefined : "visible"}
      viewport={{ once: true, amount: 0.5 }}
    >
      {by === "word" ? (
        <div className={wrapperClassName}>
          {textArray.map((word, index) => (
            <motion.span key={index} variants={variants} custom={index}>
              {word}
            </motion.span>
          ))}
        </div>
      ) : (
        <div className={wrapperClassName}>
          {textArray.map((char, index) => (
            <motion.span key={index} variants={variants} custom={index}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TextAnimate;
