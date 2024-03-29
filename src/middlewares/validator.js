import { check,validationResult } from "express-validator";
import errorResponse from "../utils/errorResponse";

class Validator{
    static inputValidator(req,res,next){
        const error=validationResult(req)
      if(!error==error.isEmpty()){
        error.errors.map((err)=>{
            errorResponse(res,401,err.msg)
          
        })
 
      }else{
        return next()
      }

    }
    static userAccountRule(){
        return [
            check("firstName","Please write your firstName").trim().isAlpha(),
            check("email","PLease write your email correctly").trim().isEmail(),
            check("password","Provide strong password").trim().isStrongPassword()
        ]
    }
static messageAccountRule(){
  return [
    check("email","PLease write your email correctly").trim().isEmail(),
    check("message","PLease write your message correctly").trim().isString(),
   
]
}


}
export default Validator