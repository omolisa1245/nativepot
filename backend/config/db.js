import mongoose from "mongoose"

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://olayemiomolisa_db_user:q2XrTzoTM933VCPv@cluster0.9wy4b6t.mongodb.net/NativePot').then(()=>console.log("DB Connected"));

}