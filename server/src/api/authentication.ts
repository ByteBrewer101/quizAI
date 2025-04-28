import express from "express";

const authRouter = express.Router()


authRouter.post('/register',async(req,res)=>{

  try{

    

  }catch(e){
    res.status(400).json({
        msg: 'error occured ',
        error: e
    })
  }

    

    

})