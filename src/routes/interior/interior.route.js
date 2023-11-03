import express from "express";
import {
  getNews,
  getNewsDetail,
} from "../../controller/interior/interior.controller.js";

const interiorRouter = express.Router();

interiorRouter.get("/news", (req, res) => {
  const result = getNews();
  res.json(result);
});

interiorRouter.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const result = getNewsDetail(id);
  res.json(result);
});

export { interiorRouter };
