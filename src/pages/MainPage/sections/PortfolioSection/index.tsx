import ProjectCard from "components/ProjectCard";
import styles from "./index.module.scss";

const projects = [
  {
    title: "Project 1",
    link: "https://github.com/IvanSemin33",
  },
  {
    title: "Project 2",
    link: "https://github.com/IvanSemin33",
  },
  {
    title: "Project 3",
    link: "https://github.com/IvanSemin33",
  },
  {
    title: "Project 4",
    link: "https://github.com/IvanSemin33",
  },
  {
    title: "Project 5",
    link: "https://github.com/IvanSemin33",
  },
  {
    title: "Project 6",
    link: "https://github.com/IvanSemin33",
  },
];

const PortfolioSection = () => {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
    </div>
  );
};

export default PortfolioSection;
