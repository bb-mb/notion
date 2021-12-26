export interface Ipage {
  [keys: string]: unknown;
  block: {
    [id: string]: {
      [keys: string]: unknown;
      value: {
        [keys: string]: unknown;
        id: string;
        type: string;
      };
    };
  };
}

export function getPageBlocks(page: Ipage): string[] {
  return Object.keys(page.block).filter((blockId) => {
    return page.block[blockId].value.type === "page";
  });
}
