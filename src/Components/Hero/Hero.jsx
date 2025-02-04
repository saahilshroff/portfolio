import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  /* CODE FROM: https://github.com/judygab/web-dev-projects/tree/main/personal-portfolio */
  /* START */
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Analyst", "Product Manager"];
  const period = 250;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  /* END */

  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saahil</h1>
        <span className={styles.wrap}>{text}</span>
        <p className={styles.description}>
          4+ years experience across industries
          <div className={styles.experienceList}>
            <p>Industries:</p>
            <ul>
              <li>Healthcare & Med-tech</li>
              <li>Travel</li>
              <li>Consulting</li>
            </ul>
          </div>
        </p>
        <div className={styles.pillContainer}>
          <Chip
            label={"Seeking Full time & Contract (W2/C2C) roles"}
            className={styles.pill}
          />
          <Chip
            label={"Open to relocate anywhere in the US"}
            className={styles.pill}
          />
        </div>

        <a
          href="mailto:saahilshroff2023@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("headshot.png")}
        alt="hero"
        className={styles.heroImg}
      />
    </section>
  );
}

export default Hero;
