import { Model } from "mongoose";
import { NotionAPI } from "notion-client";
import { getAllPagesInSpace, getPageTitle } from "notion-utils";

import { INotionPage, INotionPageMap, IPage } from "@/types/models";

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

  async getPageTitle(page: INotionPage) {
    return await getPageTitle(page);
  }

  async fetchNotionAllPages(pagdId: string) {
    return await getAllPagesInSpace(
      pagdId,
      undefined,
      this.notion.getPage.bind(this.notion)
    );
  }

  convertImageUrl(url: string): string {
    if (url[0] === "/") return "https://notion.so" + url;
    return url;
  }
}
