import { Block } from "notion-types";

export interface IPage {
  pageId: string;
  author: string;
  title: string;
  thumbnail: string;
  value: object;
  cleanUrl: string;
  count?: number;
  createdAt?: date;
  updatedAt: date;
}

export interface INotionPageMap {
  [key: stirng]: INotionPage | null;
}

export interface INotionBlock {
  role: string;
  value: Block;
}

export interface INotionPage {
  [keys: string]: any;
  block: {
    [id: string]: INotionBlock | any;
  };
  collection: any;
  collection_view: any;
  notion_user: any;
  collection_query: any;
  signed_urls: any;
}
