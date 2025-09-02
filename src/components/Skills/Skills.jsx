import React from "react";
import Styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../SkillList";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col text-center">
      <h1 className="sectionTitle">Skills</h1>
      <div className="flex justify-evenly self-center flex-wrap gap-8 w-[26ch]">
        <SkillList src={checkMarkIcon} p="HTML" />
        <SkillList src={checkMarkIcon} p="CSS" />
        <SkillList src={checkMarkIcon} p="JAVASCRIPT" />
        <SkillList src={checkMarkIcon} p="TYPESCRIPT" />
        <SkillList src={checkMarkIcon} p="NODE.JS" />
        <hr className=" w-16 my-20" />
      </div>

      <div className="flex justify-evenly self-center flex-wrap gap-8 w-[26ch]">
        <SkillList src={checkMarkIcon} p="REACT" />
        <SkillList src={checkMarkIcon} p="EXPRESS.JS" />
        <SkillList src={checkMarkIcon} p="TAILWIND.CSS" />
        <SkillList src={checkMarkIcon} p="GIT" />
      </div>
    </div>
  );
};

export default Skills;
