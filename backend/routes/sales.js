import express from "express";
import { createSale } from "../controllers/salesController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();


router.post("/", authMiddleware, createSale);

export default router;