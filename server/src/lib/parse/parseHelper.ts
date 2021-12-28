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

  getImageUrl(imageBlock: { value: ImageBlock }) {
    const source =
      imageBlock.value.properties?.source?.[0]?.[0] ??
      imageBlock.value.format?.display_source;

    return defaultMapImageUrl(source, imageBlock.value);
  }
}
