import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ContactMe.module.css";

function ContactMe() {
  return (
    <section id="contact-me">
      <div className={styles.container}>
        <h3 className={styles.title}>Contact Me</h3>
        <p className={styles.content}>Shoot me a message!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href="mailto:saahilshroff2023@gmail.com" target="_blank">
              <img
                src={getImageUrl("mail.png")}
                alt="Email Icon"
                className={styles.icon}
              />
              <p>saahilshroff2023@gmail.com</p>
            </a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/saahilshroff" target="_blank">
              <img
                src={getImageUrl("linkedin.png")}
                alt="LinkedIn Icon"
                className={styles.icon}
              />
              <p>linkedin.com/in/saahilshroff</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactMe;
