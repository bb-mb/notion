export interface IPage {
  pageId: string;
  author: string;
  title: string;
  value: object;
  cleanUrl: string;
  count: number;
  createdAt: date;
  updatedAt: date;
  coments: [{ text: string; date: date }?];
}

export interface INotionPage {
  [keys: string]: unknown;
  block?: {
    [id: string]: {
      [keys: string]: unknown;
      value: {
        [keys: string]: unknown;
        id: string;
        type: string;
      };
    };
  };
}
