
import mongoose = require("mongoose");
import{Schema , model} from "mongoose"



    await mongoose.connect("YOUR_MONGO_CONNECTION STRING")


interface Iuser{
    username: string;
    firstname: string;
    lastname: string;
    password :string;

}

const UserSchema = new Schema<Iuser>({
    username: {type: String,  required: true, unique:true},
    firstname:{type: String , required: true},
    lastname:{type: String , required: true}, 
    password:{type: String , required: true}
})




const accountSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, // take the refernce from User Table      
        ref: 'User',
        required: true
    },
    accountBalance :{
        type: Number,
        required : true
    }
})

const User= model('User',UserSchema)
const Account = model('Account' , accountSchema)




export default{ User , Account }
