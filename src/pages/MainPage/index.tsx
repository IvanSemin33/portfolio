import HeroSection from "./sections/HeroSection";
import styles from "./index.module.scss";
import Header from "@/components/Header";
import { useState } from "react";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import SkillsSection from "./sections/SkillsSection";
import ContactsSection from "./sections/ContactsSection";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { POINTS } from "@/constants";
import SectionWrapper from "@/components/SectionWrapper";

export enum ETabsOptions {
  ABOUT = "about",
  SKILLS = "skills",
  // EXPERIENCE = "experience",
  PARTFOLIO = "portfolio",
  CONTACTS = "contacts",
}

const MainPage = () => {
  const [tab, setTab] = useState<ETabsOptions | null>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < POINTS.HERO_NAME.END) {
      setTab(null);
    } else if (latest < POINTS.ABOUT.END) {
      setTab(ETabsOptions.ABOUT);
    } else if (latest < POINTS.SKILLS.END) {
      setTab(ETabsOptions.SKILLS);
    } else if (latest < POINTS.PORTFOLIO.END) {
      setTab(ETabsOptions.PARTFOLIO);
    } else {
      setTab(ETabsOptions.CONTACTS);
    }
  });

  return (
    <div className={styles.container}>
      <SectionWrapper active={!tab}>
        <HeroSection />
      </SectionWrapper>
      <Header
        options={Object.values(ETabsOptions)}
        value={tab}
        onChange={(value) => setTab(value as ETabsOptions)}
      />
      <SectionWrapper active={tab === ETabsOptions.ABOUT}>
        <AboutSection />
      </SectionWrapper>
      <SectionWrapper active={tab === ETabsOptions.SKILLS}>
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper active={tab === ETabsOptions.PARTFOLIO}>
        <PortfolioSection />
      </SectionWrapper>
      <SectionWrapper active={tab === ETabsOptions.CONTACTS}>
        <ContactsSection />/
      </SectionWrapper>
    </div>
  );
};

export default MainPage;
