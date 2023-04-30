import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";
import mdStyles from "./markdown.module.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import hexRgb from "hex-rgb";
import { TiTick } from "react-icons/ti";
import MarkdownIt from "markdown-it";

interface IModal {
  heading: string;
  content: string;
  bgColor: string;
  // isNewNote: Boolean;
  onClose: () => void;
}
export default function NotesModalComp(props: IModal) {
  const [editorState, setEditorState] = useState<string>();
  const md = new MarkdownIt();
  return (
    <div className={styles.modal}>
      <div
        className={styles.content}
        style={{
          backgroundColor: hexRgb(props.bgColor, {
            format: "css",
            alpha: 1,
          }),
        }}
      >
        <div className={styles.sectionTitle}>
          <h3>{props.heading}</h3>
          <TiTick color="#fff" onClick={props.onClose} />
        </div>

        <div className={styles.sectionContent}>
          <div
            className={mdStyles.markdown}
            dangerouslySetInnerHTML={{ __html: md.render(props.content) }}
          ></div>
        </div>

        {/* <div className={styles.sectionContent}>
          <input
            type="button"
            className="btn"
            value="Close"
            onClick={props.onClose}
          />
        </div> */}
      </div>
    </div>
  );
}
