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
    title: "테스트",
    value: notionDB["ca74dddb-66fe-4c12-81fa-c1c0518ee320"],
    cleanUrl: "ca74dddb-66fe-4c12-81fa-c1c0518ee320",
    count: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    coments: [],
  },
};
