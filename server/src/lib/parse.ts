import { Model } from "mongoose";
import { INotionPage, IPage } from "@/types/models";

export class PageParser {
  model: Model<IPage>;
  constructor(model: Model<IPage>) {
    this.model = model;
  }

  getPageBlocks(page: INotionPage): string[] {
    return Object.keys(page.block).filter((blockId) => {
      return page.block[blockId].value.type === "page";
    });
  }
}
