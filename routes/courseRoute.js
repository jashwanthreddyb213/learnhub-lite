const express=require("express");
const {protect}=require("../middleware/authMiddleware");
const {getCourses,addCourse}=require("../controllers/courseController");
const router=express.Router();
router.get("/",getCourses);
router.post("/",protect,addCourse);
module.exports=router;