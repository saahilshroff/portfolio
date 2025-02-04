import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.history}>
          {experience.map((item, index) => {
            return (
              <div key={index} className={styles.historyItem}>
                <div className={styles.historyItemImage}>
                  <img src={getImageUrl(item.image)} alt={item.org} />
                </div>
                <div className={styles.historyItemDetails}>
                  <h3>{`${item.role}`}</h3>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>

                  <div className={styles.experiencePoints}>
                    <ul>
                      {item.experiences.map((exp, index) => {
                        return <li key={index}>{exp}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
