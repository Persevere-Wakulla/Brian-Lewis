import express from "express";
import User from "./userModel.js";

const router= express.Router();

// This POST is to login a user
router.post("/login", async (req, res) => {
    // let {username, email, password } = req.body;
    const currentUser = req.body
  console.log(currentUser);
  const foundUser = await User.findOne(currentUser)
  console.log(foundUser);
  
  if (foundUser !== null) {
    res.json(foundUser)
  }
  else {
    res.json({message: 'incorrect login'})
  }

  
  
    // let existingUser;
    // try {
    //   existingUser = await User.findOne(
    //     {username: username, email: email, password: password },
    //     { _id: 1, email: 1 }
    //   );
    //   // console.log(existingUser);
    // } catch (err) {
    //   console.log({ message: err });
    // }
    // if (!existingUser) {
    //   return res.status(404).json({
    //     success: false,
    //     data: { message: "Credentials do not match" },
    //   });
    // }
    // return res.status(200).json({
    //   success: true,
    //   data: existingUser,
    // });
  });

  // post to create a user in database
router.post("/signUp",async(req,res)=>{
    let {username,password,email} = req.body;
    // console.log(password);
    // console.log(email);
    try {
        if(!username || !password || !email){
            return res.status(400).json({
                sucess:false,
                data:{message:"you must fillout all fields"}
            })
        }
        const newUser = {
            username:username,
            email:email,
            password:password,
        }
        const createdUser = await User.create(newUser);
        return res.status(201).send(createdUser);
    } catch (error) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
})
export default router