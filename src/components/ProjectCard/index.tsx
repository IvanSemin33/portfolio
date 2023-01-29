import { motion, useInView } from "framer-motion";
import { TProject } from "@/pages/MainPage/sections/PortfolioSection";
import styles from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import { useScreen } from "@/hooks/useScreen";

interface IProjectCardProps extends TProject {}

const ProjectCard = ({ title, link, description }: IProjectCardProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { amount: 0.7 });
  const { isSmall } = useScreen();

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isSmall) {
      setIsHovered(isInView);
    }
  }, [isInView, isSmall]);

  return (
    <motion.a
      ref={ref}
      href={link}
      className={styles.container}
      animate={isHovered ? "hover" : "initial"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
    >
      <motion.div
        className={styles.title}
        transition={{
          duration: 0.2,
          delay: 0.2,
        }}
        variants={{
          hover: {
            top: 20,
            transition: {
              duration: 0.2,
              delay: 0,
            },
          },
        }}
      >
        {title}
      </motion.div>
      <motion.div
        className={styles.description}
        transition={{
          duration: 0.1,
          delay: 0,
        }}
        variants={{
          hover: {
            opacity: 1,
            transition: {
              duration: 0.2,
              delay: 0.3,
            },
          },
        }}
      >
        {description}
      </motion.div>
      <motion.div
        layout
        className={styles.open}
        transition={{
          duration: 0.2,
          delay: 0.2,
        }}
        variants={{
          hover: {
            bottom: 20,
            transition: {
              duration: 0.2,
              delay: 0,
            },
          },
        }}
      >
        {"//open"}
      </motion.div>
    </motion.a>
  );
};

export default ProjectCard;
