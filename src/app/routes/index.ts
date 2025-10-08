import { Router, json } from "express";
import usersRoutes from "./users"
import reviewsRoutes from "./reviews"
import restaurantsRoutes from "./restaurants";


const router = Router();

router.use(json());
router.use("/users", usersRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/restaurants", restaurantsRoutes);




export default router;
