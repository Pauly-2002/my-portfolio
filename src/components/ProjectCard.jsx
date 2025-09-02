import React from "react";
import styles from "./Project/ProjectsStyles.module.css"; // or create ProjectCard.module.css

const ProjectCard = (props) => {
  return (
    <a
      href={props.href}
      className="flex flex-col gap-2 mb-10 items-center"
    >
      <img
        id={styles.img}
        className={styles.img} // ✅ use className instead of id
        src={props.src}
        alt={props.h3}
      />
      <h3>{props.h3}</h3>
      <p>{props.p}</p>
    </a>
  );
};

export default ProjectCard;
