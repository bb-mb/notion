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

export interface INotionPageMap {
  [key: stirng]: INotionPage | null;
}
export interface INotionPage {
  [keys: string]: any;
  block?: {
    [id: string]: {
      [keys: string]: any;
      value?: {
        [keys: string]: any;
        id: string;
        type: string;
      };
    };
  };
}
