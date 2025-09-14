import express from 'express'
import { string } from 'zod'
import  JWT_SECRET  from "../JWT.js";
import jwt from "jsonwebtoken";
import db from '../db.js';
import authMiddleware from '../middleware.js';  
const { User , Account } = db;

import zod from "zod"
const user = express.Router()



const signupSchema =zod.object({
    username :zod.string(),
    firstname: zod.string(),
    lastname : zod.string(),
    email : zod.string().email(),
    password: zod.string().min(6)
})

user.post("/signup", async (req, res)=>{
    const body= req.body;

    const success = signupSchema.safeParse(body)
    if(!success ){
        res.json({
            message : "  wrong Inputs"
        })
    }

    const userExists = await User.findOne({
        username : req.body.username
    })

    if (userExists){
        res.json({
            message:" User already Exists"
        })
        return
    }

    const dbuser  =await User.create(body)

    const token =jwt.sign({
        userId:dbuser._id
    } , JWT_SECRET)

    res.json({
        message: " User created Successfully",
        token: token
    })

    const account = await Account.create({
        userId: dbuser._id,
        accountBalance: Math.random()*10000
    })

    
})

user.post("/signin",(req, res)=>{
    
})

const updateBody = zod.object({
    password : string().optional(),
    firstname : string().optional(),
    lastname : string().optional()
})

user.put("/update", authMiddleware, async(req, res)=>{

    const body = req.body;

    const success = updateBody.safeParse(body)

    if(!success){
        res.status(403).json({
            message: "error while updating "
        })
    }
    await User.updateOne(req.body,{
        //@ts-ignore
        id: req.userId
    })

    res.json({
        message: "User updated successfully"
    })
    
}) 


user.get("/bulk", async (req, res)=>{
    //@ts-ignore
    const filter = req.query.filter || "";
    const users = await User.find({
        $or:[{
            firstname:{
                $regex: filter,
            }
        },{
            lastname:{
                $regex: filter,
        }
        }]

        
    })

    res.json({
        user : users.map((user : any) =>({
            username: user.username,
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname
        }))
})
})

export default user