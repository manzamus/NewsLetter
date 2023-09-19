import Express  from "express";
import MessageController from "../controller/messageController";
import verifyAccess from "../middlewares/verifyAccess";


const router=Express.Router()

router.post("/",MessageController.createMessage)
router.get("/",verifyAccess,MessageController.getAllMessage)
router.delete("/",verifyAccess,MessageController.deleteAllMessage)


export default router

