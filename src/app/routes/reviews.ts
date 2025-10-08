import { Router } from "express";
import { authMiddleware } from "../middlewares/auth";
import { getReviewController, postReviewController, updateReviewController } from "../controllers/reviewController";

const router = Router();

router.get("/:id", getReviewController);
router.put("/:id", authMiddleware, updateReviewController);
router.post("", authMiddleware, postReviewController);


export default router;