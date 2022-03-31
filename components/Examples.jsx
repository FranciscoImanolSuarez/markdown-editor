import React from "react";
import styles from "./Examples.module.css";
export const Examples = ({ heading, text }) => {
  return (
    <section className={styles.sectionText}>
      <div className={styles.card}>
        <h1> {heading}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
};
