import express from "express"
import { updateCart, getUserCart, addToCart} from "../Controller/cartController.js"
import userAuth from "../Middleware/auth.js";



const cartRouter = express.Router();


cartRouter.post('/add',userAuth, addToCart)
cartRouter.post('/update',userAuth, updateCart)
cartRouter.post('/get',userAuth, getUserCart)


export default cartRouter;