import express, { Request, Response } from "express";
import config from "../config";

const router = express.Router();

import Perfume from "../models/Perfume";
import Palette from "../models/Palette";
import { IPerfumeInputDTO } from "../interfaces/IPerfume";
import { IPaletteInputDTO } from "../interfaces/IPalette";


/**
 *  @route Post api/colfumetest
 *  @desc Register Palette
 *  @access Public
 */
router.post("/colfumetest", async (req, res) => {
  const { answer1, answer2, answer3, answer4, answer5, answer6, answer7 } = req.body;
}); 

module.exports = router;