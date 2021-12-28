import { Model } from "mongoose";
import { NotionAPI } from "notion-client";
import { getAllPagesInSpace } from "notion-utils";

import { INotionPageMap, IPage } from "@/types/models";
import { ParseHelper } from "./parseHelper";

export class PageParser {
  page: Model<IPage>;
  notion: NotionAPI;
  parseHelper: ParseHelper;

  constructor(page: Model<IPage>, notion: NotionAPI) {
    this.page = page;
    this.notion = notion;
    this.parseHelper = new ParseHelper();
  }

  async parse(rootPageId: string) {
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
