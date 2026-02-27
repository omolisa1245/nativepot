import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import userRouter from "./Routes/userRouter.js";
import "dotenv/config";
import foodRouter from "./Routes/foodRouter.js";
import connectCloudinary from "./config/cloudinary.js";
import infoRouter from "./Routes/infoRouter.js";
import cartRouter from "./Routes/cartRouter.js";
import orderRouter from "./Routes/orderRouter.js";


// app config
const app = express();
const port = 5000


// middleware
app.use(bodyParser.json());
app.use(express.static('uploads')); 
app.use(express.json());
app.use(cors())

// DB connection
connectDB();
connectCloudinary()


//api end point
app.use("/api/food" ,foodRouter)
app.use("/api/user/",userRouter)
app.use("/api/form/", infoRouter)
app.use("/api/cart/", cartRouter)
app.use('/api/order', orderRouter)

app.get("/", (req,res)=> {
    res.send("api initiating")
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})