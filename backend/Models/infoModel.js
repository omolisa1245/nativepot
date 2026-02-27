
 import mongoose from "mongoose"
 
 const formSchema = new mongoose.Schema({
     name: { type:String,required:true},
     email:{type:String,required:true,unique:true},
     message:{type:String,required:true}
 })
 
 const formModel = mongoose.model.form || mongoose.model("form", formSchema);
 
 export default formModel;
