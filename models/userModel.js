const mongoose =require("mongoose");
const userSchema=mongoose.Schema({
	name:{
		type:String,
		required:true,
		unique:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	role:{
		type:String,
		default:"student"
	}

},
{
	timestamps:true
})
const User= mongoose.model("User",userSchema);
module.exports=User;
