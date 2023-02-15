import express from "express";

const router = express.Router();

import {
  getAllSingers,
  addSinger,
  getSingerById,
  updateSinger,
  deleteSinger,
} from "../controllers/actionController.js";

router.get("/", getAllSingers);

router.get(`/:id`, getSingerById);

router.post("/", addSinger);

router.put(`/:id`, updateSinger);

router.delete(`/:id`, deleteSinger);

export default router;
