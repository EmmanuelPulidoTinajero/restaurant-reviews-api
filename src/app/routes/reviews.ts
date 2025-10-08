import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get("/:id", getReviewController);
router.put("/:id", authMiddleware, updateReviewController);
router.post("", postReviewController);


export default router;