import  express from "express";
import UserRoutes from "./userRoutes"
import messageRoutes from "./messageRoutes"
import newsRoutes from "./newsRoutes"
import CommentRoutes from "./CommentRoutes"
import CategoryRoutes from "./CategoryRoutes"


const router=express.Router();
router.use("/user",UserRoutes)
router.use("/message",messageRoutes)
router.use("/news",newsRoutes)
router.use("/Comment",CommentRoutes)
router.use("/category",CategoryRoutes)
export default router