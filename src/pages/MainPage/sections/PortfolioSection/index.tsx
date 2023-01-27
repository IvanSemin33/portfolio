import ProjectCard from "@/components/ProjectCard";
import { POINTS } from "@/constants";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./index.module.scss";

export type TProject = {
  title: string;
  link: string;
  description: string;
};

const projects: TProject[] = [
  {
    title: "Project 1",
    link: "https://github.com/IvanSemin33",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 2",
    link: "https://github.com/IvanSemin33",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 3",
    link: "https://github.com/IvanSemin33",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 4",
    link: "https://github.com/IvanSemin33",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 5",
    link: "https://github.com/IvanSemin33",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Project 6",
    link: "https://github.com/IvanSemin33",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const {
  PORTFOLIO: { START, STOP_START, STOP_END, END },
} = POINTS;

const PortfolioSection = () => {
  const { scrollYProgress } = useScroll();

  const xContainer = useTransform(
    scrollYProgress,
    [START, STOP_START, STOP_END, END],
    [100, 0, 0, 100]
  );

  const xContainerSpring = useSpring(xContainer, {
    stiffness: 50,
    damping: 10,
  });

  const transformContainer = useMotionTemplate`translateY(${xContainerSpring}%)`;

  return (
    <motion.div
      className={styles.container}
      style={{
        transform: transformContainer,
      }}
    >
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </motion.div>
  );
};

export default PortfolioSection;
