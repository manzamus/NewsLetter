import  express from "express";
import UserRoutes from "./userRoutes"
import messageRoutes from "./messageRoutes"
import newsRoutes from "./newsRoutes"
import CommentRoutes from "./CommentRoutes"


const router=express.Router();
router.use("/user",UserRoutes)
router.use("/message",messageRoutes)
router.use("/news",newsRoutes)
router.use("/Comment",CommentRoutes)
export default router