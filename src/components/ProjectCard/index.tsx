import { motion } from "framer-motion";
import { TProject } from "pages/MainPage/sections/PortfolioSection";
import styles from "./index.module.scss";

interface IProjectCardProps extends TProject {}

const ProjectCard = ({ title, link, description }: IProjectCardProps) => {
  return (
    <motion.a
      href={link}
      className={styles.container}
      whileHover="hover"
      variants={{
        initial: {
          scale: 1,
        },
        hover: {
          scale: 1.05,
        },
      }}
    >
      <motion.div
        className={styles.title}
        variants={{
          initial: {
            y: 0,
            transition: {
              duration: 0.2,
              delay: 0.2,
            },
          },
          hover: {
            y: -76,
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
        variants={{
          initial: {
            opacity: 0,
            transition: {
              duration: 0.2,
              delay: 0,
            },
          },
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
        className={styles.open}
        variants={{
          initial: {
            y: 0,
            transition: {
              duration: 0.2,
              delay: 0.2,
            },
          },
          hover: {
            y: 76,
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
