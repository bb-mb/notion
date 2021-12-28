import { ParseHelper } from "@/lib/parse/parseHelper";
import { notionDB } from "./notionClient.mock";

const rootPageId = "ca74dddb-66fe-4c12-81fa-c1c0518ee320";

describe("parseHelper text", () => {
  let parseHelper: ParseHelper;

  beforeAll(() => {
    parseHelper = new ParseHelper();
  });

  test("getPageTitle - Page 블록에서 제목 가져오기", async () => {
    expect(await parseHelper.getPageTitle(notionDB[rootPageId])).toBe("테스트");
  });

  test("getBlocks - 원하는 블록 타입만 추출", () => {
    expect(parseHelper.getBlocks(notionDB[rootPageId], "image")).toEqual([
      {
        role: "reader",
        value: {
          id: "10b1ea52-a6bc-4295-895c-f4078b7a4aed",
          version: 10,
          type: "image",
          properties: {
            size: [["32.2KB"]],
            title: [["1.jpeg"]],
            source: [
              [
                "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4cbe811-0d3b-4293-9892-1b11007c7257/1.jpeg",
              ],
            ],
          },
          format: {
            block_width: 939,
            display_source:
              "https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4cbe811-0d3b-4293-9892-1b11007c7257/1.jpeg",
            block_full_width: false,
            block_page_width: true,
            block_aspect_ratio: 0.9989350372736954,
            block_preserve_scale: true,
          },
          created_time: 1640675237847,
          last_edited_time: 1640675280000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          file_ids: ["e4cbe811-0d3b-4293-9892-1b11007c7257"],
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
      {
        role: "reader",
        value: {
          id: "db21e8b1-09a0-4273-b74c-ee12690711ab",
          version: 6,
          type: "image",
          properties: {
            source: [
              [
                "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
              ],
            ],
          },
          format: {
            display_source:
              "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
          },
          created_time: 1640608464046,
          last_edited_time: 1640608440000,
          parent_id: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
          parent_table: "block",
          alive: true,
          created_by_table: "notion_user",
          created_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          last_edited_by_table: "notion_user",
          last_edited_by_id: "d47bfd57-c1b8-4fe4-af43-308e47a298d8",
          space_id: "674b61d7-f03f-4c4a-aa2c-8577800db349",
        },
      },
    ]);
  });

  test("getImageUrl - 이미지 주소 추출", () => {
    expect(
      parseHelper
        .getBlocks(notionDB[rootPageId], "image")
        .map((block) => parseHelper.getImageUrl(block))
    ).toEqual([
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4cbe811-0d3b-4293-9892-1b11007c7257%2F1.jpeg?table=block&id=10b1ea52-a6bc-4295-895c-f4078b7a4aed&cache=v2",
      "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
    ]);
  });

  test("getPageThumbnail - 썸네일 추출", () => {
    expect(parseHelper.getPageThumbNail(notionDB[rootPageId])).toBe(
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4cbe811-0d3b-4293-9892-1b11007c7257%2F1.jpeg?table=block&id=10b1ea52-a6bc-4295-895c-f4078b7a4aed&cache=v2"
    );
  });
});
