export interface IAiChat {
  conversation_id: string;
  user_id: number;
  msg: string;
}
export interface findAllChatInput {
  conversation_id: string;
  user_id: number;
}

export interface IAiResponse {
  id: string;
  created_at: number;
  model: string;
  ai_msg: string;
  my_msg: string;
  total_tokens: number;
}
