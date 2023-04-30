import MarkdownIt from "markdown-it";
import React, { useState } from "react";
import NotesModalComp from "../../comps/modalNote";
import NavBar from "../../comps/navbar/navbar.comp";
import { SideBar } from "../../comps/sidebar/sidebar";
import { NoteEntity } from "../../_dto/note";
import { NoteCategoryEntity } from "../../_dto/note_category";
import styles from "./styles.module.scss";
import stylesMD from "./markdown.module.scss";

interface INotes {
  notes: NoteEntity[];
  categories: NoteCategoryEntity[];
}
export default function NotesView(props: INotes) {
  const md = new MarkdownIt();
  const [showModal, setShowModal] = useState(false);
  const [isNewNote, setIsNewNote] = useState(false);
  const [notesList, setNoteList] = useState<NoteEntity[]>(props.notes);

  // const rr = CreateNoteMutation();
  const [modalNoteContent, setNotesModal] = useState({
    title: "Click a card",
    body: "To view content",
    bgColor: "#2A3338",
  });

  const handleCategoryChange = (category_id: number) => {
    if (category_id === 0) {
      setNoteList(props.notes);
    }
    const result = props.notes.filter(
      (val, i) => val.note_category_id === category_id
    );
    setNoteList(result);
  };
  return (
    <>
      <NavBar />
      <SideBar />
      {showModal && (
        <NotesModalComp
          heading={modalNoteContent.title}
          content={modalNoteContent.body}
          onClose={() => setShowModal(!showModal)}
          bgColor={modalNoteContent.bgColor}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.noteList}>
          <select
            onChange={(e) => handleCategoryChange(Number(e.target.value))}
          >
            <option value={`0`}>Select Category</option>
            {props.categories.map((v, i) => (
              <option key={i} value={v.id}>
                {v.name}
              </option>
            ))}
          </select>

          <div className={styles.gridContainer}>
            {notesList.map((note, i) => (
              <div
                key={i}
                onClick={() => {
                  setNotesModal({
                    title: note.title,
                    body: note.body,
                    bgColor: note.bg_color,
                  });
                  // setShowModal(!showModal);
                }}
              >
                <p>{note.title}</p>
                <div
                  className={styles.colorDiv}
                  style={{ backgroundColor: note.bg_color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.contentSection}>
          <p>{modalNoteContent.title}</p>
          <div
            className={stylesMD.markdown}
            dangerouslySetInnerHTML={{
              __html: md.render(modalNoteContent.body),
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
