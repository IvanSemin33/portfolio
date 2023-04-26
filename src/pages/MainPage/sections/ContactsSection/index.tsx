import styles from "./index.module.scss";
import memoji from "@/assets/images/memoji-contacts.png";
import { ReactComponent as PhoneIcon } from "@/assets/icons/phone.svg";
import { ReactComponent as EmailIcon } from "@/assets/icons/email.svg";
import { ReactComponent as TelegramIcon } from "@/assets/icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "@/assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "@/assets/icons/github.svg";
import { POINTS } from "@/constants";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const contacts = [
  {
    Icon: PhoneIcon,
    data: "+36303882948",
    link: "tel:+36303882948",
  },
  {
    Icon: EmailIcon,
    data: "me@ivan-semin.com",
    link: "mailto:me@ivan-semin.com",
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

const {
  CONTACTS: { START, END },
} = POINTS;

const ContactsSection = () => {
  const { scrollYProgress } = useScroll();

  const xContact = useTransform(scrollYProgress, [START, END], [100, 0]);

  const xContactSpring = useSpring(xContact, {
    stiffness: 50,
    damping: 10,
  });

  const transformContact = (index: number) =>
    useMotionTemplate`translateX(calc(${
      (index + 1) / 2
    } * ${xContactSpring}vw + ${xContactSpring}%))`;

  const yImage = useTransform(scrollYProgress, [START, END], [100, 0]);

  const yImageSpring = useSpring(yImage, {
    stiffness: 50,
    damping: 10,
  });

  const transformImage = useMotionTemplate`translateY(${yImageSpring}%)`;

  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        {contacts.map(({ data, link, Icon }, contactIndex) => (
          <motion.div
            className={styles.contact}
            style={{
              transform: transformContact(contactIndex),
            }}
            key={data}
          >
            <Icon className={styles.icon} />
            <motion.a
              href={link}
              className={styles.link}
              whileHover={{ scale: 1.1 }}
            >
              {data}
            </motion.a>
          </motion.div>
        ))}
      </div>
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

export default ContactsSection;
