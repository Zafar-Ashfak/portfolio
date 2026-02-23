import styles from "./SkillsStyles.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMark = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Technical Skills</h1>

      {/* Backend Development */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Java" />
        <SkillList src={checkMark} skill="Spring Boot" />
        <SkillList src={checkMark} skill="RESTful APIs" />
        <SkillList src={checkMark} skill="Microservices" />
        <SkillList src={checkMark} skill="JPA & Hibernate" />
        <SkillList src={checkMark} skill="Spring Security" />
      </div>
      <hr />

      {/* Security & Architecture */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="JWT Authentication" />
        <SkillList src={checkMark} skill="RBAC" />
        <SkillList src={checkMark} skill="BCrypt Encryption" />
        <SkillList src={checkMark} skill="DTO Design Pattern" />
        <SkillList src={checkMark} skill="Layered Architecture" />
      </div>
      <hr />

      {/* API & Documentation */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Swagger / OpenAPI" />
        <SkillList src={checkMark} skill="Postman" />
        <SkillList src={checkMark} skill="JSON" />
      </div>
      <hr />

      {/* Frontend */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="HTML5" />
        <SkillList src={checkMark} skill="CSS3" />
        <SkillList src={checkMark} skill="JavaScript (ES6+)" />
        <SkillList src={checkMark} skill="React.js" />
        <SkillList src={checkMark} skill="Tailwind CSS" />
        <SkillList src={checkMark} skill="Figma" />
      </div>
      <hr />

      {/* Database */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="SQL" />
        <SkillList src={checkMark} skill="PostgreSQL" />
        <SkillList src={checkMark} skill="MySQL" />
        <SkillList src={checkMark} skill="MongoDB" />
      </div>
      <hr />

      {/* DevOps & Cloud */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Docker" />
        <SkillList src={checkMark} skill="CI/CD Pipelines" />
        <SkillList src={checkMark} skill="AWS" />
      </div>
      <hr />

      {/* Tools & Build Systems */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Git" />
        <SkillList src={checkMark} skill="GitHub" />
        <SkillList src={checkMark} skill="Maven" />
        <SkillList src={checkMark} skill="Lombok" />
      </div>
    </section>
  );
}

export default Skills;
