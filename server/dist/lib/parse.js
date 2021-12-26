"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageBlocks = void 0;
function getPageBlocks(page) {
    return Object.keys(page.block).filter((blockId) => {
        return page.block[blockId].value.type === "page";
    });
}
exports.getPageBlocks = getPageBlocks;
