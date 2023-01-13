import styles from "./index.module.scss";
import heroImg from "assets/images/hero.png";

interface IHeroSectionProps {
  onStartClick: () => void;
}

const HeroSection = ({ onStartClick }: IHeroSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={heroImg} alt="hero" className={styles.heroImg} />
      </div>

      <div className={styles.right}>
        <div className={styles.title}>
          <div className={styles.name}>IVAN SEMIN</div>
          <div className={styles.job}>FRONTEND DEVELOPER</div>
        </div>
        <div className={styles.startButton} onClick={onStartClick}>
          {"//get to know me"}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
