const express=require("express");
const {protect}=require("../middleware/authMiddleware");
const {enrollCourse,myCourses} =require("../controllers/enrollmentController");
const router=express.Router();
router.post("/:id/enroll",protect,enrollCourse);
router.get("/mycourses",protect,myCourses);
module.exports=router;