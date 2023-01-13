import classNames from "classnames";
import styles from "./index.module.scss";

interface ITabsProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Tabs = ({ value, onChange, options }: ITabsProps) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <div
          key={option}
          className={classNames(styles.tab, value === option && styles.active)}
          onClick={() => onChange(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
