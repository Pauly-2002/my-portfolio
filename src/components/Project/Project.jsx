import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../ProjectCard";
import Nexform from "../../assets/Nexform.png";
import Social from "../../assets/Social Media.png";
import Hero from "../../assets/HeroSection.png";
import RealEstate from "../../assets/Real estate website.png"

const Project = () => {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={RealEstate}
          alt="Real Estate Website"
          href="https://real-estate-website1-1eyo.vercel.app/"
          h3="Real Estate Website"
          p="Built using React.js & TailwindCSS"
        />
        <ProjectCard
          src={Nexform}
          alt="Nexform Marketing Agency"
          href="https://nexform-agency.vercel.app"
          h3="Nexform Agency Website"
          p="Built using html, css & javascript"
        />
        <ProjectCard
          src={Social}
          alt="Social Media UI"
          href="https://social-media-website-rho-eight.vercel.app/"
          h3="Facebook Clone"
          p="Social Media Web Interface built with React.js & TailwindCSS"
        />
      </div>
      <ProjectCard
        src={Hero}
        alt="Viber project screenshot"
        href="https://github.com/Pauly-2002/social-media-website"
        h3="Hero Section"
        p="Built using HTML & CSS with responsiveness "
      />
    </section>
  );
};

export default Project;
