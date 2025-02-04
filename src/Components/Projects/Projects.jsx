import React, { useState } from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(
    projects[0]?.category
  );

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div>
        <ul className={styles.categories}>
          {projects.map((item, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => handleFilterClick(item.category)}
                  className={`${styles.button} ${
                    selectedCategory === item.category ? styles.active : ""
                  }`}
                >
                  {item.category}
                </button>
              </li>
            );
          })}
        </ul>
        <div className={styles.projects}>
          {projects
            .filter((category) => category.category === selectedCategory)
            .map((category) => {
              return category.obj.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ));
            })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
