import Comment from "../model/Comment";
import News from "../model/News";
import errorRosponse from "../utils/errorResponse";
import successResponse from "../utils/successResponse"


class CommentController{
    static async postComment(req,res){
        const blogIdParams=req.params.id
        const comment=await Comment.create(req.body)
        const news=await News.findByIdAndUpdate({_id:blogIdParams},{$push:{
            comment:comment
        }},{new:true})
        if(!news){
            return errorRosponse(res,401, `no blog found`)
        }else{
            return successResponse(res,200, `comment successfuly created`,comment)
        }
      
    }
    static async getAllComment(req,res){
        const comment=await Comment.find()
        return successResponse(res,200,`success`,comment)
    }
}

export default CommentController