import { addProduct } from "../controllers/productController.js";
import { Router } from "express";

const router = Router();

router.post("/",addProduct);

export default router;