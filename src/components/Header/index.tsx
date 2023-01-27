import { POINTS } from "@/constants";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import styles from "./index.module.scss";
import { useScreen } from "@/hooks/useScreen";

type TValue = string | null;

interface ITabsProps {
  value: TValue;
  onChange: (value: TValue) => void;
  options: TValue[];
}

const Header = ({ value, onChange, options }: ITabsProps) => {
  const { scrollYProgress } = useScroll();
  const { isSmall } = useScreen();

  const yContainer = useTransform(scrollYProgress, [0.2, 0.32], [-100, 0]);
  const transformName = useMotionTemplate`translateY(calc(${yContainer}% - 3px))`;

  const headerTextHeight = isSmall ? 48 + 20 : 64 + 20;

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
      1 * headerTextHeight, // SKILLS.STOP_START
      1 * headerTextHeight, // SKILLS.STOP_END
      1 * headerTextHeight, // SKILLS.END
      1 * headerTextHeight, // PORTFOLIO.START
      2 * headerTextHeight, // PORTFOLIO.STOP_START
      2 * headerTextHeight, // PORTFOLIO.STOP_END
      2 * headerTextHeight, // PORTFOLIO.END
      2 * headerTextHeight, // CONTACTS.START
      3 * headerTextHeight, // CONTACTS.END
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
