import { NotionAPI } from "notion-client";
import { writeFileSync } from "fs";
import { getAllPagesInSpace } from "notion-utils";

async function main() {
  const notion = new NotionAPI();
  const parsed = await notion.getPage("ca74dddb66fe4c1281fac1c0518ee320");
  writeFileSync("./examples.json", JSON.stringify(parsed));
}

async function util() {
  const notion = new NotionAPI();
  const parsed = await getAllPagesInSpace(
    "ca74dddb66fe4c1281fac1c0518ee320",
    undefined,
    notion.getPage.bind(notion)
  );
  writeFileSync("./examples.json", JSON.stringify(parsed));
}

util();
