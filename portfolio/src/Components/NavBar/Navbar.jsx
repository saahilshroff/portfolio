import React, { useState } from "react";
import { getImageUrl } from "../../utils";

import styles from "./NavBar.module.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        SS
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("close-button-32.png")
              : getImageUrl("menu-32.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.menuItem}>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/saahilshroff" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/saahilshroff" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
