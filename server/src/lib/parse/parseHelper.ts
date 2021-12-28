import { defaultMapImageUrl } from "react-notion-x";
import { getPageTitle } from "notion-utils";
import { ImageBlock } from "notion-types";

import { INotionBlock, INotionPage } from "@/types/models";

export class ParseHelper {
  getPageTitle(page: INotionPage) {
    return getPageTitle(page);
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

  getImageUrl(block: { value: ImageBlock }) {
    if (!block) {
      return "";
    }

    return defaultMapImageUrl(this.getImageSource(block.value), block.value);
  }

  getPageId(page: INotionPage) {
    return Object.keys(page.block)[0];
  }

  getImageSource(imageBlock: ImageBlock) {
    return (
      imageBlock.properties?.source?.[0]?.[0] ??
      imageBlock.format?.display_source
    );
  }
}
