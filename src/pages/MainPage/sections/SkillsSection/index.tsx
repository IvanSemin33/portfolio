import SkillStat from "@/components/SkillStat";
import styles from "./index.module.scss";
import memoji from "@/assets/images/memoji-skills.png";
import { POINTS } from "@/constants";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const skills = [
  [
    {
      name: "HTML/CSS/JavaScript",
      value: 95,
    },
    {
      name: "TypeScript",
      value: 93,
    },
    {
      name: "Node.js/Express",
      value: 85,
    },
    {
      name: "WebSockets",
      value: 73,
    },
    {
      name: "DevOps",
      value: 89,
    },
    {
      name: "MongoDB/PostgreSQL",
      value: 60,
    },
    {
      name: "Testing",
      value: 88,
    },
  ],
  [
    {
      name: "React/React Native",
      value: 95,
    },
    {
      name: "Design Systems",
      value: 93,
    },
    {
      name: "Redux/mobX",
      value: 90,
    },
    {
      name: "English",
      value: 78,
    },
    {
      name: "React Query",
      value: 93,
    },
    {
      name: "Monorepos",
      value: 80,
    },
    {
      name: "Framer Motion",
      value: 88,
    },
  ],
];

const {
  SKILLS: { START, STOP_START, STOP_END, END },
} = POINTS;

const SkillsSection = () => {
  const { scrollYProgress } = useScroll();

  const xSkillStat = useTransform(
    scrollYProgress,
    [START, STOP_START, STOP_END, END],
    [120, 0, 0, 120]
  );

  const xSkillStatSpring = useSpring(xSkillStat, {
    stiffness: 50,
    damping: 10,
  });

  const transformSkillsLeft = (skillIndex: number) =>
    useMotionTemplate`translateX(calc(${
      skillIndex + 1
    } * -${xSkillStatSpring}%)`;
  const transformSkillsRight = (skillIndex: number) =>
    useMotionTemplate`translateX(calc(${
      skillIndex + 1
    } * ${xSkillStatSpring}%)`;

  const yImage = useTransform(
    scrollYProgress,
    [START, STOP_START, STOP_END, END],
    [100, 0, 0, 100]
  );

  const yImageSpring = useSpring(yImage, {
    stiffness: 50,
    damping: 10,
  });

  const transformImage = useMotionTemplate`translateY(${yImageSpring}%)`;

  return (
    <div className={styles.container}>
      {skills.map((skillColumn, columnIndex) => (
        <div
          className={styles.skillColumn}
          key={columnIndex === 0 ? "left" : "right"}
        >
          {skillColumn.map((skill, skillIndex) => (
            <SkillStat
              {...skill}
              key={skill.name}
              style={{
                transform:
                  columnIndex === 0
                    ? transformSkillsLeft(skillIndex)
                    : transformSkillsRight(skillIndex),
              }}
            />
          ))}
        </div>
      ))}
      <motion.img
        className={styles.memoji}
        src={memoji}
        alt="memoji"
        style={{
          transform: transformImage,
        }}
      />
    </div>
  );
};

export default SkillsSection;
