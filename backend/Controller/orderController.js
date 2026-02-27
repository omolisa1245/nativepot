import orderModel from "../Models/orderModel.js"
import userModel from "../Models/userModel.js";





const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({ success: true, orders: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })


    }
}



const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders: orders });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })


    }
}

// place orde using cash on delivery
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()

        };

        const newOrder = new orderModel(orderData)
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {
            cartData: {}, 
        })


        res.json({ success: true, message: "order placed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })

    }
}


// updatestatus to admin
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })

        res.json({ success: true, message: "order updated" })
    } catch (error) {

    }
}



export { allOrders, placeOrder, updateStatus, userOrders }