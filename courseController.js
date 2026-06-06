const Course=require("../models/CourseModel");


const getCourses=async(req,res)=>{
	try{
	const courses=await Course.find();
	res.json(courses);
}catch(error){
	res.status(500).json({message:error.message});
}
}
const addCourse=async(req,res)=>{
	try{
	const {title,lecturer,description}=req.body;
	const course=await Course.create({
		title,
		lecturer,
		description
	});
	res.json(course);
}catch(error){
	console.log(error);
	res.status(500).json({message:error.message})
}
}

module.exports={getCourses,addCourse};