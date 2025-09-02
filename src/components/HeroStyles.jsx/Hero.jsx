import React from "react";
import Profile from "../../assets/Profile.jpeg";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import GithubLight from "../../assets/github-light.svg";
import GithubDark from "../../assets/github-dark.svg";
import TwitterLight from "../../assets/twitter-light.svg";
import TwitterDark from "../../assets/twitter-dark.svg";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const GithubIcon = theme === "light" ? GithubLight : GithubDark;
  const TwitterIcon = theme === "light" ? TwitterLight : TwitterDark;
  return (
    <section id="hero" className="{styles.container} mt-20 px-5">
      <div className="{styles.colorModeContainer} flex items-start justify-center">
        <img
          className="{styles.hero} border rounded-full w-64"
          src={Profile}
          alt="Profile Pic of Adewuyi Paul"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-col items-center {styles.info} justify-center w-full gap-3">
        <h1>Adewuyi Oluwasegun</h1>
        <h2 className="text-center ">
          Full stack development & Software Architecture
        </h2>
        <span className="flex">
          <a
            className="hover"
            href="https://www.linkedin.com/in/adewuyi-oluwasegun-994214354/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a
            className="hover"
            href="https://github.com/Pauly-2002?tab=repositories"
            target="_blank"
          >
            <img src={GithubIcon} alt="Github icon" />
          </a>
          <a
            className="hover"
            href="https://x.com/Oluwasegunpaul0"
            target="_blank"
          >
            <img src={TwitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className="text-center">
          Building Web Apps & Software with React.js | Node.js <br></br>|
          Express.js | Mongodb | Postgresql Developer
        </p>
        <a href="https://wa.me/2348012345678?text=Hello%20I%27m%20interested%20in%20your%20services" target="_blank" download id="hero-btn" className="px-5 py-2">
          <button className="hover">Contact Me</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
