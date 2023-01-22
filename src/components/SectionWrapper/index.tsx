import styles from "./index.module.scss";

interface ISectionWrapperProps {
  active: boolean;
  children: React.ReactNode;
}

const SectionWrapper = ({ active, children }: ISectionWrapperProps) => {
  return (
    <div
      className={styles.container}
      style={{
        zIndex: active ? 3 : 2,
      }}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
