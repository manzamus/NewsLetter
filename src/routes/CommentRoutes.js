import Express  from "express";
import CommentController from "../controller/commentController";



const router=Express.Router()
router.post("/:id",CommentController.postComment)
router.get("/",CommentController.getAllComment)



export default router