import styles from "./index.module.scss";

interface IProjectCardProps {
  title: string;
  link: string;
}

const ProjectCard = ({ title, link }: IProjectCardProps) => {
  return (
    <a href={link} className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.open}>{"//open"}</div>
    </a>
  );
};

export default ProjectCard;
