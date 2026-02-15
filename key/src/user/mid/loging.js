import joi from "joi";
import {StatusCodes} from "http-status-pro-js"
function userslogin(req,res,next){
    try{
        let scheam= joi.object({
            name:joi.string().trim().lowercase().min(3).max(200).required(),
            email:joi.string().trim().lowercase().min(6).max(200).required(),
            password:joi.string().trim().lowercase().min(3).max(10).required()
        })
        let {error, value}= schema.validate(req.body)
        if(error){
            res.status(StatusCodes.BAD_REQUEST.code).json({
                code: StatusCodes.BAD_REQUEST.code,
                message:error,
                data:null
            })
            return;
        }
        req.body = value;
        next()
    }catch(error){
        console.log("user mid", error);
        res.status(StatueCodes.INTERNAL_SERVER_ERROR.code).json({
            code: StatusCodes.INTERNAL_SERVER_ERROR.code,
                message:error,
                data:null
        })
    }
}
export default userslogin