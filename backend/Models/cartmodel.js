    // Example with Mongoose for MongoDB
   import mongoose from "mongoose";

    const CartItemSchema = new mongoose.Schema(
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        
         
        },

        item:
          {
             type: mongoose.Schema.Types.ObjectId,
               ref: "item",
            required: true
          },
        quantity:
          {
             type: Number,
               default: 1,
            min: 1
          }
    
      
      },
      { timestamps: true }
    );

   const CartItem = mongoose.model("CartItem", CartItemSchema);
   
   export default CartItem;