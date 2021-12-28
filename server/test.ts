import { NotionAPI } from "notion-client";
import { getAllPagesInSpace } from "notion-utils";
import { writeFileSync } from "fs";

const rootPageId = "ca74dddb-66fe-4c12-81fa-c1c0518ee320";

async function main() {
  const notion = new NotionAPI();
  const pages = await getAllPagesInSpace(
    rootPageId,
    undefined,
    notion.getPage.bind(notion)
  );
  writeFileSync("./sample.json", JSON.stringify(pages));
}

main();
