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
    title: "Motion UI",
    link: "https://github.com/IvanSemin33/motion-ui",
    description: "React UI library based on Framer Motion. (Work in progress)",
  },
  {
    title: "Portfolio",
    link: "https://github.com/IvanSemin33/portfolio",
    description: "My portfolio website.",
  },
  {
    title: "Dashboard App",
    link: "https://github.com/IvanSemin33/dashboard-app",
    description:
      "Example of dashboard app with React, Redux, TypeScript, Ant Design, etc.",
  },
  {
    title: "Hiyoume",
    link: "https://www.hiyoume.io/",
    description:
      "Hiyoume is a mobile relationship app, with access to two communities designed to create authethic connections online.",
  },
  {
    title: "IQM",
    link: "https://iqm.com/",
    description:
      "Political-first programmatic media buying and voter intelligence platform.",
  },
  {
    title: "TRAXNYC",
    link: "https://www.traxnyc.com/",
    description: "Big online store for a retail jewelry enterprise.",
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
        <ProjectCard {...project} key={project.title} />
      ))}
    </motion.div>
  );
};

export default PortfolioSection;
