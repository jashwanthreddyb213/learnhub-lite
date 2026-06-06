const mongoose=require("mongoose");
const connectDB=async()=>{
	try{
		await mongoose.connect(process.env.MONGO_DB)
		console.log("mongoDB connected");
	}catch(error){
		console.log(error);
	}
}
module.exports=connectDB;