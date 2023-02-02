import styles from "./index.module.scss";
import memoji from "@/assets/images/memoji-about.png";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { POINTS } from "@/constants";

const {
  ABOUT: { START, STOP_START, STOP_END, END },
} = POINTS;

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  const xText = useTransform(
    scrollYProgress,
    [START, STOP_START, STOP_END, END],
    [-110, 0, 0, -110]
  );

  const xTextSpring = useSpring(xText, {
    stiffness: 50,
    damping: 10,
  });

  const transformText = useMotionTemplate`translateX(${xTextSpring}%)`;

  const yImage = useTransform(
    scrollYProgress,
    [START, STOP_START, STOP_END, END],
    [100, 0, 0, 100]
  );

  const yImageSpring = useSpring(yImage, {
    stiffness: 50,
    damping: 10,
  });

  const transformImage = useMotionTemplate`translateY(${yImageSpring}%)`;

  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.text}
        style={{
          transform: transformText,
        }}
      >
        Welcome! 🖐
        <br />
        <br />
        I am a skilled front-end developer with a passion for creating visually
        appealing and intuitive websites. With expertise in HTML, CSS,
        JavaScript, and an eye for detail 🧐, I turn complex problems into
        seamless user experiences 🎯.
        <br />
        <br />
        Think of me as your friendly neighborhood Spider-Man 🕸 for the digital
        world. When I'm not coding 💻, you can find me exploring the latest
        libraries and frameworks 📚 or virtually swinging through the city 🗽.
        Collaboration is key, and I love working with talented individuals to
        bring amazing projects to life.
        <br />
        <br />
        Let's connect and take your digital world to the next level 🚀.
      </motion.div>
      <motion.img
        className={styles.memoji}
        src={memoji}
        alt="memoji"
        style={{
          transform: transformImage,
        }}
      />
    </motion.div>
  );
};

export default AboutSection;
