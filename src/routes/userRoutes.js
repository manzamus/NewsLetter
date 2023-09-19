import  express from "express"; 
import UserController from "../controller/userController";
import DataChequer from "../middlewares/dataChequer";
import  Validator  from "../middlewares/validator"
import verifyAccess from "../middlewares/verifyAccess";

const router=express.Router()
router.post(
    "/",
    DataChequer.userRegisterIsEmpty,
    Validator.userAccountRule(),
    Validator.inputValidator,
    UserController.createUser  
);

router.post("/",DataChequer.userRegisterIsEmpty,UserController.createUser)
router.get("/",verifyAccess("admin"),UserController.getAllUsers)
router.delete("/", verifyAccess,UserController.deleteAllUsers)
router.get('/:id',UserController.getOneUser)
router.delete('/:id',UserController.deleteOneUser)
router.patch('/:id',UserController.updateOneUser)
router.post("/login",UserController.login)

export default router