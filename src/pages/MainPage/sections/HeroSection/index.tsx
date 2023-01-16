import styles from "./index.module.scss";
import heroImg from "assets/images/hero.png";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  const xLeft = useTransform(scrollYProgress, [0, 0.16], [0, -103]);
  const transformLeft = useMotionTemplate`translateX(${xLeft}%)`;

  const xName = useTransform(scrollYProgress, [0, 0.16], [0, -25]);
  const scaleName = useTransform(scrollYProgress, [0.16, 0.32], [1, 70]);
  const transformName = useMotionTemplate`translateX(${xName}vw) scale(${scaleName})`;
  const opacityName = useTransform(scrollYProgress, [0.16, 0.32], [1, 0]);

  const xJob = useTransform(scrollYProgress, [0, 0.16], [0, 110]);
  const transformJob = useMotionTemplate`translateX(${xJob}%)`;

  const xStart = useTransform(scrollYProgress, [0, 0.16], [0, 120]);
  const transformStart = useMotionTemplate`translateX(${xStart}%)`;

  return (
    <div className={styles.container} ref={ref}>
      <motion.div
        className={styles.left}
        style={{ transform: transformLeft }}
        initial={{
          marginLeft: "-103%",
        }}
        animate={{
          marginLeft: 0,
          transition: {
            duration: 0.8,
          },
        }}
      >
        <motion.img
          src={heroImg}
          alt="hero"
          className={styles.heroImg}
          initial={{
            y: "100%",
          }}
          animate={{
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.8,
            },
          }}
        />
      </motion.div>
      <div className={styles.right}>
        <div className={styles.title}>
          <motion.div
            className={styles.name}
            style={{
              transform: transformName,
              opacity: opacityName,
            }}
            initial={{ marginRight: "-110%" }}
            animate={{
              marginRight: 0,
              transition: {
                duration: 0.5,
                delay: 0.8,
              },
            }}
          >
            IVAN SEMIN
          </motion.div>
          <motion.div
            className={styles.job}
            style={{
              transform: transformJob,
            }}
            initial={{ marginRight: "-110%" }}
            animate={{
              marginRight: 0,
              transition: {
                duration: 0.5,
                delay: 0.9,
              },
            }}
          >
            FRONTEND DEVELOPER
          </motion.div>
        </div>
        <motion.div
          className={styles.start}
          style={{
            transform: transformStart,
          }}
          initial={{
            marginRight: "-110%",
          }}
          animate={{
            marginRight: 0,
            transition: {
              duration: 0.5,
              delay: 1,
            },
          }}
        >
          {"//get to know me"}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
