import { PageParser } from "@/lib/parse";
import { MockPage, rootPage } from "./page.mock";

describe("노션 페이지 파싱 테스트", () => {
  let pageParser: PageParser;

  beforeEach(() => {
    pageParser = new PageParser(MockPage);
  });

  test("type = page 인 블록만 추출하기", () => {
    expect(pageParser.getPageBlocks(rootPage)).toEqual([
      "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
      "b9e5eefd-a49e-41ee-852d-7abfad299f83",
      "273be2a5-2583-4c00-8925-f344d1103f0e",
      "3aca7339-6dfc-46ea-849b-f3b6bfc974bb",
      "896636bc-3530-420b-ba5a-d83ea3ed6dde",
    ]);
  });
});
