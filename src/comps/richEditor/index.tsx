import React, { useEffect } from "react";
import styles from "./modal.module.scss";
import Quill from "quill";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

interface IModal {
  heading: string;
  content: string;
  onClose: () => void;
}
export default function RichEditorComp(props: IModal) {
  const { quill, quillRef } = useQuill();

  console.log(quill); // undefined > Quill Object
  console.log(quillRef);
  useEffect(() => {
    new Quill("#quillEditor", { theme: "snow" });
  }, []);

  return (
    <div className={styles.modal} onClick={props.onClose}>
      <div className={styles.content}>
        <div className={styles.sectionTitle}>
          <h3>{props.heading}</h3>
        </div>
        <div className={styles.sectionContent}>
          <p>{props.content}</p>
        </div>
        <div id="quillEditor"></div>
        {/* <div className={styles.sectionContent}>
          <div style={{ width: 500, height: 300 }}>
            <div ref={quillRef} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
