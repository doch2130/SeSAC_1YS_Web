export interface IDiary {
  id: number;
  title: string;
  content: string;
  date: string;
}

export interface IDate {
  id: number;
  date: string;
}

export interface RootState {
  dates: [];
  diaries: [];
}

