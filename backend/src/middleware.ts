import type{ Request , Response,  NextFunction} from "express";
import jwt from "jsonwebtoken";
import JWT_SECRET  from "./JWT.js";


const authMiddleware =(req : Request, res:Response ,next:NextFunction)=>{

    const authHeader =  req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({})
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify((token as string), JWT_SECRET)
        
        if(decoded){
            //@ts-ignore

            req.userId = decoded.userId
        }
        else{
             return res.status(403).json({})
        }
        next()
    }
    catch(err){
        return res.status(403).json({})
    }

}

export default authMiddleware
