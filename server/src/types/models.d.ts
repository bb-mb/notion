import { ExtendedRecordMap } from "notion-types";

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

export interface INotionPage extends ExtendedRecordMap {}
