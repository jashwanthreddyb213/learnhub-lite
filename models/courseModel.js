const mongoose=require("mongoose");
const courseSchema= mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	lecturer:{
		type:String,
		required:true
	},
	description:{
        type:String,
        required:true
	}
},
{
	timestamps:true
});
const Course=mongoose.model("Course",courseSchema);
module.exports=Course;