import { getPageTitle } from "notion-utils";
import { Block, ImageBlock } from "notion-types";

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

// react-notion-x에서 가져옴
export function defaultMapImageUrl(url: string, block: Block) {
  if (!url) {
    return "";
  }

  if (url.startsWith("data:")) {
    return url;
  }

  if (url.startsWith("/images")) {
    url = `https://www.notion.so${url}`;
  }

  // more recent versions of notion don't proxy unsplash images
  if (!url.startsWith("https://images.unsplash.com")) {
    url = `https://www.notion.so${
      url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`
    }`;

    const notionImageUrlV2 = new URL(url);
    let table = block.parent_table === "space" ? "block" : block.parent_table;
    if (table === "collection") {
      table = "block";
    }
    notionImageUrlV2.searchParams.set("table", table);
    notionImageUrlV2.searchParams.set("id", block.id);
    notionImageUrlV2.searchParams.set("cache", "v2");

    url = notionImageUrlV2.toString();
  }

  return url;
}
