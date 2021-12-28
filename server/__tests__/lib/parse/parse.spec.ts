import { PageParser } from "@/lib/parse/parse";
import { mockNotion, notionDB } from "./notionClient.mock";
import { MockPage } from "./page.mock";

const rootPageId = "ca74dddb-66fe-4c12-81fa-c1c0518ee320";

describe("노션 페이지 파싱 테스트", () => {
  let pageParser: PageParser;

  beforeEach(() => {
    pageParser = new PageParser(MockPage, mockNotion);
  });

  test("fetchNotionAllPages", async () => {
    expect(await pageParser.fetchNotionAllPages(rootPageId)).toEqual(notionDB);
  });
});
