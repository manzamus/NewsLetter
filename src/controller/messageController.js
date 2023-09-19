import Message from "../model/Message";
import errorResponse from "../utils/errorResponse";
import successResponse from "../utils/successResponse";

class MessageController{
    static async createMessage(req,res){
        try {
            const msg=await Message.create(req.body)
            return res.status(201).json({
                message:`message successfuly sent`,
                data:{
                    email:msg.email,
                    deliverly:msg.message
                }
            })
        } catch (error) {
            return errorResponse(res,401,`not sent ${error}`)
        }
        
    }
    static async getAllMessage(req,res){
        const msg=await Message.find()
        if(!msg || msg.length==0){
            return errorResponse(res,401,`no message found`)
        }else{
            return successResponse(res,200,`message ${msg.length} successfuly retrieved`,msg)
        }

    }
    static async deleteAllMessage(req,res){
        const msg=await Message.deleteMany()
        if(!msg){
            return errorResponse(res,401,`no message deleted`)
        }else{
            return successResponse(res,200,`message deleted`)
        }
    }

}
export default MessageController