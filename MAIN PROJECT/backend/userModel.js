import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        requied:true,
    },
    password:{
        type:String,
        requied:true,
    },
    username:{
        type:String,
        required:true,
    }
})

const User = mongoose.model("profile", UserSchema)

export default User