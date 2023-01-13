import HeroSection from "./sections/HeroSection";
import styles from "./index.module.scss";
import Tabs from "components/Tabs";
import { Fragment, useState } from "react";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";

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
  [ETabsOptions.SKILLS]: <div>Skills</div>,
  [ETabsOptions.CONTACTS]: <div>Contacts</div>,
};

const MainPage = () => {
  // TODO: change
  const [tab, setTab] = useState<ETabsOptions | null>(ETabsOptions.ABOUT);

  return (
    <div className={styles.container}>
      {tab ? (
        <Fragment>
          <Tabs
            options={Object.values(ETabsOptions)}
            value={tab}
            onChange={(value) => setTab(value as ETabsOptions)}
          />
          <div className={styles.tabContent}>{tabsContent[tab]}</div>
        </Fragment>
      ) : (
        <HeroSection onStartClick={() => setTab(ETabsOptions.ABOUT)} />
      )}
    </div>
  );
};

export default MainPage;
