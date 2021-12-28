import { Model } from "mongoose";
import { NotionAPI } from "notion-client";

import { INotionPage, INotionPageMap, IPage } from "@/types/models";
import { getAllPagesInSpace } from "notion-utils";

export class PageParser {
  page: Model<IPage>;
  notion: NotionAPI;
  checked: string[];

  constructor(page: Model<IPage>, notion: NotionAPI) {
    this.page = page;
    this.notion = notion;
    this.checked = [];
  }

  async parseRecord(rootPageId: string) {
    const pages: INotionPageMap = await this.fetchNotionAllPages(rootPageId);
  }

  async fetchNotionAllPages(pagdId: string) {
    return await getAllPagesInSpace(
      pagdId,
      undefined,
      this.notion.getPage.bind(this.notion)
    );
  }
}
