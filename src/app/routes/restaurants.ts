import { Router } from "express"
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get("", getRestaurantsController) //traer todos restaurants
router.get("/rating", getRestaurantsRatingController) //traer restaurants por rating
router.get("/:id", getRestaurantIdController)// restarutant via id
router.post("", createRestaurantController)
router.put("/:id", authMiddleware, updateRestaurantController);


export default router;