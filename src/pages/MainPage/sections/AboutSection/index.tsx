import styles from "./index.module.scss";
import memoji from "assets/images/memoji-about.png";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { POINTS } from "../../../../constants";

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

  const transformImage = useMotionTemplate`translateY(${yImageSpring}vw)`;

  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.text}
        style={{
          transform: transformText,
        }}
      >
        Hey there! 🖐
        <br />
        <br />
        As a front-end developer, I spend my days buried in HTML, CSS, and
        JavaScript (and the occasional bag of Cheetos 🧀). My superpower is
        turning complex problems into clean, user-friendly solutions - just like
        your friendly neighborhood Spider-Man 🕸. I'm always looking for ways to
        make the web a more beautiful and intuitive place, one pixel at a time.{" "}
        <br />
        <br />
        When I'm not coding up a storm 🧑‍💻, you can find me playing with new
        libraries and frameworks, or swinging through the city (virtually, of
        course) as everyone's favorite web-slinger. I'm a team player at heart
        and love collaborating with other talented individuals to bring awesome
        projects to life 🚀.
        <br />
        <br />
        So if you're in need of a front-end superhero (or just someone who can
        make your website not look like it was built in 1998), let's chat!
        Together, we can conquer the digital world (or at least make your
        website look good 💅).
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
