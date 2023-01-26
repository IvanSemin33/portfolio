import { POINTS } from "../../constants";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import styles from "./index.module.scss";

type TValue = string | null;

interface ITabsProps {
  value: TValue;
  onChange: (value: TValue) => void;
  options: TValue[];
}

const Header = ({ value, onChange, options }: ITabsProps) => {
  const { scrollYProgress } = useScroll();

  const yContainer = useTransform(scrollYProgress, [0.2, 0.32], [-100, 0]);
  const transformName = useMotionTemplate`translateY(calc(${yContainer}% - 3px))`;

  const ySections = useTransform(
    scrollYProgress,
    [
      POINTS.ABOUT.START,
      POINTS.ABOUT.STOP_START,
      POINTS.ABOUT.STOP_END,
      POINTS.ABOUT.END,
      POINTS.SKILLS.START,
      POINTS.SKILLS.STOP_START,
      POINTS.SKILLS.STOP_END,
      POINTS.SKILLS.END,
      POINTS.PORTFOLIO.START,
      POINTS.PORTFOLIO.STOP_START,
      POINTS.PORTFOLIO.STOP_END,
      POINTS.PORTFOLIO.END,
      POINTS.CONTACTS.START,
      POINTS.CONTACTS.END,
    ],
    [
      0, // ABOUT.START
      0, // ABOUT.STOP_START
      0, // ABOUT.STOP_END
      0, // ABOUT.END
      0, // SKILLS.START
      1 * (64 + 20), // SKILLS.STOP_START
      1 * (64 + 20), // SKILLS.STOP_END
      1 * (64 + 20), // SKILLS.END
      1 * (64 + 20), // PORTFOLIO.START
      2 * (64 + 20), // PORTFOLIO.STOP_START
      2 * (64 + 20), // PORTFOLIO.STOP_END
      2 * (64 + 20), // PORTFOLIO.END
      2 * (64 + 20), // CONTACTS.START
      3 * (64 + 20), // CONTACTS.END
    ]
  );

  const transformSections = useMotionTemplate`translateY(-${ySections}px)`;

  return (
    <motion.div
      className={styles.container}
      style={{
        transform: transformName,
      }}
    >
      <motion.div className={styles.sectionsWrapper}>
        <motion.div
          className={styles.sections}
          style={{
            transform: transformSections,
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              className={styles.section}
              // onClick={() => onChange(option)}
            >
              {option}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
