import {
  motion,
  HTMLMotionProps,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

interface ISkillStatProps extends HTMLMotionProps<"div"> {
  name: string;
  value: number;
}

const SkillStat = ({ name, value, ...containerProps }: ISkillStatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const renderDivider = () => <div className={styles.divider} />;

  const activeWidth = useMotionValue<number>(0);

  useEffect(() => {
    if (isInView) {
      activeWidth.set(value);
    } else {
      activeWidth.set(0);
    }
  }, [isInView]);

  const activeWidthSpring = useSpring(activeWidth, {
    stiffness: 50,
    damping: 10,
  });

  const transformActive = useMotionTemplate`scaleX(${activeWidthSpring}%)`;

  return (
    <motion.div className={styles.container} ref={ref} {...containerProps}>
      <div className={styles.name}>{name}</div>
      <div className={styles.valueBar}>
        <motion.div
          className={styles.active}
          style={{ transform: transformActive }}
        />
        {Array.from({ length: 4 }).map(renderDivider)}
      </div>
    </motion.div>
  );
};

export default SkillStat;
