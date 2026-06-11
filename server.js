const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const userRoutes=require("./routes/userRoutes");
const courseRoutes=require("./routes/courseRoute");
const enrollmentRoute=require("./routes/enrollmentRoute");
dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());
app.use("/enrollments",enrollmentRoute);
app.use("/users",userRoutes);
app.use("/courses",courseRoutes);
console.log("1. Server file started");

dotenv.config();

console.log("2. Env loaded");

connectDB();

console.log("3. DB connection function called");

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`4. Server running on port ${PORT}`);
});



