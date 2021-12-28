import { Router } from "express";
import { NotionAPI } from "notion-client";

import { PageParser } from "@/lib/parse/parse";
import { Page } from "@/models";

export const router = Router();

interface IParseRequestBody {
  rootPageId: string;
  userName: string;
}

router.post("/parse", async (req, res) => {
  const { rootPageId, userName }: IParseRequestBody = req.body;
  console.log(rootPageId);
  const pageParser = new PageParser(Page, new NotionAPI());
  const result = await pageParser.parse(rootPageId, userName);
  res.send(result);
});

router.get("/", (req, res) => {
  res.send("pageRouter");
});
