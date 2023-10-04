import express from "express";
import CategoryController from "../controller/CategoryController";

const router = express.Router();

router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.getAllCategory);

export default router;