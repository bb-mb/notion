import { Model } from "mongoose";
import { NotionAPI } from "notion-client";

import { INotionPage, IPage } from "@/types/models";

export class PageParser {
  page: Model<IPage>;
  notion: NotionAPI;
  checked: string[];

  constructor(page: Model<IPage>, notion: NotionAPI) {
    this.page = page;
    this.notion = notion;
    this.checked = [];
  }

  parseRecord() {}

  parsePage(pageId: string) {}

  async fetchPage(pageId: string): Promise<[INotionPage, IPage | null]> {
    return [
      await this.notion.getPage(pageId),
      await this.page.findOne({ pageId }),
    ];
  }

  getPageBlocks(page: INotionPage): string[] {
    return Object.keys(page.block).filter((blockId) => {
      return page.block[blockId].value.type === "page";
    });
  }
}
