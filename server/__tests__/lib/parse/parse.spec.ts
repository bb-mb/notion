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

  test("getPageDocument - page model 형식 객체 생성", () => {
    Date.now = jest.fn().mockReturnValue(1640699483166);
    expect(
      pageParser.getPageDocument(notionDB[rootPageId], "userName")
    ).toEqual({
      pageId: rootPageId,
      author: "userName",
      title: "테스트",
      thumbnail:
        "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4cbe811-0d3b-4293-9892-1b11007c7257%2F1.jpeg?table=block&id=10b1ea52-a6bc-4295-895c-f4078b7a4aed&cache=v2",
      value: notionDB[rootPageId],
      updatedAt: new Date(1640699483166),
    });
  });

  test("parse - mock 테스트", async () => {
    expect(await pageParser.parse(rootPageId, "userName")).toEqual([
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
      "b9e5eefd-a49e-41ee-852d-7abfad299f83",
      "273be2a5-2583-4c00-8925-f344d1103f0e",
      "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
      "896636bc-3530-420b-ba5a-d83ea3ed6dde",
    ]);
  });
});
