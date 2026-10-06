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

      {/* Programming Languages & Libraries and Generative AI */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Python" />
        <SkillList src={checkMark} skill="NumPy" />
        <SkillList src={checkMark} skill="Pandas" />
        <SkillList src={checkMark} skill="Generative AI" />
        <SkillList src={checkMark} skill="Large Language Models (LLMs)" />
      </div>
      <hr />

      {/* RAG & AI Applications */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Prompt Engineering" />
        <SkillList src={checkMark} skill="Hugging Face" />
        <SkillList src={checkMark} skill="RAG" />
        <SkillList src={checkMark} skill="LangChain" />
        <SkillList src={checkMark} skill="Vector Databases" />
        <SkillList src={checkMark} skill="Embeddings" />
      </div>
      <hr />

      {/* AI Applications */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Semantic Search" />
        <SkillList src={checkMark} skill="AI Agents" />
        <SkillList src={checkMark} skill="OpenAI API" />
        <SkillList src={checkMark} skill="ChromaDB" />
        <SkillList src={checkMark} skill="Streamlit" />
      </div>
      <hr />

      {/* Backend & APIs */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="REST APIs" />
        <SkillList src={checkMark} skill="FastAPI" />
        <SkillList src={checkMark} skill="JSON" />
        <SkillList src={checkMark} skill="SQL" />
        <SkillList src={checkMark} skill="PostgreSQL" />

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

      {/* DevOps & Development Tools */}
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Docker" />
        <SkillList src={checkMark} skill="Git" />
        <SkillList src={checkMark} skill="GitHub" />
        <SkillList src={checkMark} skill="CI/CD" />
        <SkillList src={checkMark} skill="AWS" />
      </div>
    </section>
  );
}

export default Skills;
