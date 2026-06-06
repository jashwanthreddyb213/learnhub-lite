const Enrollment=require("../models/enrollmentModel");
const enrollCourse=async(req,res)=>{
	const enrollment=await Enrollment.create({
		user:req.user._id,
		course:req.params.id
	});
	res.json(enrollment);

}
const myCourses=async(req,res)=>{
	const courses=await Enrollment.find({user:req.user._id})
	.populate("course");
	res.json(courses);
}
module.exports= {enrollCourse,myCourses};