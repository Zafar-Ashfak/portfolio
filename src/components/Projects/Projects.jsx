import React from "react";
import styles from "./ProjectsStyles.module.css";
import easekart from "../../assets/easekart.png";
import dashboard from "../../assets/dashboard.png";
import assistant from "../../assets/assistant.png";
import video_agent from "../../assets/video_agent.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={assistant}
          link="https://github.com/Zafar-Ashfak/Multi-Agent-Research-System"
          h3="Intellica"
          p="Autonomous Multi-Agent Research System"
        />

        <ProjectCard
          src={video_agent}
          link="https://github.com/Zafar-Ashfak/Video-Agent"
          h3="Summify AI"
          p="Meeting & Video Summarizer"
        />

        <ProjectCard
          src={easekart}
          link="https://github.com/Zafar-Ashfak/easekart"
          h3="EaseKart"
          p="A eCommerce App"
        />

        <ProjectCard
          src={dashboard}
          link="https://github.com/Zafar-Ashfak/admin-dashboard"
          h3="Admin Dashboard"
          p="Admin Dashboard App"
        />

      </div>
    </section>
  );
}

export default Projects;
