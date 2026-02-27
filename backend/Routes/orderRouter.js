import express from 'express'
import { allOrders, userOrders, updateStatus, placeOrder} from '../Controller/orderController.js'
import adminAuth from '../Middleware/adminAuth.js';
import userAuth from '../Middleware/auth.js';


const orderRouter = express.Router();

orderRouter.post('/list', allOrders)
orderRouter.post('/status', updateStatus)

orderRouter.post('/place', placeOrder)
orderRouter.post('/userorders', userOrders)


export default orderRouter;