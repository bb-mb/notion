import { Page } from "@/models";
import { IPage } from "@/types/models";
import { notionDB } from "./notionClient.mock";

export const MockPage = Page;
MockPage.findOne = jest
  .fn()
  .mockImplementation(({ pageId }: { pageId: string }) => pageDB[pageId]);

export const pageDB: {
  [key in string]: IPage;
} = {
  "ca74dddb-66fe-4c12-81fa-c1c0518ee320": {
    pageId: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
    author: "name",
    thumbnail:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4cbe811-0d3b-4293-9892-1b11007c7257%2F1.jpeg?table=block&id=10b1ea52-a6bc-4295-895c-f4078b7a4aed&cache=v2",
    title: "테스트",
    value: notionDB["ca74dddb-66fe-4c12-81fa-c1c0518ee320"],
    cleanUrl: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
    count: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
};
