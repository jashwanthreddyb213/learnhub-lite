const jwt=require("jsonwebtoken");
const User=require("../models/userModel");
const protect=async(req,res,next)=>{
  try{
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    const token=req.headers.authorization.split(" ")[1];
    const decoded= jwt.verify(
      token,
      process.env.SECRET_KEY
    );
    req.user=await User.findById(decoded.id);

    next();
  }else{
    res.status(401).json({message:"invalid token"});
  }
}catch(error){
  res.status(500).json({message:error.message});
}
}
module.exports={protect};