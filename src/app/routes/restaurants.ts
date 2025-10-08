import { Router } from "express"
import { authMiddleware } from "../middlewares/auth";
import { createRestaurant, getAllRestaurants, getRestaurantById } from "../controllers/restaurantsController";

const router = Router();

router.get("", getAllRestaurants) //traer todos restaurants
router.get("/rating", getRestaurantsRatingController) //traer restaurants por rating
router.get("/:id", getRestaurantById)// restarutant via id
router.post("", createRestaurant)
router.put("/:id", authMiddleware, updateRestaurantController);


export default router;