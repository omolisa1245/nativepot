import express from 'express'
import { addFood, listFood, removeFood, singleFood } from '../Controller/foodController.js'
import upload from '../Middleware/multer.js';
import adminAuth from '../Middleware/adminAuth.js';
import userAuth from '../Middleware/auth.js';



const foodRouter = express.Router();







foodRouter.post('/add',adminAuth,upload.single('image'), addFood)
foodRouter.get('/list', listFood)
foodRouter.post('/remove',adminAuth, removeFood)
foodRouter.post('/single', singleFood)



export default foodRouter;