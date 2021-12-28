import { Model } from "mongoose";
import { NotionAPI } from "notion-client";
import { getAllPagesInSpace } from "notion-utils";

import { INotionPage, INotionPageMap, IPage } from "@/types/models";
import { ParseHelper } from "./parseHelper";

export class PageParser {
  pageModel: Model<IPage>;
  notion: NotionAPI;
  parseHelper: ParseHelper;

  constructor(page: Model<IPage>, notion: NotionAPI) {
    this.pageModel = page;
    this.notion = notion;
    this.parseHelper = new ParseHelper();
  }

  async parse(rootPageId: string, userName: string) {
    return await this.savePages(
      await this.fetchNotionAllPages(rootPageId),
      userName
    );
  }

  async fetchNotionAllPages(pagdId: string) {
    return await getAllPagesInSpace(
      pagdId,
      undefined,
      this.notion.getPage.bind(this.notion)
    );
  }

  async savePages(pages: INotionPageMap, userName: string) {
    return await Promise.all(
      Object.values(pages).map((page) => {
        return this.savePageDocument(this.getPageDocument(page, userName));
      })
    );
  }

  getPageDocument(page: INotionPage, userName: string): IPage {
    return {
      pageId: this.parseHelper.getPageId(page),
      author: userName,
      title: this.parseHelper.getPageTitle(page),
      thumbnail: this.parseHelper.getPageThumbNail(page),
      value: page,
      cleanUrl: this.parseHelper.getPageId(page),
      updatedAt: new Date(Date.now()),
    };
  }

  async savePageDocument(doc: IPage) {
    return await this.pageModel.findOneAndUpdate({ pageId: doc.pageId }, doc, {
      new: true,
      upsert: true,
    });
  }
}
