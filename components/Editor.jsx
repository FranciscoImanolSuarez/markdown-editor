import { useState } from "react";
// This is the package we need now
import ReactMarkdown from "react-markdown";
import styles from "./Editor.module.css";
const Editor = () => {
  const [markDown, setMarkdown] = useState();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <textarea
            value={markDown}
            placeholder="Enter your markdown here... "
            onChange={(e) => setMarkdown(e.target.value)}
            className={styles.textarea}
          ></textarea>
          <div className={styles.output}>
            <ReactMarkdown>{markDown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
