import HeroSection from "./sections/HeroSection";
import styles from "./index.module.scss";
import Tabs from "components/Tabs";
import { Fragment, useState } from "react";

export enum ETabsOptions {
  ABOUT = "about",
  PARTFOLIO = "partfolio",
  EXPERIENCE = "experience",
  SKILLS = "skills",
  CONTACTS = "contacts",
}

const tabsContent = {
  [ETabsOptions.ABOUT]: <div>About</div>,
  [ETabsOptions.PARTFOLIO]: <div>Partfolio</div>,
  [ETabsOptions.EXPERIENCE]: <div>Experience</div>,
  [ETabsOptions.SKILLS]: <div>Skills</div>,
  [ETabsOptions.CONTACTS]: <div>Contacts</div>,
};

const MainPage = () => {
  const [tab, setTab] = useState<ETabsOptions | null>(null);

  return (
    <div className={styles.container}>
      {tab ? (
        <Fragment>
          <Tabs
            options={Object.values(ETabsOptions)}
            value={tab}
            onChange={(value) => setTab(value as ETabsOptions)}
          />
          {tabsContent[tab]}
        </Fragment>
      ) : (
        <HeroSection onStartClick={() => setTab(ETabsOptions.ABOUT)} />
      )}
    </div>
  );
};

export default MainPage;
