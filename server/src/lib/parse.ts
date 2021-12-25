export interface Ipage {
  [keys: string]: any;
  block: {
    [id: string]: {
      [keys: string]: any;
      value: {
        [keys: string]: any;
        id: string;
        type: string;
      };
    };
  };
}

export function getPageBlocks(page: Ipage): string[] {
  return Object.keys(page.block).filter((blockId) => {
    return page.block[blockId].value.type === 'page';
  });
}
