const User=require("../models/userModel");
const generateToken=require("../utils/generateToken");
const registerUser=async(req,res)=>{
	try{
		const {name,email,password,role}=req.body;
		const userExists=await User.findOne({email});
		if(userExists){
			return res.status(400).json({message:"user already exist.."});
		}
		const user= await User.create({
			name,
			email,
			password,
			role
		})
		res.json({
			_id:user._id,
			name:user.name,
			email:user.email,
			role:user.role,
			token:generateToken(user._id)

		});
	}catch(error){
		res.json({message:error.message});
	}
}

const loginUser = async(req,res)=>{
  try{
    console.log("BODY:", req.body);

    const { email,password } = req.body;

    const user = await User.findOne({ email });

    console.log("FOUND USER:", user);

    if(user && user.password === password){
      return res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        token:generateToken(user._id)
      });
    }

    return res.status(401).json({
      message:"Email or Password is incorrect"
    });

  }catch(error){
    console.log("LOGIN ERROR:", error);
    res.status(500).json({
      message:error.message
    });
  }
};
const getProfile = async(req,res) => {

  res.json(req.user);

}
module.exports={registerUser,loginUser,getProfile};
