import classNames from "classnames";
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
  options: string[];
}

const Tabs = ({ value, onChange, options }: ITabsProps) => {
  const { scrollYProgress } = useScroll();

  const yContainer = useTransform(scrollYProgress, [0.2, 0.32], [-100, 0]);
  const transformName = useMotionTemplate`translateY(${yContainer}%)`;

  return (
    <motion.div
      className={styles.container}
      style={{
        transform: transformName,
      }}
    >
      {options.map((option) => (
        <div
          key={option}
          className={classNames(styles.tab, value === option && styles.active)}
          onClick={() => onChange(option)}
        >
          {option}
        </div>
      ))}
    </motion.div>
  );
};

export default Tabs;
