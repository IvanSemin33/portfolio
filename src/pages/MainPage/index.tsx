import HeroSection from "./sections/HeroSection";
import styles from "./index.module.scss";
import Tabs from "components/Tabs";
import { useState } from "react";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import SkillsSection from "./sections/SkillsSection";
import ContactsSection from "./sections/ContactsSection";
import { useMotionValueEvent, useScroll } from "framer-motion";

export enum ETabsOptions {
  ABOUT = "about",
  PARTFOLIO = "portfolio",
  // EXPERIENCE = "experience",
  SKILLS = "skills",
  CONTACTS = "contacts",
}

const tabsContent = {
  [ETabsOptions.ABOUT]: <AboutSection />,
  [ETabsOptions.PARTFOLIO]: <PortfolioSection />,
  // [ETabsOptions.EXPERIENCE]: <div>Experience</div>,
  [ETabsOptions.SKILLS]: <SkillsSection />,
  [ETabsOptions.CONTACTS]: <ContactsSection />,
};

const MainPage = () => {
  const [tab, setTab] = useState<ETabsOptions | null>(ETabsOptions.ABOUT);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll: ", latest);
  });

  return (
    <div className={styles.container}>
      <HeroSection />
      <Tabs
        options={Object.values(ETabsOptions)}
        value={tab}
        onChange={(value) => setTab(value as ETabsOptions)}
      />
      <AboutSection />
      <PortfolioSection />
      {/* {tab && tabsContent[tab]} */}
    </div>
  );
};

export default MainPage;
