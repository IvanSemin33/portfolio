import styles from "./index.module.scss";
import memoji from "assets/images/memoji-about.png";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Hey there! 🖐
        <br />
        <br />
        As a front-end developer, I spend my days buried in HTML, CSS, and
        JavaScript (and the occasional bag of Cheetos 🧀). My superpower is
        turning complex problems into clean, user-friendly solutions - just like
        your friendly neighborhood Spider-Man 🕸. I'm always looking for ways to
        make the web a more beautiful and intuitive place, one pixel at a time.{" "}
        <br />
        <br />
        When I'm not coding up a storm 🧑‍💻, you can find me playing with new
        libraries and frameworks, or swinging through the city (virtually, of
        course) as everyone's favorite web-slinger. I'm a team player at heart
        and love collaborating with other talented individuals to bring awesome
        projects to life 🚀.
        <br />
        <br />
        So if you're in need of a front-end superhero (or just someone who can
        make your website not look like it was built in 1998), let's chat!
        Together, we can conquer the digital world (or at least make your
        website look good 💅).
      </div>
      <img className={styles.memoji} src={memoji} alt="memoji" />
    </div>
  );
};

export default AboutSection;
