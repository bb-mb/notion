import { PageParser } from "@/lib/parse";
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

  test("getPageTitle - Page 블록에서 제목 가져오기", async () => {
    expect(await pageParser.getPageTitle(notionDB[rootPageId])).toBe("테스트");
  });

  describe("썸네일 설정", () => {
    test("이미지 url 보정 - prefix notion.so", () => {
      expect(
        pageParser.convertImageUrl("/images/page-cover/woodcuts_1.jpg")
      ).toBe("https://notion.so/images/page-cover/woodcuts_1.jpg");
    });
  });
});
