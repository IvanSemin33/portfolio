import SkillStat from "components/SkillStat";
import styles from "./index.module.scss";
import memoji from "assets/images/memoji-skills.png";

const skills = [
  [
    {
      name: "HTML",
      value: 100,
    },
    {
      name: "CSS",
      value: 80,
    },
    {
      name: "JavaScript",
      value: 70,
    },
    {
      name: "React",
      value: 60,
    },
    {
      name: "TypeScript",
      value: 50,
    },
    {
      name: "Node.js",
      value: 40,
    },
    {
      name: "MongoDB",
      value: 30,
    },
  ],
  [
    {
      name: "HTML",
      value: 100,
    },
    {
      name: "CSS",
      value: 80,
    },
    {
      name: "JavaScript",
      value: 70,
    },
    {
      name: "React",
      value: 60,
    },
    {
      name: "TypeScript",
      value: 50,
    },
    {
      name: "Node.js",
      value: 40,
    },
    {
      name: "MongoDB",
      value: 30,
    },
  ],
];

const SkillsSection = () => {
  return (
    <div className={styles.container}>
      {skills.map((skillColumn) => (
        <div className={styles.skillColumn}>
          {skillColumn.map((skill) => (
            <SkillStat {...skill} />
          ))}
        </div>
      ))}
      <img className={styles.memoji} src={memoji} alt="memoji" />
    </div>
  );
};

export default SkillsSection;
