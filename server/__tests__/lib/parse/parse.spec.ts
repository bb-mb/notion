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

  // test("createPageDoc - page 모델 mongoose document 생성", () => {
  //   Date.now = jest.fn().mockReturnValue(1640699483166);
  //   expect(
  //     pageParser.createPageDocument(notionDB[rootPageId], "userName")
  //   ).toEqual({
  //     pageId: rootPageId,
  //     author: "userName",
  //     title: "테스트",
  //     thumbnail: "",
  //     value: notionDB[rootPageId],
  //     cleanUrl: rootPageId,
  //     updatedAt: new Date(1640699483166),
  //   });
  // });
});
