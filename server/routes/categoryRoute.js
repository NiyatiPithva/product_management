import { getCategory } from "../controllers/categoryController.js";
import express from "express";
import { Router } from "express";

const router = Router();

router.get("/", getCategory);

export default router;