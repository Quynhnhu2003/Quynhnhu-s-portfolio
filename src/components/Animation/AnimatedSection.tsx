import {motion, useAnimation, type HTMLMotionProps, type Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedSectionProps = {
  children: React.ReactNode;
  animationType?:
    | "fadeIn"
    | "fadeInUp"
    | "slideInLeft"
    | "slideInRight"
    | "zoomIn"
    | "staggerContainer";
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: boolean;
}

/**
 * Animation variants dictionary
 */
const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  zoomIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  },
};

const AnimatedSection = ({
  children,
  animationType = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants =
    animationVariants[animationType] ?? animationVariants.fadeInUp;

  const motionProps: HTMLMotionProps<"div"> =
    animationType === "staggerContainer"
      ? {
          variants,
        }
      : {
          variants: {
            hidden: variants.hidden,
            visible: {
              ...variants.visible,
              transition: {
                duration,
                delay,
                ease: "easeOut",
              },
            },
          },
        };
  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      {...motionProps}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;