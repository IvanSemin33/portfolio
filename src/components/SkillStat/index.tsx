import styles from "./index.module.scss";

interface ISkillStatProps {
  name: string;
  value: number;
}

const SkillStat = ({ name, value }: ISkillStatProps) => {
  const renderDivider = () => <div className={styles.divider} />;

  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.valueBar}>
        <div
          className={styles.active}
          style={{ width: `${(242 / 100) * value}px` }}
        />
        {Array.from({ length: 4 }).map(renderDivider)}
      </div>
    </div>
  );
};

export default SkillStat;
