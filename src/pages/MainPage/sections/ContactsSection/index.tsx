import styles from "./index.module.scss";
import memoji from "assets/images/memoji-contacts.png";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import { ReactComponent as EmailIcon } from "assets/icons/email.svg";
import { ReactComponent as TelegramIcon } from "assets/icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "assets/icons/github.svg";

const contacts = [
  {
    Icon: PhoneIcon,
    data: "+36303882948",
    link: "tel:+36303882948",
  },
  {
    Icon: EmailIcon,
    data: "ivanswork24@gmail.com",
    link: "mailto:ivanswork24@gmail.com",
  },
  {
    Icon: TelegramIcon,
    data: "@ivan_semin_33",
    link: "https://t.me/ivan_semin_33",
  },
  {
    Icon: LinkedinIcon,
    data: "@ivansemin33",
    link: "https://www.linkedin.com/in/ivansemin33",
  },
  {
    Icon: GithubIcon,
    data: "@IvanSemin33",
    link: "https://github.com/IvanSemin33",
  },
];

const ContactsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {contacts.map(({ Icon }) => (
          <Icon width={26} height={26} />
        ))}
      </div>
      <div className={styles.right}>
        {contacts.map(({ data, link }) => (
          <a href={link} className={styles.link}>
            {data}
          </a>
        ))}
      </div>
      <img className={styles.memoji} src={memoji} alt="memoji" />
    </div>
  );
};

export default ContactsSection;
