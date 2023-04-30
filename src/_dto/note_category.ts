export class CreateNoteCategoryInput {
  name: string;
  img?: string;
  color: string;
  user_id: number;
  is_favorite: boolean;
}

export class UpdateNoteCategoryInput extends CreateNoteCategoryInput {
  id: number;
}

export class GetAllNotesCategoryInput {
  user_id: number;
}
export class GetOneNoteCategoryInput {
  note_cat_id: number;
}

export class NoteCategoryEntity {
  id: number;
  name: string;
  color: string | null;
  img: string | null;
  is_favorite: boolean;
  user_id: number;
  created_at: Date | null;
  updated_at: Date | null;
}
