import axios from "axios";
import React from "react";
import NotesView from "../views/notes/notes.view";

export default function DuesPage(context) {
  return <NotesView notes={context.data} categories={context.category} />;
}

export async function getServerSideProps(context) {
  const notes = await axios.get(`${process.env.NEXT_PUBLIC_SEVER_DOMAIN}/note`);
  const note_category = await axios.get(
    `${process.env.NEXT_PUBLIC_SEVER_DOMAIN}/note_category`
  );
  console.log(notes.data);
  return {
    props: { data: notes.data, category: note_category.data }, // will be passed to the page component as props
  };
}
