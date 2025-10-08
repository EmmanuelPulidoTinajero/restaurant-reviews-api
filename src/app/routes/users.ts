import { Router } from "express";

const router = Router();

router.get("/:id", getUserController);
router.post("", postUserController);


export default router;