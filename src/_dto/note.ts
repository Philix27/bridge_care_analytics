export class CreateNoteInput {
  title: string;
  body: string;
  bg_color: string;
  color: string;
  user_id: number;
  note_category_id: number;
}

export class UpdateNoteInput extends CreateNoteInput {
  id: number;
}
export class GetAllNotesInput {
  user_id: number;
}
export class GetOneNoteInput {
  note_id: number;
}

export class NoteEntity {
  id: number;
  title: string;
  body: string | null;
  bg_color: string | null;
  color: string | null;
  user_id: number;
  is_favorite: boolean;
  note_category_id: number;
  created_at: Date | null;
  updated_at: Date | null;
}
