
export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  chapter: number;
  text: string;
  options: Option[];
  correctOptionId: string;
}
