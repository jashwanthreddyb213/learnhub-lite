const mongoose=require("mongoose");
const enrollmentSchema=mongoose.Schema({
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"User"
	},
	course:{
		type:mongoose.Schema.Types.ObjectId,
		ref:"Course"
	}

},
{
	timestamps:true
});
const Enrollment=mongoose.model("Enrollment",enrollmentSchema);
module.exports=Enrollment;