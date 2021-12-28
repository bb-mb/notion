import { Model } from "mongoose";
import { NotionAPI } from "notion-client";
import { getAllPagesInSpace, getPageTitle } from "notion-utils";
import { defaultMapImageUrl } from "react-notion-x";

import {
  INotionBlock,
  INotionPage,
  INotionPageMap,
  IPage,
} from "@/types/models";
import { Block, ImageBlock } from "notion-types";

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

  getPageThumbNail(page: INotionPage) {
    const imageBlocks = this.getBlocks(page, "image");
    return this.getImageUrl(imageBlocks[0]);
  }

  getBlocks(page: INotionPage, blockType: string) {
    return Object.values(page.block).filter(
      (block: INotionBlock) => block.value.type === blockType
    );
  }

  getImageUrl(imageBlock: { value: ImageBlock }) {
    const source =
      imageBlock.value.properties?.source?.[0]?.[0] ??
      imageBlock.value.format?.display_source;

    return defaultMapImageUrl(source, imageBlock.value);
  }
}
